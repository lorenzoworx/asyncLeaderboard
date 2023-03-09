import render from './renderScore.js';

const getScore = async (gameId) => {
  const apiURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  const response = await fetch(apiURL);
  const listData = await response.json();
  return listData;
};

const refresh = (gameId) => {
  getScore(gameId)
    .then((data) => render(data.result));
};

export default refresh;
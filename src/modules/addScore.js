import refresh from './getScores.js';

const addScore = async (gameId, user, score) => {
  const apiURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  const response = await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const listData = await response.json();
  refresh(gameId);
  return listData;
};

export default addScore;

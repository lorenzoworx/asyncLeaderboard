import render from './renderScore.js';

const addScore = (user, score) => {
  render({ user, score });
};

export default addScore;
import render from './renderScore.js';

export const playerScores = [
  {
    user: 'john',
    score: '100',
  },
  {
    user: 'jane',
    score: '20',
  },
  {
    user: 'jill',
    score: '50',
  },
  {
    user: 'jones',
    score: '78',
  },
  {
    user: 'joan',
    score: '125',
  },
  {
    user: 'joy',
    score: '77',
  },
  {
    user: 'joyce',
    score: '42',
  },
];

export const addScore = (user, score) => {
  render({ user, score });
  playerScores.push({ user, score });
};
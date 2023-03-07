// import './style.css';
import addScore from './modules/addScore.js';
import render from './modules/renderScore.js';

const playerScores = [
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
playerScores.forEach((e) => render(e));

const leaderForm = document.getElementById('leaderForm');

leaderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(leaderForm.nameInput.value, leaderForm.scoreInput.value);
});

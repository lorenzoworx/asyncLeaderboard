import './style.css';
import { playerScores, addScore } from './modules/addScore.js';
import render from './modules/renderScore.js';

playerScores.forEach((e) => {
  render(e);
});

const leaderForm = document.getElementById('leaderForm');

leaderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(leaderForm.nameInput.value, leaderForm.scoreInput.value);
});

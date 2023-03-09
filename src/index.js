// import './style.css';
import addScore from './modules/addScore.js';
import render from './modules/renderScore.js';

const leaderForm = document.getElementById('leaderForm');

leaderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(leaderForm.nameInput.value, leaderForm.scoreInput.value);
});

import './style.css';
import addScore from './modules/addScore.js';
import refresh from './modules/getScores.js';

const leaderForm = document.getElementById('leaderForm');
const gameId = 'Zp9s2JGhfxRWLDm5nQyb';
const refreshBtn = document.getElementById('refresh');

leaderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(gameId, leaderForm.nameInput.value, leaderForm.scoreInput.value)
    .then(() => {
      leaderForm.nameInput.value = '';
      leaderForm.scoreInput.value = '';
    });
});

refreshBtn.addEventListener('click', () => {
  refresh(gameId);
});
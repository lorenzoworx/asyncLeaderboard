const render = (boardEntry) => {
  const leaderList = document.getElementById('leaderList');
  leaderList.innerHTML = '';
  boardEntry.sort((a, b) => b.score - a.score);
  boardEntry.forEach((e) => {
    leaderList.innerHTML += `
      <li>${e.user}: ${e.score}</li>
  `;
  });
};

export default render;
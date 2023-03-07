const render = (boardEntry) => {
  const leaderList = document.getElementById('leaderList');
  leaderList.innerHTML += `
  <li>${boardEntry.user}: ${boardEntry.score}</li>
  `;
};

export default render;
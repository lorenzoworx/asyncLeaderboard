const render = (boardEntry) => {
  const leaderList = document.getElementById('leaderList');
  leaderList.innerHtml += `
  <li>${boardEntry.user}: ${boardEntry.score}</li>
  `;
};

export default render;
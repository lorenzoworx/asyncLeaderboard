const render = (boardEntry) => {
  const leaderList = document.getElementById('leaderList');
  leaderList.innerHtml += `
  <li>${boardEntry.name}: ${boardEntry.score}</li>
  `;
};

export default render;
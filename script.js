const GITHUB_LINKS = [
  "https://github.com/truongluan303/Pathfinding-and-Sorting-Algorithms-Visualizer",
  "https://github.com/truongluan303/Pathfinding-and-Sorting-Algorithms-Visualizer",
  "https://github.com/truongluan303/Simple-Social-Media-on-Terminal",
  "https://github.com/truongluan303/Tic-Tac-Toe-AI",
  "https://github.com/truongluan303/Sudoku_Solver",
  "https://github.com/truongluan303/Music-Player-and-Downloader"
]
let linkIndex;

// read from the file and add the text to the html element
function insertText(filepath, id) {
  let element = document.getElementById(id);
  fetch(filepath)
    .then(response => response.text())
    .then(text => element.innerHTML += text);
}


function openInfo(num) {
  const text = './files/projects/proj' + num + '.html';
  const title = './files/projects/title' + num + '.txt';
  insertText(title, 'proj-title');
  insertText(text, 'proj-content');
  // show the buttons
  document.getElementById('proj-buttons').style.display = 'block';
  document.getElementById('proj-info').style.width = '100%';
  // set the link index with the corresponding project number
  linkIndex = num - 1;
}


function closeInfo() {
  // hide the buttons
  document.getElementById('proj-buttons').style.display = 'none';
  // delete the text
  document.getElementById('proj-title').innerHTML = '';
  document.getElementById('proj-content').innerHTML = '';
  // set the size to 0
  document.getElementById('proj-info').style.width = '0';
}


function toGithub() {
  window.open(GITHUB_LINKS[linkIndex], "_blank");
}
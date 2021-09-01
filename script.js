const PROJECT_TITLES = [
  "PATHFINDING ALGORITHMS VISUALIZER",
  "SORTING ALGORITHMS VISUALIZER",
  "SOCIAL MEDIA ON TERMINAL",
  "TIC TAC TOE AI",
  "SUDOKU SOLVER",
  "MUSIC PLAYER AND DOWNLOADER"
]

const GITHUB_LINKS = [
  "https://github.com/truongluan303/Pathfinding-and-Sorting-Algorithms-Visualizer",
  "https://github.com/truongluan303/Pathfinding-and-Sorting-Algorithms-Visualizer",
  "https://github.com/allen-tran/Social-Network",
  "https://github.com/truongluan303/Tic-Tac-Toe-AI",
  "https://github.com/truongluan303/Sudoku_Solver",
  "https://github.com/truongluan303/Music-Player-and-Downloader"
]

var linkIndex;
var darkMode = false;



function changeMode() {
  if (darkMode) {
    setLightMode();
  }
  else {
    setDarkMode();
  }
}



function setDarkMode() {
  darkMode = true;

  let body = document.getElementsByTagName("body")[0];
  body.style.background = "#18191A";

  let darkButton = document.getElementById("dark-mode-button");
  darkButton.classList.remove("far");
  darkButton.classList.add("fas");
  darkButton.style.color = "white";

  let menuButton = document.getElementById("menu-button");
  menuButton.style.color = "#7a66eb";

  let headline = document.getElementById("headline");
  headline.style.color = "rgb(255, 219, 121)";
  headline.style.textShadow = "1px 1px 0px #7a66eb, 2px 2px 0px #7a66eb, 3px 3px 0px #7a66eb," +
                              "4px 4px 0px #7a66eb, 5px 5px 0px #7a66eb, 6px 6px 0px #7a66eb," + 
                              "7px 7px 0px #7a66eb, 8px 8px 0px #7a66eb, 9px 9px 0px #7a66eb";

  let bigText = document.getElementsByTagName("h2");
  for (let i = 0; i < bigText.length; i++) {
    bigText[i].style.color = "rgb(255, 219, 121)";
    bigText[i].style.textShadow = "1px 1px 0px #7a66eb, 2px 2px 0px #7a66eb, 3px 3px 0px #7a66eb, 4px 4px 0px #7a66eb, 5px 5px 0px #7a66eb";
  }

  let edu = document.getElementById("education");
  edu.style.backgroundColor = "rgb(250, 214, 255, 0.2)";
}



function setLightMode() {
  darkMode = false;

  let body = document.getElementsByTagName("body")[0];
  body.style = (
    "background: linear-gradient(135deg, #e698b0, #fd9ba8, #8bccd6, #073a7c, #073a7c);" +
    "background-size: 200% 200%;" +
    "animation: gradient 7s ease infinite;"
  );
  
  let darkButton = document.getElementById("dark-mode-button");
  darkButton.classList.remove("fas");
  darkButton.classList.add("far");
  darkButton.style.color = "rgb(37, 25, 68)";

  let menuButton = document.getElementById("menu-button");
  menuButton.style.color = "rgb(69, 42, 131)";

  let headline = document.getElementById("headline");
  headline.style.color = "#7a66eb";
  headline.style.textShadow = "1px 1px 0px rgb(37, 25, 68), 2px 2px 0px rgb(37, 25, 68), 3px 3px 0px rgb(37, 25, 68)," +
                              "4px 4px 0px rgb(37, 25, 68), 5px 5px 0px rgb(37, 25, 68), 6px 6px 0px rgb(37, 25, 68)," + 
                              "7px 7px 0px rgb(37, 25, 68), 8px 8px 0px rgb(37, 25, 68), 9px 9px 0px rgb(37, 25, 68)";

  let bigText = document.getElementsByTagName("h2");
  for (let i = 0; i < bigText.length; i++) {
    bigText[i].style.color = "#7a66eb";
    bigText[i].style.textShadow = "1px 1px 0px rgb(37, 25, 68), 2px 2px 0px rgb(37, 25, 68), 3px 3px 0px rgb(37, 25, 68)," + 
                                  "4px 4px 0px rgb(37, 25, 68), 5px 5px 0px rgb(37, 25, 68)";
  }

  let edu = document.getElementById("education");
  edu.style.backgroundColor = "rgb(0, 0, 0, 0.1)";
}



// read from the file and add the text to the html element
function insertText(filepath, id) {
  let element = document.getElementById(id);
  fetch(filepath)
    .then(response => response.text())
    .then(text => element.innerHTML += text);
}



function openInfo(num) {
  document.getElementById('proj-title').innerHTML += PROJECT_TITLES[num - 1];

  let text = './files/projects/proj' + num + '.html';
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



function openNav() {
  document.getElementById('nav-bar').style.display = 'block';
}



function closeNav() {
  document.getElementById('nav-bar').style.display = 'none';
}



function toGithub() {
  window.open(GITHUB_LINKS[linkIndex], "_blank");
}

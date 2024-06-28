// https://javascript.info/mouse-drag-and-drop
// https://javascript.info/pointer-events

function playFireworks() {
  setTimeout(() => {
    confetti({
      particleCount: 77,
      spread: 70,
      origin: { x: 0.50, y: 0.6 },
    });
  }, 0);
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function drawCompletelyRandomShape(i) {

  let size = 100;
  let padding = 2;
  let elemsPerRow = Math.floor(800 / (size + padding*2));
  let elemOnRow = i % elemsPerRow;
  let whichRow = Math.floor(i / elemsPerRow);
  if (whichRow % 2 == 1) elemOnRow++;

  let delay = (elemOnRow % 2) * 0.5;

  let shape = getRandomInt(1, 7);

  let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  let color = colors[getRandomInt(0, colors.length)];

  switch (shape) {
    case 1:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
          <circle class="clickable" data-info="${color}_circle" r="45" cx="50" cy="50" fill="${color}" stroke="black" />
        </svg>`;
      break;
    case 2:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
          <polygon class="clickable" data-info="${color}_triangle" points="50 7.5, 100 92.5, 0 92.5" fill="${color}" stroke="black" />
        </svg>`;
      break;
    case 3:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
          <rect class="clickable" data-info="${color}_square" width="85" height="85" x="7.5" y="7.5" fill="${color}" stroke="black" />
        </svg>`;
      break;
    case 4:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg xmlns="http://www.w3.org/2000/svg" height="${size}" width="${size}" viewBox="0 0 24 24" style="animation-delay: ${delay}s">
          <path class="clickable" fill="${color}" data-info="${color}_star" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>`;
      break;
    case 5:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg xmlns="http://www.w3.org/2000/svg" height="${size}" width="${size}" viewBox="0 0 24 24" style="animation-delay: ${delay}s">
          <g transform="translate(-2.35, -2) scale(1.2)">
          <path class="clickable" fill="${color}" data-info="${color}_heart" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" />
          </g>
        </svg>`;
      break;
    case 6:
      if (rectangle_type == "horizontal") {
        document.getElementById("shapeContainer").innerHTML += 
          `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
            <rect class="clickable" data-info="${color}_rectangle" width="85" height="40" x="7.5" y="30" fill="${color}" stroke="black" />
          </svg>`;
      } else {
        document.getElementById("shapeContainer").innerHTML += 
          `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
            <rect class="clickable" data-info="${color}_rectangle" width="40" height="85" x="30" y="7.5" fill="${color}" stroke="black" />
          </svg>`;
      }
      break;
  }
}

function drawShape(i, color_shape) {

  let size = 100;
  let padding = 2;
  let elemsPerRow = Math.floor(800 / (size + padding*2));
  let elemOnRow = i % elemsPerRow;
  let whichRow = Math.floor(i / elemsPerRow);
  if (whichRow % 2 == 1) elemOnRow++;

  let delay = (elemOnRow % 2) * 0.5;

  let color = color_shape.split("_")[0];
  let shapeToNum = {circle: 1, triangle: 2, square: 3, star: 4, heart: 5, rectangle: 6};
  let shape = shapeToNum[color_shape.split("_")[1]];

  switch (shape) {
    case 1:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
          <circle class="clickable" data-info="${color}_circle" r="45" cx="50" cy="50" fill="${color}" stroke="black" />
        </svg>`;
      break;
    case 2:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
          <polygon class="clickable" data-info="${color}_triangle" points="50 7.5, 100 92.5, 0 92.5" fill="${color}" stroke="black" />
        </svg>`;
      break;
    case 3:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
          <rect class="clickable" data-info="${color}_square" width="85" height="85" x="7.5" y="7.5" fill="${color}" stroke="black" />
        </svg>`;
      break;
    case 4:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg xmlns="http://www.w3.org/2000/svg" height="${size}" width="${size}" viewBox="0 0 24 24" style="animation-delay: ${delay}s">
          <path class="clickable" fill="${color}" data-info="${color}_star" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>`;
      break;
    case 5:
      document.getElementById("shapeContainer").innerHTML += 
        `<svg xmlns="http://www.w3.org/2000/svg" height="${size}" width="${size}" viewBox="0 0 24 24" style="animation-delay: ${delay}s">
          <g transform="translate(-2.35, -2) scale(1.2)">
          <path class="clickable" fill="${color}" data-info="${color}_heart" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" />
          </g>
        </svg>`;
      break;
    case 6:
      if (rectangle_type == "horizontal") {
        document.getElementById("shapeContainer").innerHTML += 
          `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
            <rect class="clickable" data-info="${color}_rectangle" width="85" height="40" x="7.5" y="30" fill="${color}" stroke="black" />
          </svg>`;
      } else {
        document.getElementById("shapeContainer").innerHTML += 
          `<svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="animation-delay: ${delay}s">
            <rect class="clickable" data-info="${color}_rectangle" width="40" height="85" x="30" y="7.5" fill="${color}" stroke="black" />
          </svg>`;
      }
      break;
  }
}

let count;
let elem_were_clicking;
let targetCount;
let rectangle_type;
let settings = {
    gameType: "random",
    showOnlyColor: "purple",
    showOnlyShape: "heart",
    exactlyNumber: "seven",
    exactlyColor: "purple",
    exactlyShape: "heart"
};

function countElementsOfThisKind(info) {
  let c = 0;
  for (elem of document.getElementsByClassName("clickable")) {
    if (elem.dataset.info == info) c++;
  }
  return c;
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function restart() {
  count = 0;
  targetCount = -1;
  elem_were_clicking = undefined;

  rectangle_type = "horizontal";
  if (Math.random() <= 0.5) rectangle_type = "vertical";

  document.getElementById("count").innerText = count;
  document.getElementById("shapeContainer").innerHTML = "";

  if (settings.gameType == "random") {
    for (let i = 0; i < 49; i++) {
      drawCompletelyRandomShape(i);
    }
  } else {
    let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let shapes = ["circle", "triangle", "square", "rectangle", "star", "heart"];
    let exclude = "";
    let s = [];

    if (settings.gameType == "one_color_only") colors = [settings.showOnlyColor];
    if (settings.gameType == "one_shape_only") shapes = [settings.showOnlyShape];
    if (settings.gameType == "exact_count_color_shape") {
      exclude = settings.exactlyColor + "_" + settings.exactlyShape;
      let eng_to_num = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10};
      for (let i = 0; i < eng_to_num[settings.exactlyNumber]; i++) {
        s.push(exclude);
      }
    }
    let less = s.length;

    for (let i = 0; i < 49 - less; i++) {
      let x = colors[getRandomInt(0, colors.length)] + "_" + shapes[getRandomInt(0, shapes.length)];
      if (x == exclude) { i--; continue; }
      s.push(x);
    }

    shuffle(s);

    for (let i = 0; i < s.length; i++) {
      drawShape(i, s[i]);
    }
  }

  for (elem of document.getElementsByClassName("clickable")) {
    elem.addEventListener("click", (e) => {
      let info = e.target.dataset.info

      let old_count = count;

      if (count == 0) {
        elem_were_clicking = info;
        e.target.classList.add("counted")
        count++;
        targetCount = countElementsOfThisKind(info);
      } else if (elem_were_clicking == info && !e.target.classList.contains("counted")) {
        e.target.classList.add("counted");
        count++;
      } else if (elem_were_clicking == info && e.target.classList.contains("counted")) {
        e.target.classList.remove("counted");
        count--;
      }

      document.getElementById("count").innerText = count;

      // TODO: if there's none left and we just reached the target
      if (count == targetCount && count != old_count) {
        playFireworks();
      }
    });
  }
}

function loadSettings() {
  for (radio of document.querySelectorAll(`input[name="gameType"]`)) {
    if (settings.gameType == radio.value) {
      radio.checked = true;
      break;
    }
  }
  document.querySelector(`select[name="showOnlyColor"]`).value = settings.showOnlyColor;
  document.querySelector(`select[name="showOnlyShape"]`).value = settings.showOnlyShape;
  document.querySelector(`select[name="exactlyNumber"]`).value = settings.exactlyNumber;
  document.querySelector(`select[name="exactlyColor"]`).value = settings.exactlyColor;
  document.querySelector(`select[name="exactlyShape"]`).value = settings.exactlyShape;
}

function saveSettings() {
  for (radio of document.querySelectorAll(`input[name="gameType"]`)) {
    if (radio.checked) {
      settings.gameType = radio.value;
      break;
    }
  }
  settings.showOnlyColor = document.querySelector(`select[name="showOnlyColor"]`).value;
  settings.showOnlyShape = document.querySelector(`select[name="showOnlyShape"]`).value;
  settings.exactlyNumber = document.querySelector(`select[name="exactlyNumber"]`).value;
  settings.exactlyColor = document.querySelector(`select[name="exactlyColor"]`).value;
  settings.exactlyShape = document.querySelector(`select[name="exactlyShape"]`).value;
  restart();
}

document.addEventListener("DOMContentLoaded", (e) => {
  restart();
  loadSettings();

  document.getElementById("restartButton").addEventListener("click", restart);
  document.getElementById("settingsButton").addEventListener("click", (e) => {
    let settingsDiv = document.getElementById("settings");
    if (settingsDiv.style.visibility == "" || settingsDiv.style.visibility == "hidden") settingsDiv.style.visibility = "visible";
    else settingsDiv.style.visibility = "hidden";
  });

  document.getElementById("cancelSettingsButton").addEventListener("click", (e) => {
    loadSettings();

    let settingsDiv = document.getElementById("settings");
    settingsDiv.style.visibility = "hidden";
  });

  document.getElementById("saveSettingsButton").addEventListener("click", (e) => {
    saveSettings();

    // hide div
    let settingsDiv = document.getElementById("settings");
    settingsDiv.style.visibility = "hidden";
  });

});

function resize() {
  const WIDTH = 1024;
  const HEIGHT = 768;
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  factor = Math.min(winWidth / WIDTH, winHeight / HEIGHT);
  let main = document.querySelector("main");
  let mainRect = main.getBoundingClientRect();
  main.style.transform = `scale(${factor}, ${factor})`;
  main.style.marginLeft = `${(winWidth - WIDTH*factor) / 2}px`;
  main.style.marginTop = `${(winHeight - HEIGHT*factor) / 2}px`;

  // let bgSize = Math.min(winWidth, winHeight)/32*3;
  // this doesn't need to change now thanks to the resizing!
  // main.style.backgroundSize = `${bgSize}px ${bgSize}px`;
}

document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("restartButton").onclick = restart;

  resize();
  restart();

  // no double click to zoom
  document.ondblclick = function(e) {
    e.preventDefault();
  }
});

window.addEventListener("resize", (e) => {
  resize();
});
// main.js
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// Iteration 1: Drawing the Grid

function drawGrid(x, y) {
  context.strokeStyle = "grey";
  context.lineWidth = 1;
  let gridWidth = 500;
  let gridHeight = 500;

  for (let x = 0; x <= gridWidth; x += 50) {
    for (let y = 0; y <= gridHeight; y += 50) {
      context.moveTo(x, 0);
      context.lineTo(x, gridHeight);
      context.stroke();
      context.moveTo(0, y);
      context.lineTo(gridWidth, y);
      context.stroke();
    }
  }
}

function drawEverything() {
  drawGrid();
  //drawPlayer();
  // drawTreasure();
}

drawEverything(0, 0);

// Iteration 2: The Character Class

class Character {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  moveUp() {
    this.col = this.col - 1;
  }
  moveDown() {
    this.col = this.col + 1;
  }
  moveRight() {
    this.row = this.row + 1;
  }
  moveLeft() {
    this.row = this.row - 1;
  }
}

const player = new Character(0, 0);

player.moveDown();
player.moveDown();
player.moveRight();

console.log(player);

// Iteration 3: Drawing the Player

function drawPlayer(x, y) {
  const characterImage = new Image();
  characterImage.src = "./images/character-down.png";
  let characterImageX = 0;
  let characterImageY = 0;
  context.drawImage(characterImage, characterImageX, characterImageY, 50, 50);
}

// Iteration 4: The Treasure Class

class Treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  setRandomPosition() {
    this.row = this.row.Math.random();
    this.col = this.col.Math.random();
  }
}

const treasure = new Teasure(0, 0);
console.log(treasure);
//Draw Treasure
function drawTreasure(x, y) {
  const treasureImage = new Image();
  treasureImage.src = "./images/treasure.png";
  let treasureImageX = treasure.this.row;
  let treasureImageY = treasure.this.col;
  context.drawImage(treasureImage, treasureImageX, treasureImageY, 50, 50);
}

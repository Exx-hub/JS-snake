import { SNAKE_SPEED, snakeUpdater, snakeDrawer } from "./snake.js";
import { foodUpdater, foodDrawer } from "./food.js";

let lastRenderTime = 0;

const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  snakeUpdater();
  foodUpdater();
}

function draw() {
  gameBoard.innerHTML = "";
  snakeDrawer(gameBoard);
  foodDrawer(gameBoard);
}

// pending feature=== checkDeath()

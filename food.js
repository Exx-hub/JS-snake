import { onSnake, expandSnake } from "./snake.js";

let food = randomGridPosition();
const EXPANSION_RATE = 1;

export function foodUpdater() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = randomGridPosition();
    console.log("eaten");
  }
}

export function foodDrawer(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  };
}

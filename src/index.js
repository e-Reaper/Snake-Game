import "./styles.css";
import { Grid } from "./grid.js";

let grid = new Grid(20, 5);
// document.addEventListener(KeyboardEvent)

document.getElementById("control").addEventListener("click", (e) => {
  if (e.target.id === "moveUp") grid.snake.changeDirection("up");
  if (e.target.id === "moveDown") grid.snake.changeDirection("down");
  if (e.target.id === "moveRight") grid.snake.changeDirection("right");
  if (e.target.id === "moveLeft") grid.snake.changeDirection("left");
});

import { Snake } from "./snake";

export class Grid {
  constructor(size, snakeSize) {
    this.size = size;
    this.grid = [];
    this.snake = new Snake(snakeSize, size);
    this.moveInterval = undefined;
    this.intervalTime = 1000;
    this.treat = [undefined, undefined];
    this.render();
    // this.start();
  }

  render() {
    let str = "<div class='grid'>";
    for (let i = 0; i < this.size; i++) {
      str += '<div class="column">';
      for (let j = 0; j < this.size; j++) {
        let isSnake = this.snake.isSnake(i, j);
        const [treatI, treatJ] = this.treat;
        let isTreat = treatI === i && treatJ === j;
        str += `<div class="row ${isSnake ? "snake" : ""} ${
          isTreat ? "treat" : ""
        }"></div>`;
      }
      str += "</div>";
    }
    str += "</div>";
    document.getElementById("app").innerHTML = str;
  }

  start() {
    this.moveInterval = setInterval(() => {
      this.snake.move();
      // this.createTreat();
      this.render();
    }, this.intervalTime);
  }

  stop() {
    if (this.moveInterval) clearInterval(this.moveInterval);
    this.moveInterval = undefined;
  }

  createTreat() {
    let i = (Math.random() * 1000) % this.size;
    let j = (Math.random() * 1000) % this.size;
    if (this.snake.isSnake(i, j)) this.createTreat();
    else {
      this.treat = [i, j];
    }
  }

  clearBoard() {}
}

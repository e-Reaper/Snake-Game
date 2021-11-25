export class Snake {
  constructor(size, gridSize) {
    this.size = size;
    this.list = [];
    this.gridSize = gridSize;
    this.direction = "left";
    this.newMove = undefined;
    this.create();
  }

  create() {
    let size = this.size;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.list.push([i, j]);
        size--;
        if (!size) break;
      }
      // in case of gridsize smaller than snake size
      this.direction = this.direction === "left" ? "right" : "left";
      this.changeDirection(this.direction);
      if (!size) break;
    }
  }

  changeDirection(direction) {
    let newMove = undefined;
    switch (direction) {
      case "up": {
        newMove = [-1, 0];
        break;
      }
      case "down": {
        newMove = [1, 0];
        break;
      }
      case "right": {
        newMove = [0, 1];
        break;
      }
      case "left": {
        newMove = [0, -1];
        break;
      }
      default:
        break;
    }
    this.newMove = newMove;
  }

  move(shouldElongate) {
    console.log("move");
    this.list.push(this.newPos(this.currentPos()));
    if (!shouldElongate) {
      this.list.splice(0, 1);
    }
  }

  currentPos() {
    let curr = this.list[this.list.length - 1];
    console.log(curr);
    return curr;
  }

  newPos(curr) {
    let [top, left] = curr;
    top = Math.min(Math.max(top + this.newMove[0], 0), this.gridSize);
    left = Math.min(Math.max(left + this.newMove[1], 0), this.gridSize);
    return [top, left];
  }

  eat() {}

  isDead() {}

  isSnake(top, left) {
    for (let index = 0; index < this.list.length; index++) {
      const [i, j] = this.list[index];
      if (i === top && j === left) {
        return true;
      }
    }
    return false;
  }
}

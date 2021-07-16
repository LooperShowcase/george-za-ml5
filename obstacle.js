class Obstacle {
  constructor() {
    this.size = 100;
    this.x = width;
    this.y = height - this.size;
    this.velocity = 0;
  }
  show() {
    image(ob, this.x, this.y, this.size, this.size);
  }

  move() {
    this.x -= 10;
  }
}

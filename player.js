class Player {
  constructor() {
    this.size = 200;
    this.x = this.size;
    this.y = height - this.size;
    this.velocity = 0;
    this.gravity = 1.5;
  }
  jump() {
    this.velocity = -30;
  }

  move() {
    this.y += this.velocity;
    this.velocity += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    image(p1, this.x, this.y, this.size, this.size);
  }

  collided(obstacletocheck) {
    let iscollided = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,
      obstacletocheck.x,
      obstacletocheck.y,
      obstacletocheck.size,
      obstacletocheck.size
    );
    return iscollided;
  }
}

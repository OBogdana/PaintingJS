let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let Ball = function () {
    this.x = 100;
    this.y = 100;
    this.xSpeed = -2;
    this.ySpeed = 3;
};

let circle = function (x, y, radius, fillCircle){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if(fillCircle){
      ctx.fill();
  } else {
      ctx.stroke();
  }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 25, true);
};
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};
Ball.prototype.checkCollision  = function () {
    if(this.x < 0 || this.x > 800) {
        this.xSpeed = -this.xSpeed;
    }
    if(this.y < 0 || this.y > 800) {
        this.ySpeed = -this.ySpeed;
    }
};

let ball = new Ball();
setInterval(function () {
    ctx.clearRect(0, 0,800,800);

    ball.draw();
    ball.move();
    ball.checkCollision();

    ctx.strokeRect(0,0,800,800);
}, 10);


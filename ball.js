let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let Ball = function () {
    this.x = 100;
    this.y = 100;
    this.xSpeed = -3;
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

let colors = ["Green", "Red", "Gold", "Lime", "MediumPurple", "Crimson", "Thistle", "YellowGreen",
    "Navy", "Blue", "Coral", "Cyan", "DarkMagenta", "DarkGoldenRod", "DeepPink", "DodgerBlue",
    "DarkSlateGrey", "Grey", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Purple", "Sienna",];
function ballColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

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
        ctx.fillStyle = ballColor();
    }
    if(this.y < 0 || this.y > 800) {
        this.ySpeed = -this.ySpeed;
        ctx.fillStyle = ballColor();
    }
};

let balls = [];
for(let i = 0; i < 10; i++){
    balls.push(new Ball());
}

console.log(balls);

// let ball = new Ball();
setInterval(function () {
    ctx.clearRect(0, 0,800,800);
for(let i = 0; i < balls.length; i++){
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
}

    ctx.strokeRect(0,0,800,800);
}, 10);


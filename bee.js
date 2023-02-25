let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function circle(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius,0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

function drawBee(x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Yellow";

    circle(x, y, 10, true);
    circle(x, y, 10, false);
    circle(x - 7, y - 15, 11, false);
    circle(x + 7, y - 15, 11, false);
    circle(x - 4, y - 1, 2, false);
    circle(x + 4, y - 1, 2, false);
};

function update(coordinate) {
    let offset = Math.random() * 5 - 3;
    let direction = [true, false][Math.floor(Math.random() * 2)];
    direction === true ? coordinate += offset : coordinate -= offset;

    if(coordinate > 800) {
        coordinate = 800;
    }
    if(coordinate < 0) {
        coordinate = 0;
    }
    return coordinate;
};

let x = 300;
let y = 300;

setInterval(function (){
    ctx.clearRect(0,0,800,800);
    drawBee(x, y);
    x = update(x);
    y = update(y);

    ctx.strokeRect(0,0,800,800);
}, 30);

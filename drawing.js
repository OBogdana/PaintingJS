let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Квадрати від маленького до більшого

ctx.fillStyle = "IndianRed";
ctx.strokeStyle = "Grey";
ctx.lineWidth = 2;
for(let i=0; i<=5; i++) {
    let a = i*15;
    ctx.strokeRect(a*(i/2)-2, a*(i/2)-2, a+4, a+4);
    ctx.fillRect(a*(i/2), a*(i/2), a, a);
};

//Хрестик

ctx.strokeStyle = "Turquoise";
ctx.lineWidth = 70;
ctx.beginPath();
ctx.moveTo(600, 10);
ctx.lineTo(400, 270);
ctx.moveTo(400, 10);
ctx.lineTo(600, 270);
ctx.stroke();

//Круглі фігури

function Circle(x, y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle){
        ctx.fill();
    }
    ctx.stroke();
}

ctx.lineWidth = 3;
ctx.strokeStyle = "Green";
ctx.fillStyle = "LimeGreen";
let x = 50;
for (let i = 1; i < 8; i++) {
    Circle(x, 500, 30, true);
    x += 50;
}

ctx.lineWidth = 2;
ctx.strokeStyle = "Black";
ctx.fillStyle = "White";
Circle(370, 490, 10, true);
Circle(340, 490, 10, true);
ctx.fillStyle ="Black";
Circle(340, 490, 4, true);
Circle(370, 490, 3, true);

ctx.beginPath();
ctx.arc(350, 510, 15, 0, Math.PI, false);
ctx.stroke();
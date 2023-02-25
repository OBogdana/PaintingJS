let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let position = 0;

setInterval(function (){
    ctx.clearRect(0,0,500,500);
    ctx.fillRect(position,0,50,50);

    position++;
    if(position > 500) {
        position = 0;
    }
}, 5);

let size = 0;

setInterval(function (){
    ctx.clearRect(0,500,500,500);
    ctx.fillRect(0, 500, size, size);

    size++;
    if(size > 500) {
        size = 0;
    }
}, 30);
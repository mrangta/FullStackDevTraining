var canvas , ctx, start, stop, resolution = 20, cols, rows;

window.onload = function () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    cols = canvas.width / resolution;
    rows = canvas. height / resolution;
    start = document.getElementById("start");
    stop = document.getElementById("stop");
    clear = document.getElementById("clear");
    drawGrid();
    canvas.addEventListener('click',handleClick);
    clear.addEventListener('click',clearCanvas);
    start.addEventListener('click',showCoords);
}

function drawGrid() {
    for (x = 0; x <= 400; x += 20) {
        for (y = 0; y <= 400; y += 20) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 400);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(400, y);
            ctx.strokeStyle = "#05101A";
            ctx.stroke();
        }
    }
    return new Array(cols).fill(null)
    .map(() => new Array(rows).fill(null)
    .map(() => Math.floor(Math.random() * 2)));
}

function showCoords(event) {
    var x = event.clientX - 20;
    var y = event.clientY - 20;
    var cell= [x,y];
}

function handleClick(event) {
    event.preventDefault();
    ctx.fillStyle = "#009688";
    ctx.fillRect(Math.floor(event.offsetX / 20) * 20,
        Math.floor(event.offsetY / 20) * 20,
        20, 20);
    ctx.strokeStyle = "#05101A";
    ctx.stroke();
}

function clearCanvas(){
    ctx.clearRect(0,0,400,400);
    ctx.strokeStyle = "#05101A";
    ctx.stroke();
}



const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let balls = [
    {x: 0, y:0},
    {x: 100, y:100},
    {x: 200, y:200},
    {x: 300, y:300}
]

function rander() {
    context.fillStyle = 'rgba(255,255,255,0.1)';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    // context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < balls.length; i++){
        draw(balls[i])
        animate(balls[i])
    }
    requestAnimationFrame(rander)
}

function draw(ball) {
    context.beginPath();
    context.fillStyle = 'hsl('+ Math.random() * 360 + ', 100%, 50%)';
    context.arc(ball.x, ball.y, 5, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
    context.fill();
    context.closePath();

}

function animate(ball) {
    ball.y += ball.vy
}

rander();

window.addEventListener('mousemove', function (e) {
    balls.push({
        x: e.clientX,
        y: e.clientY,
        vy: Math.random() * 3 + 2
    })
})

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    rander();
})
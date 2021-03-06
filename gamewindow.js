"use strict";
var div = document.createElement('div');
div.setAttribute('class', 'rjacoby_game');
div.setAttribute('id', 'rjgame')
div.innerHTML = '<script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script><script src="https://www.gstatic.com/firebasejs/4.9.1/firebase-firestore.js"></script><script src="https://cdn.rawgit.com/rjacoby00/browsergames/c06c6402/breakoutgame.js"></script><link href="https://cdn.rawgit.com/rjacoby00/browsergames/bc685cc8/index.css" rel="stylesheet" type="text/css" id="rjgamecss"/><canvas width="480" height="320" id="rjgamesidrj" class="rjacoby_game_container"></canvas>';
document.body.appendChild(div);
/*
var config = {
  apiKey: "AIzaSyDQm9vn70ftTP8NM8xwzrcOtfwpT482rdg",
  authDomain: "bookmarkbreakout.firebaseapp.com",
  databaseURL: "https://bookmarkbreakout.firebaseio.com",
  projectId: "bookmarkbreakout",
  storageBucket: "bookmarkbreakout.appspot.com",
  messagingSenderId: "324943990435"
};
firebase.initializeApp(config);
var db = firebase.firestore();
var doc = db.doc("breakoutdata/version");
var data;

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log(doc.data());
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


var canvas = document.getElementById("rjgamesidrj");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var color = "#0095DD";
var rightPressed = false;
var leftPressed = false;
var alerted = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function unrjgame() {
    document.getElementById("rjgamecss").remove();
    document.getElementById("rjgamesidrj").remove();
    document.location.reload();
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            if(!alerted) {
                alert("GAME OVER");
                alerted = true;
                unrjgame();
            }
        }
    }
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}
setInterval(draw, 10);
*/

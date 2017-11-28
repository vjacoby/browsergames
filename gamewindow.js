"use strict";
var div = document.createElement('div');
div.setAttribute('class', 'rjacoby_game');
div.innerHTML = '<link href="https://rawgit.com/rjacoby00/browsergames/master/index.css" rel="stylesheet" type="text/css" /><canvas width="480" height="320" id="rjgamesidrj" class="rjacoby_game_container"></canvas>';
document.body.appendChild(div);
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

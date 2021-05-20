var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var Cars,car1,car2,car3,car4;
var car1Img,car2Img,car3Img,car4Img;
function preload(){
  track=loadImage("images/track.jpg")
  car1Img=loadImage("images/car1.png")
  car2Img=loadImage("images/car2.png")
  car3Img=loadImage("images/car3.png")
  car4Img=loadImage("images/car4.png")
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1)
  }
  if(gameState==1){
    clear();
    game.play()
  }
}

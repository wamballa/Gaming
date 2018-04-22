//
var canvas;
var canvasWidth=480;
var canvasHeight=320;
var playerScore = 0;
var computerScore = 0;
var playerDisplay = document.getElementById("playerChoice");
var computerDisplay = document.getElementById("computerChoice");
var autoPilot = false;

// Game objects
var computer = {
    x: canvasWidth-150,
    y:60,
    choice: "",
    image: ""
};
var player = {
    x: 5,
    y:60,
    choice: "",
    image: ""
}

var game = {}

game.init = function(){
  canvas = document.createElement("canvas");
  document.getElementById("canvasContainer").appendChild(canvas);
  canvas.width = 480;
  canvas.height = 320;
  context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage (rulesImage, ( canvas.width/2) - ( 350 / 2 ), 0, 300, 300 );
  game.start();
};

game.restart = function(){
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage (rulesImage, ( canvas.width/2) - ( 350 / 2 ), 0, 300, 300 );
  game.start();
};

game.start = function(){
    interval = setInterval (game.updateGameArea, 2000);
};

game.updateGameArea = function(){
    if ( autoPilot ){
        game.autoTurn ( game.randomChoice() );
    }
}

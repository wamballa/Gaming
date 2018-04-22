var context;
var canvas;
var canvasWidth=600;
var canvasHeight=400;
var playerScore = 0;
var computerScore = 0;
var myGame;
var playerDisplay = document.getElementById("playerChoice");
var computerDisplay = document.getElementById("computerChoice");
var autoPilot = false;

// Rules  image
var rulesReady = false;
var rulesImage = new Image();
rulesImage.onload = function() {
    rulesReady = true;
};
rulesImage.src = "assets/rules2.png";

// Rock  image
var rockReady = false;
var rockImage = new Image();
rockImage.onload = function() {
    rockReady = true;
};
rockImage.src = "assets/rock_.png";

// Paper  image
var paperReady = false;
var paperImage = new Image();
paperImage.onload = function() {
    paperReady = true;
        console.log ("READY PAPER");
};
paperImage.src = "assets/paper_.png";

// Scissors  image
var scissorsReady = false;
var scissorsImage = new Image();
scissorsImage.onload = function() {
    // console.log ("READY SCISSORS");
    scissorsReady = true;
};
scissorsImage.src = "assets/scissors_.png";

// Lizard  image
var lizardReady = false;
var lizardImage = new Image();
lizardImage.onload = function() {
    // console.log ("READY SCISSORS");
    lizardReady = true;
};
lizardImage.src = "assets/lizard.png";

// Spock  image
var spockReady = false;
var spockImage = new Image();
spockImage.onload = function() {
    // console.log ("READY SCISSORS");
    spockReady = true;
};
spockImage.src = "assets/spock.png";

// Face  image
var faceReady = false;
var faceImage = new Image();
faceImage.onload = function() {
    console.log ("READY FACE");
    faceReady = true;
};
faceImage.src = "assets/face.png";
// Game objects
var computer = {
    x: canvasWidth-250,
    y:60,
    choice: "",
    image: ""
};
var player = {
    x: 5,
    y:60,
    choice: "",
    image: ""
};

function startGame(){
    // console.log("Start Game");
    // loadImages();
    myGame = new game();
    myGame.start();
}

function game(){
    // Create the game
    canvas = document.createElement("canvas");
    document.getElementById("canvasContainer").appendChild(canvas);
    canvas.width = 480;
    canvas.height = 320;
    context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage (rulesImage, ( canvas.width/2) - ( 350 / 2 ), 0, 300, 300 );

    this.start = function(){
        console.log ("game.start()");
        interval = setInterval (updateGameArea, 2000);
    }
    this.clear = function(){
        context.clearRect (0, 0, this.canvas.width, this.canvas.height );
    }
    this.randomChoice = function(){
        //console.log ("randomChoice()");
        var temp = Math.random();
        if (temp < 0.20) {
            return "rock";
        } else if(temp <= 0.40) {
            return "paper";
        } else if (temp <= 0.60){
            return "scissors";
        } else if (temp <= 0.80){
            return "lizard";
        } else {
            return "spock";
        }
    }
    this.compare = function(playerChoice, computerChoice){
        if(playerChoice === computerChoice){
            console.log("The result is a tie! Let's try one more time.");
            return "It's a DRAW";
        }
        else if(playerChoice === "rock"){
            if(computerChoice === "scissors" || computerChoice === "lizard"){
                playerScore++;
                return "PLAYER wins: "+playerChoice+" beats "+computerChoice;
            }
            else{
                computerScore++;
                return "COMPUTER wins: "+computerChoice+" beats "+playerChoice;
            }
        }
        else if(playerChoice === "paper"){
            if(computerChoice === "rock" || computerChoice==="spock"){
                playerScore++;
                return "PLAYER wins: "+playerChoice+" beats "+computerChoice;
            } else{
                computerScore++;
                return "COMPUTER wins: "+computerChoice+" beats "+playerChoice;
            }
        }
        else if(playerChoice === "scissors"){
            if(computerChoice === "paper" || computerChoice==="lizard"){
                playerScore++;
                return "PLAYER wins: "+playerChoice+" beats "+computerChoice;
            } else{
                computerScore++;
                return "COMPUTER wins: "+computerChoice+" beats "+playerChoice;
            }
        }
        else if (playerChoice==="lizard"){
            if(computerChoice === "paper" || computerChoice==="spock"){
                playerScore++;
                return "PLAYER wins: "+playerChoice+" beats "+computerChoice;
            } else {
                computerScore++;
                return "COMPUTER wins: "+computerChoice+" beats "+playerChoice;
            }
        }
        else if (playerChoice==="spock"){
            if(computerChoice === "rock" || computerChoice==="scissors"){
                playerScore++;
                return "PLAYER wins: "+playerChoice+" beats "+computerChoice;
            } else {
                computerScore++;
                return "COMPUTER wins: "+computerChoice+" beats "+playerChoice;
            }
        }
    }

    this.nextRound = function(choice){
        // console.log ("nextRound+ "+choice);
        player.choice=choice;
        if (player.choice=="rock") player.image=rockImage;
        if (player.choice=="paper") player.image=paperImage;
        if (player.choice=="scissors") player.image=scissorsImage;
        if (player.choice=="lizard") player.image=lizardImage;
        if (player.choice=="spock") player.image=spockImage;

        computer.choice = this.randomChoice();
        if (computer.choice=="rock") computer.image=rockImage;
        if (computer.choice=="paper") computer.image=paperImage;
        if (computer.choice=="scissors") computer.image=scissorsImage;
        if (computer.choice=="lizard") computer.image=lizardImage;
        if (computer.choice=="spock") computer.image=spockImage;

        result = this.compare (player.choice, computer.choice);

        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage (computer.image, computer.x, computer.y);
        context.drawImage (player.image, player.x, player.y);
        context.font = "25px Arial";
        context.fillStyle = "black";
        context.textAlign="left";
        context.fillText("Player",player.x, computer.y-25);
        context.fillText("Computer",computer.x, computer.y-25);
        context.fillText(playerScore,player.x+50, player.y+140);
        context.fillText(computerScore, computer.x+50, computer.y+140);
        context.textAlign="center";
        context.fillText(result, canvas.width/2, computer.y+200);
        if ( autoPilot ){
            context.textAlign="center";
            context.fillStyle = "green";
            context.fillText( "AUTOPILOT", canvas.width/2, computer.y+100);
        }
    }

    this.autoPilot = function(){
        console.log ("Autopilot= "+autoPilot);
        autoPilot = !autoPilot;
        if ( !autoPilot ){
            context.fillStyle = "white";
            context.fillRect( canvas.width/2-100, computer.y+70, 180, 30);
        }
    }
}

function updateGameArea(){
    console.log ("Update Game");
    if ( autoPilot ){
        myGame.nextRound ( myGame.randomChoice() );
    }
}

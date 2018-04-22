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

game.randomChoice = function(){
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
};

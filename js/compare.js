game.compare = function(playerChoice, computerChoice){
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
};

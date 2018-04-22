game.takeTurn = function(choice){

    if ( autoPilot ) {
        autoPilot = false;
    }

    game.handlePlayerComputerChoices (choice);

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

};

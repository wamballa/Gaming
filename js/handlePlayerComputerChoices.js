game.handlePlayerComputerChoices = function(choice) {

    switch ( choice ){
        case "rock":
            player.image=rockImage;
            break;
        case "paper":
            player.image=paperImage;
            break;
        case "scissors":
            player.image=scissorsImage;
            break;
        case "lizard":
            player.image=lizardImage;
            break;
        case "spock":
            player.image=spockImage;
            break;
        default:
            break;
    }
    player.choice=choice;

    computer.choice = this.randomChoice();
    if (computer.choice=="rock") computer.image=rockImage;
    if (computer.choice=="paper") computer.image=paperImage;
    if (computer.choice=="scissors") computer.image=scissorsImage;
    if (computer.choice=="lizard") computer.image=lizardImage;
    if (computer.choice=="spock") computer.image=spockImage;

}

game.autoPilot = function(){
    console.log ("Autopilot= "+autoPilot);
    autoPilot = !autoPilot;
    if ( !autoPilot ){
        context.fillStyle = "white";
        context.fillRect( canvas.width/2-100, computer.y+70, 180, 30);
    }
};

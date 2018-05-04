class GameOver extends Phaser.State {

	create() {

		console.log ("GAME OVER STATE");
		
	}

	restartGame() {

		this.game.global.lives = 3;
		this.game.global.score = 0;

		this.game.state.start("GameTitle");
	}

}

export default GameOver;

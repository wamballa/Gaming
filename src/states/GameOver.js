class GameOver extends Phaser.State {

	create() {

		console.log ("GAME OVER");

		// this.gameOverText =
		this.add.bitmapText(210, 200, 'fat-and-tiny', 'GAME OVER PLAYER 1', 32);
		// this.gameOverText.smoothed = false;
		// this.gameOverText.tint = 0x000000;

		this.input.onDown.addOnce( this.restartGame, this);

	}

	restartGame() {

		this.game.global.lives = 3;
		this.game.global.score = 0;

		this.game.state.start("GameTitle");
	}

}

export default GameOver;

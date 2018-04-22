class Preload extends Phaser.State {

	preload() {
		console.log ("PRELOAD STATE");
		/* Preload required assets */
		// this.game.load.image('logo', 'assets/player2.png');
	}

	create() {

		// var logo = this.game.add.sprite (this.game.width/2, this.game.height/2,'splash');
		// logo.anchor.setTo ( 0.5 );

		this.input.onDown.addOnce(this.startTitle, this);

	}

	startTitle(){

		this.game.state.start("GameTitle");

	}

}

export default Preload;

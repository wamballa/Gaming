class GameTitle extends Phaser.State {

	preload(){
		console.log ("GAMETITLE STATE");

		this.GREEN = 0x0aff01;
		this.PURPLE = 0xdc00e8;
		this.RED = 0xdb0102;
		this.CYAN = 0x09ffe8;
		this.YELLOW = 0xffff00;
		this.WHITE = 0x000000;
	}

	create() {

		this.input.onDown.addOnce(this.startGame, this);

	}

	getScore ( n, p, c) {
		// Ensure there are preceding 0s
		// n = number / score
		// p = padding in 0s
		// c = character instead of a 0
		var pad_char = typeof c !== 'undefined' ? c : '0';
		var pad = new Array(1 + p).join(pad_char);
		return (pad + n).slice(-pad.length);
	}

	startGame() {

		this.game.state.start("Level1");

	}

}

export default GameTitle;

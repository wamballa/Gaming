class GameTitle extends Phaser.State {

	preload(){
		console.log ("GAMTITLE PRELOAD");

		this.GREEN = 0x0aff01;
		this.PURPLE = 0xdc00e8;
		this.RED = 0xdb0102;
		this.CYAN = 0x09ffe8;
		this.YELLOW = 0xffff00;
		this.WHITE = 0x000000;
	}

	create() {
		console.log ("GAMETITLE CREATE()");

		//===== PLAYER 1 SCORE TEXT =====//

		this.scoreTitle1 = this.add.bitmapText( 85, 0, 'fat-and-tiny', '1UP', 32);
		this.scoreTitle1.smoothed = false;
		this.scoreTitle1.tint = 0xffffff;

		this.scoreText = this.add.bitmapText(64, 20, 'fat-and-tiny', this.getScore ( this.game.global.score, 6 ), 32);
		this.scoreText.smoothed = false;
		this.scoreText.tint = 0xffff00;

		//===== LIVES TEXT =====//

		this.livesText = this.game.add.bitmapText(190, 0, 'fat-and-tiny', this.game.global.lives, 32);
		this.livesText.smoothed = false;
		this.livesText.tint = 0xffffff;

		//===== LIVES IMAGE =====//

		this.livesIcon = this.game.add.sprite ( 215, 20,'livesIcon');
		this.livesIcon.anchor.setTo ( 0.5);

		//===== PLAYER 2 SCORE TEXT =====//

		this.scoreTitle2 = this.add.bitmapText( this.game.width-150, 0, 'fat-and-tiny', '2UP', 32);
		this.scoreTitle1.smoothed = false;
		this.scoreTitle1.tint = 0xffffff;

		this.scoreText2 = this.add.bitmapText(this.game.width-175, 20, 'fat-and-tiny', '000000', 32);
		this.scoreText2.smoothed = false;
		this.scoreText2.tint = 0xffff00;

		//===== HIGH SCORE TEXT =====//

		this.highScoreTitle = this.add.bitmapText( this.game.width/2, 0, 'fat-and-tiny', 'HI', 32);
		this.highScoreTitle.smoothed = false;
		this.highScoreTitle.tint = this.CYAN;

		var highscore = this.getScore ( this.game.global.highscore, 6 );

		this.highScoreText = this.add.bitmapText(this.game.width/2-30, 20, 'fat-and-tiny', highscore, 32);
		this.highScoreText.smoothed = false;
		this.highScoreText.tint = this.YELLOW;

		this.add.bitmapText ( 150, 100,'fat-and-tiny', 'JETPAC GAME SELECTION ', 32);

		this.add.bitmapText ( 150, 150,'fat-and-tiny', '1			1 PLAYER GAME ', 32);
		this.add.bitmapText ( 150, 180,'fat-and-tiny', '2			2 PLAYER GAME ', 32);
		this.add.bitmapText ( 150, 210,'fat-and-tiny', '3			KEYBOARD ', 32);
		this.add.bitmapText ( 150, 240,'fat-and-tiny', '4			KEMPSTON JOYSTICK ', 32);
		this.add.bitmapText ( 150, 300,'fat-and-tiny', '5			CLICK TO START ', 32);

		// this.copyrightText =
		this.add.bitmapText( 80,this.game.height-30, 'fat-and-tiny', '(c) 1983 WAMBALLA NO RIGHTS RESERVED', 32);

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
		this.game.state.start("Main");
	}

}

export default GameTitle;

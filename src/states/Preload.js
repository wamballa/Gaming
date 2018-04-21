class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		this.game.load.image('logo', 'assets/player2.png');
		this.game.load.atlas ( 'player', 'assets/jetpac_atlas.png', 'assets/jetpac_atlas_hash.json');
		this.game.load.atlas ( 'cloud',  'assets/cloud_atlas.png',   'assets/cloud_hash.json');
		this.game.load.image ('ground', 'assets/ground/ground.png');
		this.game.load.image ('ledge4', 'assets/platform/ledge4.png');
		this.game.load.image ('ledge6', 'assets/platform/ledge6.png');
		this.game.load.image ('topMargin', 'assets/platform/topmargin.png');
		this.game.load.image ('bullet', 'assets/bullet.png');
		this.game.load.image ('fuel', 'assets/fuel.png');
		this.game.load.image ('shipBot', 'assets/ship/ship1.png');
		this.game.load.image ('shipMid', 'assets/ship/ship2.png');
		this.game.load.image ('shipTop', 'assets/ship/ship3.png');
	 	this.game.load.spritesheet('exhaust', 'assets/ship/exhaust.png', 32, 32,2 );

		//			ENEMIES
		this.game.load.spritesheet('fireball', 'assets/enemies/fireball.png', 32, 22,2 );
		this.game.load.spritesheet('fuzzball', 'assets/enemies/fuzzball.png', 16, 14, 2 );

		//			TREASURE
		this.game.load.image ('goldbar', 'assets/treasure/goldbar.png');
		this.game.load.image ('blob', 'assets/treasure/blob.png');
		this.game.load.image ('nuclear', 'assets/treasure/nuclear.png');
		this.game.load.image ('triangle','assets/treasure/triangle.png');
		this.game.load.spritesheet ('diamond', 'assets/treasure/diamond.png', 31, 28, 4);

		//			FONTS
		this.game.load.bitmapFont('fat-and-tiny', 'assets/font/fat-and-tiny.png', 'assets/font/fat-and-tiny.xml');
        this.game.load.bitmapFont('assets/font/digits');

		this.game.load.image ('livesIcon', 'assets/lives/lives.png');

		this.game.load.image ('splash', 'assets/menu/splash.png');

		// var loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
        //
		// loadingBar.anchor.setTo(0.5);

		// this.load.setPreloadSprite(loadingBar);

		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
	}

	create() {
		console.log ("PRELOAD CREATE()");
var temp = this.game.scale.scaleFactor;
console.log ("SCALE FACTOR X = "+temp.x );
console.log ("SCALE FACTOR Y = "+temp.y );

        this.stage.backgroundColor = 0x000000;

// console.log ("GAME HEIGHT = "+this. game.height);

		// this.background = this.add.image ( this.game.centerX, this.game.centerY, 'splash');
	this.background = this.add.image ( this.game.width/2, this.game.height/2, 'splash');
			this.background.anchor.setTo ( 0.5 );
	this.background.scale.setTo (temp.x, temp.y);
// this.game.scaleSprite ( this.background );

		// var temp1 = window.screen.availWidth;
		// var temp2 = window.screen.availHeight;
        //
		// this.background.height = temp2;
		// this.background.width = temp1;

		// this.background.height = this.game.height;
		// this.background.width = this.game.width;

// console.log ("GAME HEIGHT= "+this.game.height);
console.log ("SPRITE width= "+this.background.width);
console.log ("SPRITE height= "+this.background.height);
// console.log ("AVAIL WIDTH= "+temp1);
// // console.log ("AVAIL HEIGHT= "+temp2);
// console.log ("GAME WIDTH= "+this.game.width);
// console.log ("GAME HEIGHT= "+this.game.height);
// console.log ("CANVAS HEIGHT= "+this.world.width);
// console.log ("CANVAS HEIGHT= "+this.world.height);
// console.log ("BACKGROUND HEIGHT= "+this.background.height);



		this.input.onDown.addOnce(this.startTitle, this);

	}

	// scaleSprite (sprite, availableSpaceWidth, availableSpaceHeight, padding, scaleMultiplier) {
	// 	var scale = this.getSpriteScale(sprite._frame.width, sprite._frame.height, availableSpaceWidth, availableSpaceHeight, padding);
	// 	sprite.scale.x = scale * scaleMultiplier;
	// 	sprite.scale.y = scale * scaleMultiplier;
	// }

	getSpriteScale (spriteWidth, spriteHeight, availableSpaceWidth, availableSpaceHeight, minPadding) {
		var ratio = 1;
		var currentDevicePixelRatio = window.devicePixelRatio;
		// Sprite needs to fit in either width or height
		var widthRatio = (spriteWidth * currentDevicePixelRatio + 2 * minPadding) / availableSpaceWidth;
		var heightRatio = (spriteHeight * currentDevicePixelRatio + 2 * minPadding) / availableSpaceHeight;
		if (widthRatio > 1 || heightRatio > 1) {
			ratio = 1 / Math.max(widthRatio, heightRatio);
		}

		return ratio * currentDevicePixelRatio;
	}

	resize (width, height) {
		console.log ("RESIZE FUNCTION "+this.game.height);
		// this.background.height = height;
		// this.background.width = width;
	}
    //
	// 	this.scaleSprite(this.title, width, height / 3, TheGame.Params.minPadding, 1);
	// 	this.title.x = this.world.centerX;
	// 	this.title.y = this.world.centerY - height / 3;
    //
	// 	this.scaleSprite(this.playButton, width, height / 3, TheGame.Params.minPadding, 1);
	// 	this.playButton.x = this.world.centerX;
	// 	this.playButton.y = this.world.centerY;
    //
	// 	this.scaleSprite(this.infoButton, width, height / 3, TheGame.Params.minPadding, 0.5);
	// 	this.infoButton.x = this.world.centerX - this.infoButton.width / 2;
	// 	this.infoButton.y = this.world.centerY + height / 3;
    //
	// 	this.scaleSprite(this.audioButton, width, height / 3, TheGame.Params.minPadding, 0.5);
	// 	this.audioButton.x = this.world.centerX + this.audioButton.width / 2;
	// 	this.audioButton.y = this.world.centerY + height / 3;
    //
	// }

	startTitle(){

		this.game.state.start("GameTitle");

	}

}

export default Preload;

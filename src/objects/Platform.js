export class Platform extends Phaser.Sprite {

	constructor( game, x, y, sprite, scale ){

		// console.log ("PLATFORMS CONSTRUCTOR");

		super ( game, x, y, sprite, scale);

		this.HUD_HEIGHT = 60;
		this.SCALE = scale;
		this.SPRITE = sprite;
		this.GAME = game;

		game.physics.arcade.enableBody(this);
		this.enableBody = true;
		this.smoother = false;
	    this.body.setSize (this.width, this.height, 0, 0);
		this.body.immovable = true;

console.log ("SCALE  "+this.game.global.scale_ratio);

		// this.scale.set(this.game.global.scale_ratio);

		this.GAME.add.existing(this);

	}

	hitPlayer() {

		this.reset ( 0,0 );
		this.kill();
		this.STATE.addScore ( 100 );
	}

	update () {

	} // update

}

export default Platform;

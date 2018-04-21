export class Treasure extends Phaser.Sprite {

	constructor( game, x, y, sprite, state ){

		// console.log ("TREASURE CONSTRUCTOR");

		super ( game, x, y, sprite, state );

		this.HUD_HEIGHT = 60;
		this.STATE = state;
		this.SPRITE = sprite;

		game.physics.arcade.enableBody(this);
		this.enableBody = true;
		this.smoother = false;
		this.body.bounce.y = 0.2;
		this.body.gravity.y = 250;
		this.anchor.setTo ( 0.5, 0 );
	    this.body.setSize (this.width, this.height, 0, 0);

		if ( this.SPRITE == 'diamond') {

			// console.log ("IT A DIAMOND");
			this.animations.add ('animate');
			this.animations.play('animate', 10, true);
		}

		game.add.existing(this);

	}

	hitPlayer() {

		this.reset ( 0,0 );
		this.kill();
		this.STATE.addScore ( 100 );
	}

	update () {

		// 			Hits platform
		this.game.physics.arcade.collide ( this, this.STATE.platforms );

		//			Hit player
		this.game.physics.arcade.overlap ( this, this.STATE.player, this.hitPlayer, null, this );


	} // update

}

export default Treasure;

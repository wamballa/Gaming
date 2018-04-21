export class ShipPart extends Phaser.Sprite {

	constructor( game, x, y, sprite, state ){

		// console.log ("SHIP CONSTRUCTOR "+sprite);

		super ( game, x, y, sprite, state );

		this.SPRITE = sprite;
		this.STATE = state;

		game.physics.arcade.enableBody(this);
		this.enableBody = false;
		this.smoother = false;
		this.anchor.setTo ( 0.5, 0 );
		this.body.gravity.y = 100;
		this.body.velocity.y = 0;
		game.add.existing(this);

		this.isInPlace = false;

		if ( this.SPRITE == 'exhaust'){
			this.anchor.setTo ( 0.5 );
			this.animations.add ( 'exhaust' );
			this.animations.play ( 'exhaust', 10, true );

		}


	}

	update () {

		if ( this.SPRITE == 'shipBot') this.isInPlace = true;

		if ( this.SPRITE == 'shipMid' && ( !this.isInPlace ) ) {

			var delta = this.STATE.shipMid.x - this.STATE.shipBot.x;
			var isNearToShip = ( ( delta>-5) && (delta<5));

			if ( (this.y > this.game.height-85 && this.STATE.player.alive && isNearToShip ) ) {
				// console.log (" PART FALLING "+this.y);
				this.body.gravity.y = 0;
				this.body.velocity.y = 0;
				this.y = this.game.height-85	;
				this.isInPlace = true;
			}
		}

		if ( this.SPRITE == 'shipTop' && ( !this.isInPlace ) ){

			var delta = this.STATE.shipTop.x - this.STATE.shipBot.x;
			var isNearToShip = ((delta>-5) && (delta<5));

			if ( (this.y > this.game.height-115 && this.STATE.player.alive && isNearToShip)) {

				this.body.gravity.y = 0;
				this.body.velocity.y = 0;
				this.y = this.game.height-115;
				this.isInPlace = true;
			}
		}
	} // update

}

export default ShipPart;

export class Fuel extends Phaser.Sprite {

	constructor( game, x, y, sprite, state ){

		super ( game, x, y, sprite, state );

		this.HUD_HEIGHT = 60;
		// this.STATE = state;

		game.physics.arcade.enableBody(this);
		this.enableBody = true;
		this.smoother = false;
		this.body.bounce.y = 0.2;
		this.body.gravity.y = 250;
		this.anchor.setTo ( 0.5, 0 );
	    this.body.setSize (this.width, this.height, 0, 0);
		this.STATE = state;

		this.isCarryingFuel = false;
		this.isDropping = false;
		this.fuelLevel = [0,0,0];
		this.isShipFuelled = false;

		game.add.existing(this);

	}

	update () {

		// fuel hits platform
		// this.game.physics.arcade.collide ( this, this.STATE.platforms );

		if ( this.isCarryingFuel && !this.isDropping ) {

			this.body.gravity.y = 0;

		} else {

			this.body.gravity.y = 300;

		}

		// calculate if dropped FUEL is near to SHIP to fuel it
		var delta = this.STATE.fuel.x - this.STATE.shipBot.x;
		var isNearToShip = ( ( delta>-5) && (delta<5));

		if ( this.y > 400 && isNearToShip && this.alive ) {

			this.kill();
			this.isDropping = false;
			this.isCarryingFuel = false;

			if ( this.fuelLevel[0]==0 ) {

				this.fuelLevel[0]=1;

			}
			else if ( this.fuelLevel[1]==0) {

				this.fuelLevel[1]=1;

			}
			else if ( this.fuelLevel[2]==0){

				this.fuelLevel[2]=1;
				this.isShipFuelled = true;
	
			}
		}


	} // update

}

export default Fuel;

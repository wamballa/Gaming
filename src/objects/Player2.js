export class Player extends Phaser.Sprite {

	constructor( game, x, y, sprite, state ){

		super ( game, x, y, sprite, state );

		this.START_X = game.width/2;
		this.START_Y = game.height-50;
		this.GRAVITY = 200;
		this.SPEED = 150;
		this.x = this.START_X;
		this.y = Math.round(this.START_Y);
		this.STATE = state;

		this.facingLeft = false;
		this.isFlying = false;

		game.physics.arcade.enableBody(this);
		this.enableBody = true;
		this.smoother = false;
		this.anchor.setTo (0.5, 0.5);
	    // this.body.setSize (this.width, this.height, 0, 0);
		this.body.bounce.y = 0.2;
		this.body.gravity.y = this.GRAVITY;
		// this.body.collideWorldBounds = false;

		// ==== Create BULLETS ====

		//  Creates 50 bullets, using the 'bullet' graphic
	    this.weapon = this.game.add.weapon(50, 'bullet');

	    //  The bullet will be automatically killed when it leaves the world bounds
	    // this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
		this.weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
	    this.weapon.bulletLifespan = 500;

	    //  Because our bullet is drawn facing up, we need to offset its rotation:
	    this.weapon.bulletAngleOffset = 0;
    	this.weapon.bulletWorldWrap = true;

	    //  The speed at which the bullet is fired
	    this.weapon.bulletSpeed = 1000;

	    //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
	    this.weapon.fireRate = 90;
		this.weapon.fireAngle = 0;

	    //  Tell the Weapon to track the 'player' Sprite, offset by 14px horizontally, 0 vertically
	    this.weapon.trackSprite( this, 14, 0);

		// === create CLOUDS ===//

		this.clouds = this.game.add.group();

		for ( let a=0; a<10 ; a++ ){

			var cloud = this.game.add.sprite ( 0, 0, 'cloud');
			cloud.anchor.setTo ( 0.5 );
			cloud.smoother = false;
			cloud.scale.setTo ( 2.0 );
			var animation = cloud.animations.add ( 'cloud', Phaser.Animation.generateFrameNames('cloud',1,3),10,false );
			animation.killOnComplete = true;
			this.clouds.add ( cloud );
			cloud.kill();

		} // for

		//			SETUP ANIMATIONS

		this.animations.add ('right', Phaser.Animation.generateFrameNames ("right", 1, 4), 20, true);
		this.animations.add ('rightstop', ['right1'], 1, false);
		this.animations.add ('left', ['left1', 'left2', 'left3', 'left4'], 20, true);
		this.animations.add ('leftstop', ['left1'], 1, false);
		this.animations.add ('flyleft', ['flyleft1', 'flyleft2', 'flyleft3', 'flyleft4'], 20, true);
		this.animations.add ('flyright', ['flyright1', 'flyright2', 'flyright3', 'flyright4'], 20, true);
		this.animations.play('rightstop');

		game.add.existing(this);

		//		Setup CURSOR KEYS

		this.cursors = this.game.input.keyboard.createCursorKeys();
	    this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

	} // constructor

	bulletHitPlatform( bullet, platform ) {
		bullet.kill();
	}

	explode() {
		let cloud = this.clouds.getFirstDead ( false );
		if ( cloud != null ){
			cloud.revive();
			cloud.reset ( this.x, this.y );
			cloud.animations.play('cloud');
		}
	}

	pickupTreasure ( player, treasure ){
		treasure.kill();
	}

	update () {
console.log ("x y "+this.x+' '+this.y);
		if ( this.alive ){

			// player hits top margin / HUD
			this.game.physics.arcade.collide ( this, this.STATE.topMargin );

			// Collision handler for TREASURE
			// var hitPlatform = this.game.physics.arcade.collide( this, this.STATE.treasures, this.pickupTreasure, null, this );
			// this.game.physics.arcade.collide( this, this.STATE.platforms);

			if ( this.facingLeft ) {
				this.weapon.fireAngle = 180;
			    this.weapon.trackSprite( this, -14, 0);
			}
			else {
				this.weapon.fireAngle = 0;
				this.weapon.trackSprite( this, 14, 0);
			}
			// player hits left or right wall and loops
			if ( this.x > this.game.width ) {
				this.x = 0 ;
			} else if ( this.x<0 ) {
				this.x = this.game.width;
			}

			// control player

			if (this.fireButton.isDown)
		    {
		        this.weapon.fire();
		    }

			if ( this.cursors.right.isDown){
				this.facingLeft = false;
				this.body.velocity.x = this.SPEED;
				if ( this.isFlying ) {
					// console.log ("FLYING");
					this.animations.play('flyright');
				}
				else {
					// console.log ("NOT FLYING");
					this.animations.play('right');
				}
			}
			else if ( this.cursors.left.isDown){
				this.facingLeft = true;
				this.body.velocity.x = -this.SPEED;
				if ( this.isFlying ) {
					this.animations.play('flyleft');
				}
				else {
					this.animations.play('left');
				}

				//
			}
			else {
				// console.log ( "ANIMATION STOP");
				if ( !this.isFlying ) {
					// console.log ("OBJECT= "+this.player);
					this.animations.stop();
					this.body.velocity.x = 0;
				}
				//this.player.frame = 4;
			}
			//  Allow the player to jump if they are touching the ground.
			// if ( this.cursors.up.isDown && this.player.body.touching.down && hitPlatform)
			if ( this.cursors.up.isDown  )
			{
				if ( !this.isFlying  ){
					console.log ( "MAKE CLOUD");
					let cloud = this.clouds.getFirstDead ( false );
					if ( cloud != null ){
						cloud.revive();
						cloud.reset ( this.x, this.y+20 );
						cloud.animations.play('cloud');
					}
				}
				this.body.velocity.y = -this.SPEED;
				this.isFlying = true;
				if ( this.facingLeft ) {
					// console.log ("FLY LEFT");
					this.animations.play('flyleft');
				} else {
					// console.log ("FLY RIGHT");
					this.animations.play ('flyright');
				}
			}
		}


	} // update

}

export default Player;

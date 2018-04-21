import Player from 'objects/Player.js';
import Enemy from 'objects/Enemy';
import Fuel from 'objects/Fuel';
import ShipPart from 'objects/ShipPart'

class Level2 extends Phaser.State {

	create() {
		console.log ("Level 2");

		this.ENEMY_SPAWN_RATE = 1000;
		this.ENEMY_SPAWN_DELAY = this.game.time.now;
		this.HUD_HEIGHT = 60;

		this.score = 0;
		this.lives = 3;

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Set the games background colour
		this.game.stage.backgroundColor = '#000000';
		// this.game.world.setBounds(0, 0, 640, 380);
		// this.game.scale.setGameSize(640, 200); // et voila!

		//include Player object
		// let enemy = new Enemy (this.game);

		//=== CREATE FLOOR
		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;
     	this.game.physics.enable( this.platforms, Phaser.Physics.ARCADE);
		for ( var x=0; x <= this.game.width; x+=18 ){
			var block = null;
			if ( x==0) {
				// block = this.game.add.sprite ( x, this.game.height-18, 'ground1');
				block = this.platforms.create ( x, this.game.height-18, 'ground1' );
			}
			else if ( x < this.game.width-18) {
				block = this.platforms.create ( x, this.game.height-18, 'ground2' );
			}
			else {
				block = this.platforms.create ( x-9,this.game.height-18, 'ground3' );
			}
			if ( block != null ) {
				block.tint = 0xffff00;
				block.body.immovable = true;
				this.platforms.add ( block );
			}
		}
		var scale = 1.1;
		block = this.platforms.create ( 80, 200, 'ledge6' );
		block.smoother = false;
	    block.body.setSize(108, 18, 0, 0);
		block.scale.setTo ( scale );
		block.body.immovable = true;

		block = this.platforms.create ( 300, 260, 'ledge4' );
		block.smoother = false;
	    block.body.setSize(72, 18, 0, 0);
		block.scale.setTo ( scale );
		block.body.immovable = true;

		block = this.platforms.create ( 470, 130, 'ledge6' );
		block.smoother = false;
	    block.body.setSize(108, 18, 0, 0);
		block.scale.setTo ( scale );
		block.body.immovable = true;

		this.topMargin = this.game.add.sprite ( 0, 0, 'topMargin');
		this.topMargin.enableBody = true;
     	this.game.physics.enable( this.topMargin, Phaser.Physics.ARCADE);
		this.topMargin.body.immovable = true;

		//==== ship parts ====//
		this.ship = this.game.add.group();
		this.shipBot = new ShipPart (this.game, 420, 430, 'shipBot');
		this.ship.add (this.shipBot);
		this.shipMid = new ShipPart (this.game, 340, 230, 'shipMid');
		this.ship.add (this.shipMid);
		this.shipTop = new ShipPart (this.game, 140, 170, 'shipTop');
		this.ship.add (this.shipTop);

		//==== Create exhaust ====//
		this.exhaust = this.game.add.sprite ( this.shipBot.x, this.shipBot.y+48,'exhaust');
		// this.exhaust = this.game.add.sprite ( this.shipBot.x, this.shipBot.y-208,'exhaust');
		this.exhaust.anchor.setTo ( 0.5, 0.5 );
		this.exhaust.animations.add ( 'fire' );
		this.exhaust.animations.play ( 'fire', 10, true );
		this.exhaust.kill();

		//=== Create game FLAGS
		this.nextPart = this.shipMid;
		this.isCarryingPart = false;
		this.isShipFuelled = false;
		this.isShipComplete = false;
		this.canTakeOff = false;

		//=== Create Player ===//

		this.player = new Player ( this.game, 200, 100 );
		this.facingLeft = false;
		this.isFlying = false;

		//==== create  fuel ====
		this.fuel = new Fuel ( this.game, 100, 100 );
		this.fuel.kill();
		this.fuel.hitFuel = false;
		this.fuel.isCarryingFuel = false;
		this.fuel.isDropping = false;

		//==== Create Enemies ===//
		this.enemies = this.game.add.group();
		this.numEnemies = 10;
		for ( var i = 0; i<this.numEnemies; i++ ){
			var enemy = new Enemy ( this.game,  0, 0, 'fireball', this );
			this.enemies.add ( enemy );
			enemy.kill();
		}

		//===== SCORE TEXT =====//
		this.scoreTitle1 = this.add.bitmapText( 85, 0, 'fat-and-tiny', '1UP', 32);
        this.scoreTitle1.smoothed = false;
        this.scoreTitle1.tint = 0xffffff;

        this.scoreText = this.add.bitmapText(64, 20, 'fat-and-tiny', this.getScore ( this.score, 6 ), 32);
        this.scoreText.smoothed = false;
        this.scoreText.tint = 0xffff00;

		//===== LIVES TEXT =====//
		this.livesText = this.game.add.bitmapText(190, 0, 'fat-and-tiny', '3', 32);
		this.livesText.smoothed = false;
		this.livesText.tint = 0xffffff;

		//===== LIVES IMAGE =====//
		this.livesIcon = this.game.add.sprite ( 215, 20,'livesIcon');
		this.livesIcon.anchor.setTo ( 0.5);

	} // create

	hitFuel ( player, fuel ){
		console.log ( "HIT FUEL");
		this.fuel.hitFuel = true;
		this.fuel.isCarryingFuel = true;
	}

	partPicked ( player, part ) {
		this.isCarryingPart = true;
	}

	enemyBulletHit ( bullet, enemy ) {
		// console.log ("ENEMY HIT");
		bullet.kill();
		enemy.explode();
		enemy.kill();
		this.score++;
		console.log ( "SCORE= "+this.score);
		this.scoreText.text = this.getScore ( this.score, 6 );
	}

	enemyPlatformHit ( bullet, enemy ) {
		// console.log ("ENEMY HIT PLATFORM");
		enemy.explode();
		enemy.kill();
	}

	enemySpawn(){
		// timed event that respawns dead aliens
		let enemy = this.enemies.getFirstDead (false);
		if ( enemy == null ) return;
		// console.log ( "ENEMY SETUP ");
		enemy.revive();
		enemy.setup();
	}

	playerSpawn() {
		if ( this.lives == 0 ) {
			this.game.state.start("GameOver");
		}
		this.player.revive();
		this.player.reset ( this.player.START_X, this.player.START_Y );

	}

	enemyHitPlayer( player, enemy ) {

		this.lives --;
		this.livesText.text = this.lives;

		console.log ("LIVES= "+this.lives);
		player.explode();
		player.kill();
		this.enemies.callAll('kill');
		this.game.time.events.add(Phaser.Timer.SECOND * 1, this.playerSpawn, this);
	}

	getScore ( n, p, c) {
		// n = number / score
		// p = padding in 0s
		// c = character instead of a 0
    	var pad_char = typeof c !== 'undefined' ? c : '0';
    	var pad = new Array(1 + p).join(pad_char);
    	return (pad + n).slice(-pad.length);
	}

	gotoGameTitle () {
		this.game.state.start("GameTitle");
	}

	takeOff () {
		console.log ("CAN TAKE OFF");
		this.player.kill();
		this.canTakeOff = true;
	}

	update() {

		// enemy spawn
		if ( this.game.time.now > this.ENEMY_SPAWN_DELAY ){
			this.ENEMY_SPAWN_DELAY = this.game.time.now + this.ENEMY_SPAWN_RATE;
			this.enemySpawn();

		}

		//==== handle FUEL ======//

		// drop fuel when SHIP COMPLETE
		if ( this.isShipComplete && !this.fuel.alive && !this.fuel.isShipFuelled ){
			// console.log ("SHIP COMPLETE");
			this.fuel.revive();
			let newX = this.game.rnd.integerInRange ( 100, this.game.width-100 );
			this.fuel.reset ( newX, this.HUD_HEIGHT );
		}

		if ( this.fuel.alive  && !this.fuel.isCarryingFuel ) {
			this.game.physics.arcade.overlap ( this.player, this.fuel, this.hitFuel, null, this );
		}

		if (this.fuel.isCarryingFuel && !this.fuel.isDropping ) {
			this.fuel.x = this.player.x;
			this.fuel.y = this.player.y;
			var temp = this.fuel.x - this.shipBot.x;
			if ( ( temp > -5 ) && ( temp<5 ) ){
				console.log ( "DROP FUEL NOW");
				this.fuel.x = this.shipBot.x;
				this.fuel.isCarryingFuel = false;
				this.fuel.isDropping = true;

			}
		}

		if ( this.fuel.fuelLevel[0] == 1 ) {
			this.shipBot.tint = 0xffff00;
		}
		if ( this.fuel.fuelLevel[1] == 1 ) {
			this.shipMid.tint = 0xffff00;
		}
		if ( this.fuel.fuelLevel[2] == 1 ) {
			this.shipTop.tint = 0xffff00;
		}

		//==== pick up parts of ShipPart
		this.game.physics.arcade.overlap ( this.player, this.nextPart, this.partPicked, null, this );

		if ( this.isCarryingPart ) {
			this.nextPart.x = this.player.x;
			this.nextPart.y = this.player.y;
			// console.log (this.nextPart.x+" "+this.ship1.x);
				var temp = this.nextPart.x - this.shipBot.x;
				if ( ( temp > -20 ) && ( temp < 20 ) ) {

					this.nextPart.x = this.shipBot.x;
					this.nextPart.body.gravity.y = 100;
					this.isCarryingPart = false;
					if (this.nextPart==this.shipMid ){
						this.nextPart = this.shipTop;
					} else {
						this.nextPart = null;
					}
				}
		}
		//=============================//

		// SHIP TAKEOFF  complete and FUELed
		if ( this.fuel.isShipFuelled ){
			console.log ("SHIP IS FUELLED");
			// player hits ship part
			this.game.physics.arcade.overlap (  this.player, this.shipBot, this.takeOff, null, this  );
		}

		if ( this.canTakeOff ){
			console.log (" CAN TAKE OFF = TRUE");
			this.shipBot.body.gravity.y = -50;
			this.shipMid.body.gravity.y = -50;
			this.shipTop.body.gravity.y = -50;
			this.exhaust.revive();
			this.exhaust.reset ( this.shipBot.x, this.shipBot.y+48 );
			this.exhaust.animations.add( 'fire' );
			this.exhaust.animations.play('fire', 10, true);
		}

		if ( this.shipMid.isInPlace && this.shipTop.isInPlace ) {
		// if ( this.takeOff ) {
			this.isShipComplete = true;

			if ( this.shipMid.y < -100 ) {
				this.shipTop.kill();
				this.shipMid.kill();
				this.shipBot.kill();
				this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gotoGameTitle, this);
			}
		}



		//==== Handle Collision ====//

		// enemy hits player
		this.game.physics.arcade.overlap (  this.player, this.enemies, this.enemyHitPlayer, null, this  );

		// bullet hits enemy
		this.game.physics.arcade.overlap (  this.player.weapon.bullets, this.enemies, this.enemyBulletHit, null, this  );

		// enemy hits platform
		this.game.physics.arcade.collide (  this.platforms, this.enemies, this.enemyPlatformHit, null, this  );

		// player hits platform
		var hitPlatform = this.game.physics.arcade.collide( this.player, this.platforms);

		// fuel hits platform
		this.game.physics.arcade.collide ( this.fuel, this.platforms );

		// player hits top margin / HUD
		this.game.physics.arcade.collide ( this.player, this.topMargin );

		// bullet hits platform
		var bulletHit = this.game.physics.arcade.overlap ( this.player.weapon.bullets, this.platforms, this.player.bulletHitPlatform, null, this );

		if ( bulletHit ) {
			console.log ( "BULLET HIT");
		}


		if ( hitPlatform && this.player.isFlying && this.player.body.touching.down ){
			this.player.isFlying = false;
			if ( this.player.facingLeft ) {
				this.player.animations.play ('leftstop');
			} else {
				this.player.animations.play ('rightstop');
			}
		}



	} // update

}

export default Level2;

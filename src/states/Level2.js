import Player from 'objects/Player.js';
import Enemy from 'objects/Enemy';
import Fuel from 'objects/Fuel';
import ShipPart from 'objects/ShipPart';
import Treasure from 'objects/Treasure';
import Platform from 'objects/Platform';

class Main extends Phaser.State {

	create() {

		// 		Setup CONSTANTS
		this.ENEMY_SPAWN_RATE = 1000;
		this.ENEMY_SPAWN_DELAY = this.game.time.now;

		this.FUEL_SPAWN_RATE = 5000;
		this.FUEL_SPAWN_DELAY = this.game.time.now + this.FUEL_SPAWN_RATE;

		this.TREASURE_SPAWN_RATE = 10000;
		this.TREASURE_SPAWN_DELAY = this.game.time.now + this.TREASURE_SPAWN_RATE;

		this.HUD_HEIGHT = 60;

		this.GREEN = 0x0aff01;
		this.PURPLE = 0xdc00e8;
		this.RED = 0xdb0102;
		this.CYAN = 0x09ffe8;
		this.YELLOW = 0xffff00;
		this.WHITE = 0x000000;

		//Enable Arcade Physics

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Set the games background colour

		this.game.stage.backgroundColor = this.WHITE;

		//=== CREATE FLOOR and LEDGES

		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;
     	this.game.physics.enable( this.platforms, Phaser.Physics.ARCADE);

		var ledge = new Platform ( this.game, 0, this.game.height-18, 'ground', 1 );
	 	this.platforms.add( ledge );

		ledge = new Platform ( this.game, 80, 200, 'ledge6', 1.1 );
		this.platforms.add( ledge );

		ledge = new Platform ( this.game, 300, 260, 'ledge4', 1.1 );
		this.platforms.add( ledge );

		ledge = new Platform ( this.game, 470, 130, 'ledge6', 1.1 );
		this.platforms.add( ledge );

		this.HUD = this.game.add.sprite ( 0, 0, 'topMargin');
		this.HUD.enableBody = true;
     	this.game.physics.enable( this.HUD, Phaser.Physics.ARCADE);
		this.HUD.body.immovable = true;

		//==== Create ship parts ====//

		this.ship = this.game.add.group();
		this.shipBot = new ShipPart (this.game, 420, 430, 'shipBot', this);
		this.ship.add (this.shipBot);
		this.shipMid = new ShipPart (this.game, 340, 230, 'shipMid', this);
		this.ship.add (this.shipMid);
		this.shipTop = new ShipPart (this.game, 140, 170, 'shipTop', this);
		this.ship.add (this.shipTop);

		//==== Create Ship exhaust ====//

		this.exhaust = new ShipPart ( this.game, this.shipBot.x, this.shipBot.y+48,'exhaust');
		this.exhaust.kill();

		//=== Create game FLAGS

		this.nextPart = this.shipMid;
		this.isCarryingPart = false;
		this.isShipFuelled = false;
		this.isShipComplete = false;
		this.canTakeOff = false;

		//=== Create Player ===//

		this.player = new Player ( this.game, 0, 0, 'player', this );

		//==== Create FUEL  ====

		this.fuel = new Fuel ( this.game, 100, 100, 'fuel', this );
		this.fuel.kill();
		this.fuel.hitFuel = false;
		this.fuel.isCarryingFuel = false;
		this.fuel.isDropping = false;

		//==== Create TREASURE ====

		var loadedTreasure = ['diamond', 'triangle', 'blob', 'goldbar', 'nuclear'];
		this.treasures = this.game.add.group();
		for ( var i=0; i<loadedTreasure.length; i++ ){
			var treasure = new Treasure ( this.game, 0, 0, loadedTreasure[i], this );
			this.treasures.add ( treasure );
			treasure.kill();
		}

		//==== Create Enemies ===//

		this.enemies = this.game.add.group();
		this.numEnemies = 10;
		for ( var i = 0; i<this.numEnemies; i++ ){
			var enemy = new Enemy ( this.game,  0, 0, 'fuzzball', this );
			this.enemies.add ( enemy );
			enemy.kill();
		}

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

	} // create

	partPicked ( player, part ) {
		this.isCarryingPart = true;
	}

	// 			COLLISION FUNCTIONS

	hitFuel ( player, fuel ){
		// PLAYER picks up FUEL
		this.fuel.hitFuel = true;
		this.fuel.isCarryingFuel = true;
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

	addScore ( num ){

		this.game.global.score += num;
		this.scoreText.text = this.getScore ( this.game.global.score, 6 );

	}

	enemyBulletHit ( bullet, enemy ) {

		// PLAYER'S bullet hits ENEMY
		bullet.kill();
		enemy.explode();
		enemy.reset ( -100, 0 );
		enemy.kill();
		this.addScore ( enemy.POINTS );

	}

	gameOver(){

		this.game.state.start("GameOver");

	}

	enemyHitPlayer( player, enemy ) {

		// ENEMY hits PLAYER
		this.game.global.lives--;
		this.livesText.text = this.game.global.lives;

		if ( this.game.global.lives == 0 ) {

			if ( this.game.global.score > this.game.global.highscore ) this.game.global.highscore = this.game.global.score;

			player.explode();
			this.player.kill();

			this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gameOver, this);

		} else {

			// drop stuff being carried
			this.isCarryingPart	= false;
			this.fuel.isCarryingFuel = false;

			player.explode();
			player.kill();
			this.enemies.callAll('kill');
			this.game.time.events.add(Phaser.Timer.SECOND * 1, this.playerSpawn, this);
		}
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

		// timed event that respawns player
		this.player.revive();
		this.player.reset ( this.player.START_X, this.player.START_Y );

	}

	treasureSpawn( group ){

		// Timed event that respawns TREASURE

		if ( this.treasures.countLiving() < 1 ) {

			var randomTreasure = this.getRandomChild (this.treasures);

			// console.log ("Random Treasure = "+randomTreasure.key);

			if ( randomTreasure.key == 'diamond'){

			}

			randomTreasure.revive();
			randomTreasure.reset ( this.getRandomX(), this.HUD_HEIGHT);

		}
	}

	getRandomChild(group) {

		// Picks a random Object from Group

		do {var NAME = group.getRandom();} while (NAME.alive === true);

		return NAME;
	}

	getRandomX(){
		// Returns random number between 2 ranges
		// Used so FUEL, TREASURE not dropped on ship
		if ( Math.random() >= 0.5 ){
			var randX = this.game.rnd.integerInRange ( 50, 375);
		} else {
			var randX = this.game.rnd.integerInRange ( 470, this.game.width);
		}
		return randX;
	}

	gotoNextLevel () {

		this.game.state.start("Main");

	}

	takeOff () {

		// console.log ("CAN TAKE OFF");
		this.player.kill();
		this.canTakeOff = true;

	}


	update() {

		// enemy spawn
		if ( this.game.time.now > this.ENEMY_SPAWN_DELAY ){

			this.ENEMY_SPAWN_DELAY = this.game.time.now + this.ENEMY_SPAWN_RATE;
			this.enemySpawn();

		}

		// Treasure spawn
		if ( this.game.time.now > this.TREASURE_SPAWN_DELAY){

			this.TREASURE_SPAWN_DELAY = this.game.time.now + this.TREASURE_SPAWN_RATE;
			this.treasureSpawn();

		}


		//==== FUEL HANDLER ======//

		// drop FUEL when SHIP COMPLETE
		if ( this.isShipComplete && !this.fuel.alive && !this.fuel.isShipFuelled ){

			if ( this.game.time.now > this.FUEL_SPAWN_DELAY){
				// console.log ("DROP FUEL "+this.FUEL_SPAWN_RATE );
				// this.FUEL_SPAWN_DELAY = this.game.time.now+this.FUEL_SPAWN_RATE;

				this.fuel.revive();
				let newX = this.getRandomX();
				this.fuel.reset ( newX, this.HUD_HEIGHT );

			}

		}

		// if FUEL is not being carried, check for collission with PLAYER
		if ( this.fuel.alive  && !this.fuel.isCarryingFuel ) {

			this.game.physics.arcade.overlap ( this.player, this.fuel, this.hitFuel, null, this );

		}

		if (this.fuel.isCarryingFuel && !this.fuel.isDropping ) {

			this.fuel.bringToTop();
			this.fuel.x = this.player.x;
			this.fuel.y = this.player.y;
			var temp = this.fuel.x - this.shipBot.x;
			if ( ( temp > -5 ) && ( temp<5 ) ){
				// console.log ( "DROP FUEL NOW");
				this.fuel.x = this.shipBot.x;
				this.fuel.isCarryingFuel = false;
				this.fuel.isDropping = true;

				this.FUEL_SPAWN_DELAY = this.game.time.now+this.FUEL_SPAWN_RATE;

			}
		}

		if ( this.fuel.fuelLevel[0] == 1 ) {
			this.shipBot.tint = this.PURPLE;
		}
		if ( this.fuel.fuelLevel[1] == 1 ) {
			this.shipMid.tint = this.PURPLE;
		}
		if ( this.fuel.fuelLevel[2] == 1 ) {
			this.shipTop.tint = this.PURPLE;
		}

		//==== pick up parts of ShipPart

		this.game.physics.arcade.overlap ( this.player, this.nextPart, this.partPicked, null, this );

		if ( this.isCarryingPart ) {
			this.nextPart.x = this.player.x;
			this.nextPart.y = this.player.y;
			this.nextPart.bringToTop();
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

		// PLAYER gets into SHIP
		if ( this.fuel.isShipFuelled ){
			// console.log ("SHIP IS FUELLED");
			// player hits ship part
			this.game.physics.arcade.overlap (  this.player, this.shipBot, this.takeOff, null, this  );
		}

		if ( this.canTakeOff ){
			// console.log (" CAN TAKE OFF = TRUE");
			this.shipBot.body.gravity.y = -50;
			this.shipMid.body.gravity.y = -50;
			this.shipTop.body.gravity.y = -50;

			if ( !this.exhaust.alive ) {
				this.exhaust.revive();
				this.exhaust.body.gravity.y = -50;
			}

			if ( this.shipMid.y < -100 ) {
				this.shipTop.kill();
				this.shipMid.kill();
				this.shipBot.kill();
				this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gotoNextLevel, this);
			}

		}

		if ( this.shipMid.isInPlace && this.shipTop.isInPlace && !this.isShipComplete ) {
		// if ( this.takeOff ) {
			this.isShipComplete = true;
			// console.log ("START FUELLING SHIP");
			this.FUEL_SPAWN_DELAY = this.game.time.now+this.FUEL_SPAWN_RATE;


			// if ( this.shipMid.y < -100 ) {
			// 	this.shipTop.kill();
			// 	this.shipMid.kill();
			// 	this.shipBot.kill();
			// 	this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gotoNextLevel, this);
			// }
		}

		//==== Handle Collision ====//

		// ship part hits platform
		this.game.physics.arcade.collide ( this.ship, this.platforms );

		// fuel hits platform
		this.game.physics.arcade.collide ( this.fuel, this.platforms );

		// enemy hits player
		this.game.physics.arcade.overlap (  this.player, this.enemies, this.enemyHitPlayer, null, this  );

		// bullet hits enemy
		this.game.physics.arcade.overlap (  this.player.weapon.bullets, this.enemies, this.enemyBulletHit, null, this  );

		// player hits platform
		var hitPlatform = this.game.physics.arcade.collide( this.player, this.platforms);

		// player hits HUD_HEIGHT
		this.game.physics.arcade.collide( this.player, this.HUD);

		// bullet hits platform
		this.game.physics.arcade.overlap ( this.player.weapon.bullets, this.platforms, this.player.bulletHitPlatform, null, this );

		// console.log ("hitPlatfom? "+ hitPlatform);
		// console.log ("isFlying? "+ this.player.isFlying);
		// console.log ("isDown? -----------"+ this.player.body.touching.down);

		if ( hitPlatform && this.player.isFlying && this.player.body.touching.down ){
			console.log ("playing hit platform");
			this.player.isFlying = false;

			if ( this.player.facingLeft ) {
				// console.log ("stop flying");
				this.player.animations.play ('leftstop');

			} else {
			// console.log ("stop flying");
				this.player.animations.play ('rightstop');

			}
		}



	} // update

}

export default Main;

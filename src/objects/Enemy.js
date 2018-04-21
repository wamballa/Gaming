export class Enemy extends Phaser.Sprite {

	constructor(game,  x, y, sprite, state){

		super ( game,  x, y, sprite, state );

		// Setup variables
		this.STATE=state;
		this.SPRITE=sprite;
		this.game = game;

		this.HUD_HEIGHT = 60;
		this.SPEED = 100;
		this.POINTS = 10;

		this.GREEN = 0x0aff01;
		this.PURPLE = 0xdc00e8;
		this.RED = 0xdb0102;
		this.CYAN = 0x09ffe8;

		// 	Create RANDOM COLOR

		var colorArray = [ this.GREEN, this.PURPLE, this.RED, this.CYAN ];
		this.COLOR = colorArray[this.game.rnd.integerInRange ( 0, 3)];

		this.game.physics.arcade.enableBody(this);
		this.enableBody = true;
		this.smoother = false;
		this.anchor.setTo ( 0.5, 0.5 );
		this.animations.add ('animate');
		this.animations.play('animate', 10, true);
	    this.body.setSize (this.width, this.height, 0, 0);
		this.tint = this.COLOR;

		if ( sprite == 'fireball' ){
			// console.log ("SPRITE IS A FIREBALL");
			this.POINTS = 10;
			this.body.gravity.y = 5;
			this.scale.setTo ( 1.2 );
		}
		if ( sprite == "fuzzball"){
			// console.log ("SPRITE IS A FUZZBALL");
			this.POINTS = 20;
			this.body.gravity.y = 0;
		    this.body.bounce.set(1);
			this.scale.setTo ( 2 );

		}

	    this.body.setSize (this.width, this.height, 0, 0);

		this.setup( sprite );

		// === create bullets ===//

		this.explosions = this.game.add.group();
		for ( let a=0; a<10 ; a++ ){
			var explosion = this.game.add.sprite ( 0, 0, 'cloud');
			explosion.anchor.setTo ( 0.5 );
			explosion.smoother = false;
			explosion.scale.setTo ( 2.0 );
			var animation = explosion.animations.add ( 'cloud', Phaser.Animation.generateFrameNames('cloud',1,3),10,false );
			animation.killOnComplete = true;
			this.explosions.add ( explosion );
			explosion.kill();
		}

		this.game.add.existing(this);

	} // constructor

	setup ( sprite ){

		// create or revive settings for each enemy
		var faceLeft = Math.random() >= 0.5;
		var randY = this.game.rnd.integerInRange ( this.HUD_HEIGHT, this.game.height-this.HUD_HEIGHT);

		if ( faceLeft ) {
			this.body.velocity.x = -this.SPEED;
			this.x = this.game.width+30;
			this.y = randY;
			this.rotation = 3;
		} else {
			this.x = -30;
			this.y = randY;
			this.body.velocity.x = this.SPEED;
			this.rotation = 0;
		}

		if ( this.SPRITE = 'fireball') {
			// console.log ("FIREBALL X = "+this.x);
		}
	}

	addScore() {

		this.STATE.addScore ( this.POINTS );

	}

	explode(){

		let explosion = this.explosions.getFirstDead ( false );
		if ( explosion != null ){
			explosion.revive();
			explosion.reset ( this.x, this.y );
			explosion.tint = this.tint;
			explosion.animations.play('cloud');
		}
	}

	enemyPlatformHit(){

		this.explode();
		this.reset ( -100, 0);
		this.kill();

	}

	update() {

		if ( this.key == 'fireball') {

			// enemy hits platform

			this.game.physics.arcade.collide (  this.STATE.platforms, this, this.enemyPlatformHit, null, this  );

		} else {

			this.game.physics.arcade.collide (  this.STATE.platforms, this  );

		}

		if ( this.x > this.game.width+50  ) {
			this.x = -50;
			this.y = this.game.rnd.integerInRange ( this.HUD_HEIGHT, this.game.height-this.HUD_HEIGHT);
		} else if ( this.x < -50 ) {
			this.x = this.game.width+50;
			this.y = this.game.rnd.integerInRange ( this.HUD_HEIGHT, this.game.height-this.HUD_HEIGHT);
		}
	} // update

}

export default Enemy;

// crearNave: function () {
// 	this.naveY = this.game.world.height-50;
// 	// Note the second argument is the state itself
// 	this.nave = new NaveSprite(this.game, this, this.game.world.width/2, this.naveY);
// }
//
// var NaveSprite = function(game, state, _x, _y){
// 	Phaser.Sprite.call(this, game, _x, _y, 'nave',1);
// 	// Store a reference to the state that created this object here - this
// 	// is not a copy, but a direct reference - if things change on the state
// 	// they change in this property too.
// 	this.STATE = state;
// 	this.game.physics.enable(this, Phaser.Physics.ARCADE);
// 	this.enableBody = true;
// 	this.body.immovable = true;
// 	this.game.add.existing(this);
// 	this.naveY = _y;
// }
// NaveSprite.prototype = Object.create(Phaser.Sprite.prototype);
// NaveSprite.prototype.constructor = NaveSprite;
// NaveSprite.prototype.update = function() {
// 	 this.naveY = this.STATE.ballLimit;
//  }

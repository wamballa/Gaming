(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBoot = require('states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesGameTitle = require('states/GameTitle');

var _statesGameTitle2 = _interopRequireDefault(_statesGameTitle);

var _statesMain = require('states/Main');

var _statesMain2 = _interopRequireDefault(_statesMain);

var _statesLevel2 = require('states/Level2');

var _statesLevel22 = _interopRequireDefault(_statesLevel2);

var _statesGameOver = require('states/GameOver');

var _statesGameOver2 = _interopRequireDefault(_statesGameOver);

var Game = (function (_Phaser$Game) {
		_inherits(Game, _Phaser$Game);

		function Game() {
				_classCallCheck(this, Game);

				_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this);

				this.global = {

						highscore: 0,
						lives: 3,
						score: 0

				};

				_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 640 * window.devicePixelRatio, 480 * window.devicePixelRatio, Phaser.AUTO);

				this.state.add('Boot', _statesBoot2['default'], false);
				this.state.add('Preload', _statesPreload2['default'], false);
				this.state.add('GameTitle', _statesGameTitle2['default'], false);
				this.state.add('Main', _statesMain2['default'], false);
				this.state.add('Level2', _statesLevel22['default'], false);
				this.state.add('GameOver', _statesGameOver2['default'], false);

				this.state.start('Boot');
		}

		return Game;
})(Phaser.Game);

new Game();

},{"states/Boot":8,"states/GameOver":9,"states/GameTitle":10,"states/Level2":11,"states/Main":12,"states/Preload":13}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = (function (_Phaser$Sprite) {
	_inherits(Enemy, _Phaser$Sprite);

	function Enemy(game, x, y, sprite, state) {
		_classCallCheck(this, Enemy);

		_get(Object.getPrototypeOf(Enemy.prototype), 'constructor', this).call(this, game, x, y, sprite, state);

		// Setup variables
		this.STATE = state;
		this.SPRITE = sprite;
		this.game = game;

		this.HUD_HEIGHT = 60;
		this.SPEED = 100;
		this.POINTS = 10;

		this.GREEN = 0x0aff01;
		this.PURPLE = 0xdc00e8;
		this.RED = 0xdb0102;
		this.CYAN = 0x09ffe8;

		// 	Create RANDOM COLOR

		var colorArray = [this.GREEN, this.PURPLE, this.RED, this.CYAN];
		this.COLOR = colorArray[this.game.rnd.integerInRange(0, 3)];

		this.game.physics.arcade.enableBody(this);
		this.enableBody = true;
		this.smoother = false;
		this.anchor.setTo(0.5, 0.5);
		this.animations.add('animate');
		this.animations.play('animate', 10, true);
		this.body.setSize(this.width, this.height, 0, 0);
		this.tint = this.COLOR;

		if (sprite == 'fireball') {
			// console.log ("SPRITE IS A FIREBALL");
			this.POINTS = 10;
			this.body.gravity.y = 5;
			this.scale.setTo(1.2);
		}
		if (sprite == "fuzzball") {
			// console.log ("SPRITE IS A FUZZBALL");
			this.POINTS = 20;
			this.body.gravity.y = 0;
			this.body.bounce.set(1);
			this.scale.setTo(2);
		}

		this.body.setSize(this.width, this.height, 0, 0);

		this.setup(sprite);

		// === create bullets ===//

		this.explosions = this.game.add.group();
		for (var a = 0; a < 10; a++) {
			var explosion = this.game.add.sprite(0, 0, 'cloud');
			explosion.anchor.setTo(0.5);
			explosion.smoother = false;
			explosion.scale.setTo(2.0);
			var animation = explosion.animations.add('cloud', Phaser.Animation.generateFrameNames('cloud', 1, 3), 10, false);
			animation.killOnComplete = true;
			this.explosions.add(explosion);
			explosion.kill();
		}

		this.game.add.existing(this);
	}

	// constructor

	_createClass(Enemy, [{
		key: 'setup',
		value: function setup(sprite) {

			// create or revive settings for each enemy
			var faceLeft = Math.random() >= 0.5;
			var randY = this.game.rnd.integerInRange(this.HUD_HEIGHT, this.game.height - this.HUD_HEIGHT);

			if (faceLeft) {
				this.body.velocity.x = -this.SPEED;
				this.x = this.game.width + 30;
				this.y = randY;
				this.rotation = 3;
			} else {
				this.x = -30;
				this.y = randY;
				this.body.velocity.x = this.SPEED;
				this.rotation = 0;
			}

			if (this.SPRITE = 'fireball') {
				// console.log ("FIREBALL X = "+this.x);
			}
		}
	}, {
		key: 'addScore',
		value: function addScore() {

			this.STATE.addScore(this.POINTS);
		}
	}, {
		key: 'explode',
		value: function explode() {

			var explosion = this.explosions.getFirstDead(false);
			if (explosion != null) {
				explosion.revive();
				explosion.reset(this.x, this.y);
				explosion.tint = this.tint;
				explosion.animations.play('cloud');
			}
		}
	}, {
		key: 'enemyPlatformHit',
		value: function enemyPlatformHit() {

			this.explode();
			this.reset(-100, 0);
			this.kill();
		}
	}, {
		key: 'update',
		value: function update() {

			if (this.key == 'fireball') {

				// enemy hits platform

				this.game.physics.arcade.collide(this.STATE.platforms, this, this.enemyPlatformHit, null, this);
			} else {

				this.game.physics.arcade.collide(this.STATE.platforms, this);
			}

			if (this.x > this.game.width + 50) {
				this.x = -50;
				this.y = this.game.rnd.integerInRange(this.HUD_HEIGHT, this.game.height - this.HUD_HEIGHT);
			} else if (this.x < -50) {
				this.x = this.game.width + 50;
				this.y = this.game.rnd.integerInRange(this.HUD_HEIGHT, this.game.height - this.HUD_HEIGHT);
			}
		}
		// update

	}]);

	return Enemy;
})(Phaser.Sprite);

exports.Enemy = Enemy;
exports['default'] = Enemy;

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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fuel = (function (_Phaser$Sprite) {
		_inherits(Fuel, _Phaser$Sprite);

		function Fuel(game, x, y, sprite, state) {
				_classCallCheck(this, Fuel);

				_get(Object.getPrototypeOf(Fuel.prototype), "constructor", this).call(this, game, x, y, sprite, state);

				this.HUD_HEIGHT = 60;
				// this.STATE = state;

				game.physics.arcade.enableBody(this);
				this.enableBody = true;
				this.smoother = false;
				this.body.bounce.y = 0.2;
				this.body.gravity.y = 250;
				this.anchor.setTo(0.5, 0);
				this.body.setSize(this.width, this.height, 0, 0);
				this.STATE = state;

				this.isCarryingFuel = false;
				this.isDropping = false;
				this.fuelLevel = [0, 0, 0];
				this.isShipFuelled = false;

				game.add.existing(this);
		}

		_createClass(Fuel, [{
				key: "update",
				value: function update() {

						// fuel hits platform
						// this.game.physics.arcade.collide ( this, this.STATE.platforms );

						if (this.isCarryingFuel && !this.isDropping) {

								this.body.gravity.y = 0;
						} else {

								this.body.gravity.y = 300;
						}

						// calculate if dropped FUEL is near to SHIP to fuel it
						var delta = this.STATE.fuel.x - this.STATE.shipBot.x;
						var isNearToShip = delta > -5 && delta < 5;

						if (this.y > 400 && isNearToShip && this.alive) {

								this.kill();
								this.isDropping = false;
								this.isCarryingFuel = false;

								if (this.fuelLevel[0] == 0) {

										this.fuelLevel[0] = 1;
								} else if (this.fuelLevel[1] == 0) {

										this.fuelLevel[1] = 1;
								} else if (this.fuelLevel[2] == 0) {

										this.fuelLevel[2] = 1;
										this.isShipFuelled = true;
								}
						}
				}
				// update

		}]);

		return Fuel;
})(Phaser.Sprite);

exports.Fuel = Fuel;
exports["default"] = Fuel;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Platform = (function (_Phaser$Sprite) {
	_inherits(Platform, _Phaser$Sprite);

	function Platform(game, x, y, sprite, scale) {
		_classCallCheck(this, Platform);

		// console.log ("PLATFORMS CONSTRUCTOR");

		_get(Object.getPrototypeOf(Platform.prototype), "constructor", this).call(this, game, x, y, sprite, scale);

		this.HUD_HEIGHT = 60;
		this.SCALE = scale;
		this.SPRITE = sprite;
		this.GAME = game;

		game.physics.arcade.enableBody(this);
		this.enableBody = true;
		this.smoother = false;
		this.body.setSize(this.width, this.height, 0, 0);
		this.body.immovable = true;

		this.GAME.add.existing(this);
	}

	_createClass(Platform, [{
		key: "hitPlayer",
		value: function hitPlayer() {

			this.reset(0, 0);
			this.kill();
			this.STATE.addScore(100);
		}
	}, {
		key: "update",
		value: function update() {}
		// update

	}]);

	return Platform;
})(Phaser.Sprite);

exports.Platform = Platform;
exports["default"] = Platform;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = (function (_Phaser$Sprite) {
	_inherits(Player, _Phaser$Sprite);

	function Player(game, x, y, sprite) {
		_classCallCheck(this, Player);

		_get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, game, x, y, sprite);

		this.START_X = game.width / 2;
		this.START_Y = game.height - 48;
		this.GRAVITY = 200;
		this.SPEED = 150;
		this.x = this.START_X;
		this.y = this.START_Y;
		// this.STATE = state;

		game.physics.arcade.enableBody(this);
		this.anchor.setTo(0.5, 0.5);
		this.body.setSize(this.width, this.height, 0, 0);
		this.body.bounce.y = 0;
		this.body.gravity.y = this.GRAVITY;
		this.body.collideWorldBounds = false;

		// === create bullets ===//

		//  Creates 30 bullets, using the 'bullet' graphic
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

		// sprite = this.add.sprite(320, 500, 'bullet');

		// this.game.physics.arcade.enable(sprite);

		//  Tell the Weapon to track the 'player' Sprite, offset by 14px horizontally, 0 vertically
		this.weapon.trackSprite(this, 14, 0);

		// === create clouds ===//

		this.clouds = this.game.add.group();
		for (var a = 0; a < 10; a++) {
			var cloud = this.game.add.sprite(0, 0, 'cloud');
			cloud.anchor.setTo(0.5);
			cloud.smoother = false;
			cloud.scale.setTo(2.0);
			var animation = cloud.animations.add('cloud', Phaser.Animation.generateFrameNames('cloud', 1, 3), 10, false);
			animation.killOnComplete = true;
			this.clouds.add(cloud);
			cloud.kill();
		}

		this.animations.add('right', Phaser.Animation.generateFrameNames("right", 1, 4), 20, true);
		this.animations.add('rightstop', ['right1'], 1, false);
		this.animations.add('left', ['left1', 'left2', 'left3', 'left4'], 20, true);
		this.animations.add('leftstop', ['left1'], 1, false);
		this.animations.add('flyleft', ['flyleft1', 'flyleft2', 'flyleft3', 'flyleft4'], 20, true);
		this.animations.add('flyright', ['flyright1', 'flyright2', 'flyright3', 'flyright4'], 20, true);
		// this.reset ( 100, 100);

		this.animations.play('rightstop');

		this.cursors = this.game.input.keyboard.createCursorKeys();

		this.facingLeft = false;
		this.isFlying = false;

		this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

		game.add.existing(this);
	}

	_createClass(Player, [{
		key: 'explode',
		value: function explode() {
			var cloud = this.clouds.getFirstDead(false);
			if (cloud != null) {
				this.isFlying = false;
				this.animations.play('right');
				cloud.revive();
				cloud.reset(this.x, this.y);
				cloud.animations.play('cloud');
			}
		}
	}, {
		key: 'bulletHitPlatform',
		value: function bulletHitPlatform(bullet, platform) {

			bullet.kill();
		}
	}, {
		key: 'update',
		value: function update() {

			if (this.alive) {

				// Fire bullets in the direction player facing
				if (this.facingLeft) {

					this.weapon.fireAngle = 180;
					this.weapon.trackSprite(this, -14, 0);
				} else {

					this.weapon.fireAngle = 0;
					this.weapon.trackSprite(this, 14, 0);
				}

				// player hits left or right wall and loops
				if (this.x > this.game.width) {

					this.x = 0;
				} else if (this.x < 0) {

					this.x = this.game.width;
				}

				// Falls off ledge and flies  ( not walks )
				if (!this.body.touching.down) {

					if (this.facingLeft) {
						this.isFlying = true;
						this.animations.play('flyleft');
					} else {
						this.isFlying = true;
						this.animations.play('flyright');
					}
				}

				// control player

				// FIRE BUTTON
				if (this.fireButton.isDown) {
					this.weapon.fire();
				}

				// RIGT BUTTON
				if (this.cursors.right.isDown) {

					this.facingLeft = false;
					this.body.velocity.x = this.SPEED;

					if (this.isFlying) {
						// console.log ("FLYING");
						this.animations.play('flyright');
					} else {
						// console.log ("NOT FLYING");
						this.animations.play('right');
					}
				}

				// LEFT BUTTON
				else if (this.cursors.left.isDown) {
						this.facingLeft = true;
						this.body.velocity.x = -this.SPEED;
						if (this.isFlying) {
							this.animations.play('flyleft');
						} else {
							this.animations.play('left');
						}

						//
					} else {
							// console.log ( "ANIMATION STOP");
							if (!this.isFlying) {
								// console.log ("OBJECT= "+this.player);
								this.animations.stop();
								this.body.velocity.x = 0;
							}
							//this.player.frame = 4;
						}
				//  Allow the player to jump if they are touching the ground.
				// if ( this.cursors.up.isDown && this.player.body.touching.down && hitPlatform)
				if (this.cursors.up.isDown) {
					if (!this.isFlying) {
						// console.log ( "MAKE CLOUD");
						var cloud = this.clouds.getFirstDead(false);
						if (cloud != null) {
							cloud.revive();
							cloud.reset(this.x, this.y + 20);
							cloud.animations.play('cloud');
						}
					}
					this.body.velocity.y = -this.SPEED;
					this.isFlying = true;
					if (this.facingLeft) {
						// console.log ("FLY LEFT");
						this.animations.play('flyleft');
					} else {
						// console.log ("FLY RIGHT");
						this.animations.play('flyright');
					}
				}
			}
		}
		// update

	}]);

	return Player;
})(Phaser.Sprite);

exports.Player = Player;
exports['default'] = Player;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShipPart = (function (_Phaser$Sprite) {
		_inherits(ShipPart, _Phaser$Sprite);

		function ShipPart(game, x, y, sprite, state) {
				_classCallCheck(this, ShipPart);

				// console.log ("SHIP CONSTRUCTOR "+sprite);

				_get(Object.getPrototypeOf(ShipPart.prototype), 'constructor', this).call(this, game, x, y, sprite, state);

				this.SPRITE = sprite;
				this.STATE = state;

				game.physics.arcade.enableBody(this);
				this.enableBody = false;
				this.smoother = false;
				this.anchor.setTo(0.5, 0);
				this.body.gravity.y = 100;
				this.body.velocity.y = 0;
				game.add.existing(this);

				this.isInPlace = false;

				if (this.SPRITE == 'exhaust') {
						this.anchor.setTo(0.5);
						this.animations.add('exhaust');
						this.animations.play('exhaust', 10, true);
				}
		}

		_createClass(ShipPart, [{
				key: 'update',
				value: function update() {

						if (this.SPRITE == 'shipBot') this.isInPlace = true;

						if (this.SPRITE == 'shipMid' && !this.isInPlace) {

								var delta = this.STATE.shipMid.x - this.STATE.shipBot.x;
								var isNearToShip = delta > -5 && delta < 5;

								if (this.y > this.game.height - 85 && this.STATE.player.alive && isNearToShip) {
										// console.log (" PART FALLING "+this.y);
										this.body.gravity.y = 0;
										this.body.velocity.y = 0;
										this.y = this.game.height - 85;
										this.isInPlace = true;
								}
						}

						if (this.SPRITE == 'shipTop' && !this.isInPlace) {

								var delta = this.STATE.shipTop.x - this.STATE.shipBot.x;
								var isNearToShip = delta > -5 && delta < 5;

								if (this.y > this.game.height - 115 && this.STATE.player.alive && isNearToShip) {

										this.body.gravity.y = 0;
										this.body.velocity.y = 0;
										this.y = this.game.height - 115;
										this.isInPlace = true;
								}
						}
				}
				// update

		}]);

		return ShipPart;
})(Phaser.Sprite);

exports.ShipPart = ShipPart;
exports['default'] = ShipPart;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Treasure = (function (_Phaser$Sprite) {
		_inherits(Treasure, _Phaser$Sprite);

		function Treasure(game, x, y, sprite, state) {
				_classCallCheck(this, Treasure);

				// console.log ("TREASURE CONSTRUCTOR");

				_get(Object.getPrototypeOf(Treasure.prototype), 'constructor', this).call(this, game, x, y, sprite, state);

				this.HUD_HEIGHT = 60;
				this.STATE = state;
				this.SPRITE = sprite;

				game.physics.arcade.enableBody(this);
				this.enableBody = true;
				this.smoother = false;
				this.body.bounce.y = 0.2;
				this.body.gravity.y = 250;
				this.anchor.setTo(0.5, 0);
				this.body.setSize(this.width, this.height, 0, 0);

				if (this.SPRITE == 'diamond') {

						// console.log ("IT A DIAMOND");
						this.animations.add('animate');
						this.animations.play('animate', 10, true);
				}

				game.add.existing(this);
		}

		_createClass(Treasure, [{
				key: 'hitPlayer',
				value: function hitPlayer() {

						this.reset(0, 0);
						this.kill();
						this.STATE.addScore(100);
				}
		}, {
				key: 'update',
				value: function update() {

						// 			Hits platform
						this.game.physics.arcade.collide(this, this.STATE.platforms);

						//			Hit player
						this.game.physics.arcade.overlap(this, this.STATE.player, this.hitPlayer, null, this);
				}
				// update

		}]);

		return Treasure;
})(Phaser.Sprite);

exports.Treasure = Treasure;
exports['default'] = Treasure;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = (function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		_get(Object.getPrototypeOf(Boot.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Boot, [{
		key: "preload",
		value: function preload() {

			var score = 300;
		}
	}, {
		key: "create",
		value: function create() {
			console.log("BOOT CREATE() ");
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.state.start("Preload");
		}
	}]);

	return Boot;
})(Phaser.State);

exports["default"] = Boot;
module.exports = exports["default"];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOver = (function (_Phaser$State) {
		_inherits(GameOver, _Phaser$State);

		function GameOver() {
				_classCallCheck(this, GameOver);

				_get(Object.getPrototypeOf(GameOver.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(GameOver, [{
				key: 'create',
				value: function create() {

						console.log("GAME OVER");

						// this.gameOverText =
						this.add.bitmapText(210, 200, 'fat-and-tiny', 'GAME OVER PLAYER 1', 32);
						// this.gameOverText.smoothed = false;
						// this.gameOverText.tint = 0x000000;

						this.input.onDown.addOnce(this.restartGame, this);
				}
		}, {
				key: 'restartGame',
				value: function restartGame() {

						this.game.global.lives = 3;
						this.game.global.score = 0;

						this.game.state.start("GameTitle");
				}
		}]);

		return GameOver;
})(Phaser.State);

exports['default'] = GameOver;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameTitle = (function (_Phaser$State) {
		_inherits(GameTitle, _Phaser$State);

		function GameTitle() {
				_classCallCheck(this, GameTitle);

				_get(Object.getPrototypeOf(GameTitle.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(GameTitle, [{
				key: "preload",
				value: function preload() {
						console.log("GAMTITLE PRELOAD");

						this.GREEN = 0x0aff01;
						this.PURPLE = 0xdc00e8;
						this.RED = 0xdb0102;
						this.CYAN = 0x09ffe8;
						this.YELLOW = 0xffff00;
						this.WHITE = 0x000000;
				}
		}, {
				key: "create",
				value: function create() {
						console.log("GAMETITLE CREATE()");

						//===== PLAYER 1 SCORE TEXT =====//

						this.scoreTitle1 = this.add.bitmapText(85, 0, 'fat-and-tiny', '1UP', 32);
						this.scoreTitle1.smoothed = false;
						this.scoreTitle1.tint = 0xffffff;

						this.scoreText = this.add.bitmapText(64, 20, 'fat-and-tiny', this.getScore(this.game.global.score, 6), 32);
						this.scoreText.smoothed = false;
						this.scoreText.tint = 0xffff00;

						//===== LIVES TEXT =====//

						this.livesText = this.game.add.bitmapText(190, 0, 'fat-and-tiny', this.game.global.lives, 32);
						this.livesText.smoothed = false;
						this.livesText.tint = 0xffffff;

						//===== LIVES IMAGE =====//

						this.livesIcon = this.game.add.sprite(215, 20, 'livesIcon');
						this.livesIcon.anchor.setTo(0.5);

						//===== PLAYER 2 SCORE TEXT =====//

						this.scoreTitle2 = this.add.bitmapText(this.game.width - 150, 0, 'fat-and-tiny', '2UP', 32);
						this.scoreTitle1.smoothed = false;
						this.scoreTitle1.tint = 0xffffff;

						this.scoreText2 = this.add.bitmapText(this.game.width - 175, 20, 'fat-and-tiny', '000000', 32);
						this.scoreText2.smoothed = false;
						this.scoreText2.tint = 0xffff00;

						//===== HIGH SCORE TEXT =====//

						this.highScoreTitle = this.add.bitmapText(this.game.width / 2, 0, 'fat-and-tiny', 'HI', 32);
						this.highScoreTitle.smoothed = false;
						this.highScoreTitle.tint = this.CYAN;

						var highscore = this.getScore(this.game.global.highscore, 6);

						this.highScoreText = this.add.bitmapText(this.game.width / 2 - 30, 20, 'fat-and-tiny', highscore, 32);
						this.highScoreText.smoothed = false;
						this.highScoreText.tint = this.YELLOW;

						this.add.bitmapText(150, 100, 'fat-and-tiny', 'JETPAC GAME SELECTION ', 32);

						this.add.bitmapText(150, 150, 'fat-and-tiny', '1			1 PLAYER GAME ', 32);
						this.add.bitmapText(150, 180, 'fat-and-tiny', '2			2 PLAYER GAME ', 32);
						this.add.bitmapText(150, 210, 'fat-and-tiny', '3			KEYBOARD ', 32);
						this.add.bitmapText(150, 240, 'fat-and-tiny', '4			KEMPSTON JOYSTICK ', 32);
						this.add.bitmapText(150, 300, 'fat-and-tiny', '5			CLICK TO START ', 32);

						// this.copyrightText =
						this.add.bitmapText(80, this.game.height - 30, 'fat-and-tiny', '(c) 1983 WAMBALLA NO RIGHTS RESERVED', 32);

						this.input.onDown.addOnce(this.startGame, this);
				}
		}, {
				key: "getScore",
				value: function getScore(n, p, c) {
						// Ensure there are preceding 0s
						// n = number / score
						// p = padding in 0s
						// c = character instead of a 0
						var pad_char = typeof c !== 'undefined' ? c : '0';
						var pad = new Array(1 + p).join(pad_char);
						return (pad + n).slice(-pad.length);
				}
		}, {
				key: "startGame",
				value: function startGame() {
						this.game.state.start("Main");
				}
		}]);

		return GameTitle;
})(Phaser.State);

exports["default"] = GameTitle;
module.exports = exports["default"];

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsPlayerJs = require('objects/Player.js');

var _objectsPlayerJs2 = _interopRequireDefault(_objectsPlayerJs);

var _objectsEnemy = require('objects/Enemy');

var _objectsEnemy2 = _interopRequireDefault(_objectsEnemy);

var _objectsFuel = require('objects/Fuel');

var _objectsFuel2 = _interopRequireDefault(_objectsFuel);

var _objectsShipPart = require('objects/ShipPart');

var _objectsShipPart2 = _interopRequireDefault(_objectsShipPart);

var _objectsTreasure = require('objects/Treasure');

var _objectsTreasure2 = _interopRequireDefault(_objectsTreasure);

var _objectsPlatform = require('objects/Platform');

var _objectsPlatform2 = _interopRequireDefault(_objectsPlatform);

var Main = (function (_Phaser$State) {
		_inherits(Main, _Phaser$State);

		function Main() {
				_classCallCheck(this, Main);

				_get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Main, [{
				key: 'create',
				value: function create() {

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
						this.game.physics.enable(this.platforms, Phaser.Physics.ARCADE);

						var ledge = new _objectsPlatform2['default'](this.game, 0, this.game.height - 18, 'ground', 1);
						this.platforms.add(ledge);

						ledge = new _objectsPlatform2['default'](this.game, 80, 200, 'ledge6', 1.1);
						this.platforms.add(ledge);

						ledge = new _objectsPlatform2['default'](this.game, 300, 260, 'ledge4', 1.1);
						this.platforms.add(ledge);

						ledge = new _objectsPlatform2['default'](this.game, 470, 130, 'ledge6', 1.1);
						this.platforms.add(ledge);

						this.HUD = this.game.add.sprite(0, 0, 'topMargin');
						this.HUD.enableBody = true;
						this.game.physics.enable(this.HUD, Phaser.Physics.ARCADE);
						this.HUD.body.immovable = true;

						//==== Create ship parts ====//

						this.ship = this.game.add.group();
						this.shipBot = new _objectsShipPart2['default'](this.game, 420, 430, 'shipBot', this);
						this.ship.add(this.shipBot);
						this.shipMid = new _objectsShipPart2['default'](this.game, 340, 230, 'shipMid', this);
						this.ship.add(this.shipMid);
						this.shipTop = new _objectsShipPart2['default'](this.game, 140, 170, 'shipTop', this);
						this.ship.add(this.shipTop);

						//==== Create Ship exhaust ====//

						this.exhaust = new _objectsShipPart2['default'](this.game, this.shipBot.x, this.shipBot.y + 48, 'exhaust');
						this.exhaust.kill();

						//=== Create game FLAGS

						this.nextPart = this.shipMid;
						this.isCarryingPart = false;
						this.isShipFuelled = false;
						this.isShipComplete = false;
						this.canTakeOff = false;

						//=== Create Player ===//

						this.player = new _objectsPlayerJs2['default'](this.game, 0, 0, 'player', this);

						//==== Create FUEL  ====

						this.fuel = new _objectsFuel2['default'](this.game, 100, 100, 'fuel', this);
						this.fuel.kill();
						this.fuel.hitFuel = false;
						this.fuel.isCarryingFuel = false;
						this.fuel.isDropping = false;

						//==== Create TREASURE ====

						var loadedTreasure = ['diamond', 'triangle', 'blob', 'goldbar', 'nuclear'];
						this.treasures = this.game.add.group();
						for (var i = 0; i < loadedTreasure.length; i++) {
								var treasure = new _objectsTreasure2['default'](this.game, 0, 0, loadedTreasure[i], this);
								this.treasures.add(treasure);
								treasure.kill();
						}

						//==== Create Enemies ===//

						this.enemies = this.game.add.group();
						this.numEnemies = 10;
						for (var i = 0; i < this.numEnemies; i++) {
								var enemy = new _objectsEnemy2['default'](this.game, 0, 0, 'fuzzball', this);
								this.enemies.add(enemy);
								enemy.kill();
						}

						//===== PLAYER 1 SCORE TEXT =====//

						this.scoreTitle1 = this.add.bitmapText(85, 0, 'fat-and-tiny', '1UP', 32);
						this.scoreTitle1.smoothed = false;
						this.scoreTitle1.tint = 0xffffff;

						this.scoreText = this.add.bitmapText(64, 20, 'fat-and-tiny', this.getScore(this.game.global.score, 6), 32);
						this.scoreText.smoothed = false;
						this.scoreText.tint = 0xffff00;

						//===== LIVES TEXT =====//

						this.livesText = this.game.add.bitmapText(190, 0, 'fat-and-tiny', this.game.global.lives, 32);
						this.livesText.smoothed = false;
						this.livesText.tint = 0xffffff;

						//===== LIVES IMAGE =====//

						this.livesIcon = this.game.add.sprite(215, 20, 'livesIcon');
						this.livesIcon.anchor.setTo(0.5);

						//===== PLAYER 2 SCORE TEXT =====//

						this.scoreTitle2 = this.add.bitmapText(this.game.width - 150, 0, 'fat-and-tiny', '2UP', 32);
						this.scoreTitle1.smoothed = false;
						this.scoreTitle1.tint = 0xffffff;

						this.scoreText2 = this.add.bitmapText(this.game.width - 175, 20, 'fat-and-tiny', '000000', 32);
						this.scoreText2.smoothed = false;
						this.scoreText2.tint = 0xffff00;

						//===== HIGH SCORE TEXT =====//

						this.highScoreTitle = this.add.bitmapText(this.game.width / 2, 0, 'fat-and-tiny', 'HI', 32);
						this.highScoreTitle.smoothed = false;
						this.highScoreTitle.tint = this.CYAN;

						var highscore = this.getScore(this.game.global.highscore, 6);

						this.highScoreText = this.add.bitmapText(this.game.width / 2 - 30, 20, 'fat-and-tiny', highscore, 32);
						this.highScoreText.smoothed = false;
						this.highScoreText.tint = this.YELLOW;
				}
				// create

		}, {
				key: 'partPicked',
				value: function partPicked(player, part) {
						this.isCarryingPart = true;
				}

				// 			COLLISION FUNCTIONS

		}, {
				key: 'hitFuel',
				value: function hitFuel(player, fuel) {
						// PLAYER picks up FUEL
						this.fuel.hitFuel = true;
						this.fuel.isCarryingFuel = true;
				}
		}, {
				key: 'getScore',
				value: function getScore(n, p, c) {
						// Ensure there are preceding 0s
						// n = number / score
						// p = padding in 0s
						// c = character instead of a 0
						var pad_char = typeof c !== 'undefined' ? c : '0';
						var pad = new Array(1 + p).join(pad_char);
						return (pad + n).slice(-pad.length);
				}
		}, {
				key: 'addScore',
				value: function addScore(num) {

						this.game.global.score += num;
						this.scoreText.text = this.getScore(this.game.global.score, 6);
				}
		}, {
				key: 'enemyBulletHit',
				value: function enemyBulletHit(bullet, enemy) {

						// PLAYER'S bullet hits ENEMY
						bullet.kill();
						enemy.explode();
						enemy.reset(-100, 0);
						enemy.kill();
						this.addScore(enemy.POINTS);
				}
		}, {
				key: 'gameOver',
				value: function gameOver() {

						this.game.state.start("GameOver");
				}
		}, {
				key: 'enemyHitPlayer',
				value: function enemyHitPlayer(player, enemy) {

						// ENEMY hits PLAYER
						this.game.global.lives--;
						this.livesText.text = this.game.global.lives;

						if (this.game.global.lives == 0) {

								if (this.game.global.score > this.game.global.highscore) this.game.global.highscore = this.game.global.score;

								player.explode();
								this.player.kill();

								this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gameOver, this);
						} else {

								// drop stuff being carried
								this.isCarryingPart = false;
								this.fuel.isCarryingFuel = false;

								player.explode();
								player.kill();
								this.enemies.callAll('kill');
								this.game.time.events.add(Phaser.Timer.SECOND * 1, this.playerSpawn, this);
						}
				}
		}, {
				key: 'enemySpawn',
				value: function enemySpawn() {
						// timed event that respawns dead aliens
						var enemy = this.enemies.getFirstDead(false);
						if (enemy == null) return;
						// console.log ( "ENEMY SETUP ");
						enemy.revive();
						enemy.setup();
				}
		}, {
				key: 'playerSpawn',
				value: function playerSpawn() {

						// timed event that respawns player
						this.player.revive();
						this.player.reset(this.player.START_X, this.player.START_Y);
				}
		}, {
				key: 'treasureSpawn',
				value: function treasureSpawn(group) {

						// Timed event that respawns TREASURE

						if (this.treasures.countLiving() < 1) {

								var randomTreasure = this.getRandomChild(this.treasures);

								// console.log ("Random Treasure = "+randomTreasure.key);

								if (randomTreasure.key == 'diamond') {}

								randomTreasure.revive();
								randomTreasure.reset(this.getRandomX(), this.HUD_HEIGHT);
						}
				}
		}, {
				key: 'getRandomChild',
				value: function getRandomChild(group) {

						// Picks a random Object from Group

						do {
								var NAME = group.getRandom();
						} while (NAME.alive === true);

						return NAME;
				}
		}, {
				key: 'getRandomX',
				value: function getRandomX() {
						// Returns random number between 2 ranges
						// Used so FUEL, TREASURE not dropped on ship
						if (Math.random() >= 0.5) {
								var randX = this.game.rnd.integerInRange(50, 375);
						} else {
								var randX = this.game.rnd.integerInRange(470, this.game.width);
						}
						return randX;
				}
		}, {
				key: 'gotoNextLevel',
				value: function gotoNextLevel() {

						this.game.state.start("Main");
				}
		}, {
				key: 'takeOff',
				value: function takeOff() {

						// console.log ("CAN TAKE OFF");
						this.player.kill();
						this.canTakeOff = true;
				}
		}, {
				key: 'update',
				value: function update() {

						// enemy spawn
						if (this.game.time.now > this.ENEMY_SPAWN_DELAY) {

								this.ENEMY_SPAWN_DELAY = this.game.time.now + this.ENEMY_SPAWN_RATE;
								this.enemySpawn();
						}

						// Treasure spawn
						if (this.game.time.now > this.TREASURE_SPAWN_DELAY) {

								this.TREASURE_SPAWN_DELAY = this.game.time.now + this.TREASURE_SPAWN_RATE;
								this.treasureSpawn();
						}

						//==== FUEL HANDLER ======//

						// drop FUEL when SHIP COMPLETE
						if (this.isShipComplete && !this.fuel.alive && !this.fuel.isShipFuelled) {

								if (this.game.time.now > this.FUEL_SPAWN_DELAY) {
										// console.log ("DROP FUEL "+this.FUEL_SPAWN_RATE );
										// this.FUEL_SPAWN_DELAY = this.game.time.now+this.FUEL_SPAWN_RATE;

										this.fuel.revive();
										var newX = this.getRandomX();
										this.fuel.reset(newX, this.HUD_HEIGHT);
								}
						}

						// if FUEL is not being carried, check for collission with PLAYER
						if (this.fuel.alive && !this.fuel.isCarryingFuel) {

								this.game.physics.arcade.overlap(this.player, this.fuel, this.hitFuel, null, this);
						}

						if (this.fuel.isCarryingFuel && !this.fuel.isDropping) {

								this.fuel.bringToTop();
								this.fuel.x = this.player.x;
								this.fuel.y = this.player.y;
								var temp = this.fuel.x - this.shipBot.x;
								if (temp > -5 && temp < 5) {
										// console.log ( "DROP FUEL NOW");
										this.fuel.x = this.shipBot.x;
										this.fuel.isCarryingFuel = false;
										this.fuel.isDropping = true;

										this.FUEL_SPAWN_DELAY = this.game.time.now + this.FUEL_SPAWN_RATE;
								}
						}

						if (this.fuel.fuelLevel[0] == 1) {
								this.shipBot.tint = this.PURPLE;
						}
						if (this.fuel.fuelLevel[1] == 1) {
								this.shipMid.tint = this.PURPLE;
						}
						if (this.fuel.fuelLevel[2] == 1) {
								this.shipTop.tint = this.PURPLE;
						}

						//==== pick up parts of ShipPart

						this.game.physics.arcade.overlap(this.player, this.nextPart, this.partPicked, null, this);

						if (this.isCarryingPart) {
								this.nextPart.x = this.player.x;
								this.nextPart.y = this.player.y;
								this.nextPart.bringToTop();
								// console.log (this.nextPart.x+" "+this.ship1.x);
								var temp = this.nextPart.x - this.shipBot.x;
								if (temp > -20 && temp < 20) {

										this.nextPart.x = this.shipBot.x;
										this.nextPart.body.gravity.y = 100;
										this.isCarryingPart = false;
										if (this.nextPart == this.shipMid) {
												this.nextPart = this.shipTop;
										} else {
												this.nextPart = null;
										}
								}
						}
						//=============================//

						// PLAYER gets into SHIP
						if (this.fuel.isShipFuelled) {
								// console.log ("SHIP IS FUELLED");
								// player hits ship part
								this.game.physics.arcade.overlap(this.player, this.shipBot, this.takeOff, null, this);
						}

						if (this.canTakeOff) {
								// console.log (" CAN TAKE OFF = TRUE");
								this.shipBot.body.gravity.y = -50;
								this.shipMid.body.gravity.y = -50;
								this.shipTop.body.gravity.y = -50;

								if (!this.exhaust.alive) {
										this.exhaust.revive();
										this.exhaust.body.gravity.y = -50;
								}

								if (this.shipMid.y < -100) {
										this.shipTop.kill();
										this.shipMid.kill();
										this.shipBot.kill();
										this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gotoNextLevel, this);
								}
						}

						if (this.shipMid.isInPlace && this.shipTop.isInPlace && !this.isShipComplete) {
								// if ( this.takeOff ) {
								this.isShipComplete = true;
								// console.log ("START FUELLING SHIP");
								this.FUEL_SPAWN_DELAY = this.game.time.now + this.FUEL_SPAWN_RATE;

								// if ( this.shipMid.y < -100 ) {
								// 	this.shipTop.kill();
								// 	this.shipMid.kill();
								// 	this.shipBot.kill();
								// 	this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gotoNextLevel, this);
								// }
						}

						//==== Handle Collision ====//

						// ship part hits platform
						this.game.physics.arcade.collide(this.ship, this.platforms);

						// fuel hits platform
						this.game.physics.arcade.collide(this.fuel, this.platforms);

						// enemy hits player
						this.game.physics.arcade.overlap(this.player, this.enemies, this.enemyHitPlayer, null, this);

						// bullet hits enemy
						this.game.physics.arcade.overlap(this.player.weapon.bullets, this.enemies, this.enemyBulletHit, null, this);

						// player hits platform
						var hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);

						// player hits HUD_HEIGHT
						this.game.physics.arcade.collide(this.player, this.HUD);

						// bullet hits platform
						this.game.physics.arcade.overlap(this.player.weapon.bullets, this.platforms, this.player.bulletHitPlatform, null, this);

						// console.log ("hitPlatfom? "+ hitPlatform);
						// console.log ("isFlying? "+ this.player.isFlying);
						// console.log ("isDown? -----------"+ this.player.body.touching.down);

						if (hitPlatform && this.player.isFlying && this.player.body.touching.down) {
								console.log("playing hit platform");
								this.player.isFlying = false;

								if (this.player.facingLeft) {
										// console.log ("stop flying");
										this.player.animations.play('leftstop');
								} else {
										// console.log ("stop flying");
										this.player.animations.play('rightstop');
								}
						}
				}
				// update

		}]);

		return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{"objects/Enemy":2,"objects/Fuel":3,"objects/Platform":4,"objects/Player.js":5,"objects/ShipPart":6,"objects/Treasure":7}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsPlayerJs = require('objects/Player.js');

var _objectsPlayerJs2 = _interopRequireDefault(_objectsPlayerJs);

var _objectsEnemy = require('objects/Enemy');

var _objectsEnemy2 = _interopRequireDefault(_objectsEnemy);

var _objectsFuel = require('objects/Fuel');

var _objectsFuel2 = _interopRequireDefault(_objectsFuel);

var _objectsShipPart = require('objects/ShipPart');

var _objectsShipPart2 = _interopRequireDefault(_objectsShipPart);

var _objectsTreasure = require('objects/Treasure');

var _objectsTreasure2 = _interopRequireDefault(_objectsTreasure);

var _objectsPlatform = require('objects/Platform');

var _objectsPlatform2 = _interopRequireDefault(_objectsPlatform);

var Main = (function (_Phaser$State) {
		_inherits(Main, _Phaser$State);

		function Main() {
				_classCallCheck(this, Main);

				_get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Main, [{
				key: 'create',
				value: function create() {

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
						this.game.physics.enable(this.platforms, Phaser.Physics.ARCADE);

						var ledge = new _objectsPlatform2['default'](this.game, 0, this.game.height - 18, 'ground', 1);
						this.platforms.add(ledge);

						ledge = new _objectsPlatform2['default'](this.game, 80, 200, 'ledge6', 1.1);
						this.platforms.add(ledge);

						ledge = new _objectsPlatform2['default'](this.game, 300, 260, 'ledge4', 1.1);
						this.platforms.add(ledge);

						ledge = new _objectsPlatform2['default'](this.game, 470, 130, 'ledge6', 1.1);
						this.platforms.add(ledge);

						this.HUD = this.game.add.sprite(0, 0, 'topMargin');
						this.HUD.enableBody = true;
						this.game.physics.enable(this.HUD, Phaser.Physics.ARCADE);
						this.HUD.body.immovable = true;

						//==== Create ship parts ====//

						this.ship = this.game.add.group();
						this.shipBot = new _objectsShipPart2['default'](this.game, 420, 430, 'shipBot', this);
						this.ship.add(this.shipBot);
						this.shipMid = new _objectsShipPart2['default'](this.game, 340, 230, 'shipMid', this);
						this.ship.add(this.shipMid);
						this.shipTop = new _objectsShipPart2['default'](this.game, 140, 170, 'shipTop', this);
						this.ship.add(this.shipTop);

						//==== Create Ship exhaust ====//

						this.exhaust = new _objectsShipPart2['default'](this.game, this.shipBot.x, this.shipBot.y + 48, 'exhaust');
						this.exhaust.kill();

						//=== Create game FLAGS

						this.nextPart = this.shipMid;
						this.isCarryingPart = false;
						this.isShipFuelled = false;
						this.isShipComplete = false;
						this.canTakeOff = false;

						//=== Create Player ===//

						this.player = new _objectsPlayerJs2['default'](this.game, 0, 0, 'player', this);

						//==== Create FUEL  ====

						this.fuel = new _objectsFuel2['default'](this.game, 100, 100, 'fuel', this);
						this.fuel.kill();
						this.fuel.hitFuel = false;
						this.fuel.isCarryingFuel = false;
						this.fuel.isDropping = false;

						//==== Create TREASURE ====

						var loadedTreasure = ['diamond', 'triangle', 'blob', 'goldbar', 'nuclear'];
						this.treasures = this.game.add.group();
						for (var i = 0; i < loadedTreasure.length; i++) {
								var treasure = new _objectsTreasure2['default'](this.game, 0, 0, loadedTreasure[i], this);
								this.treasures.add(treasure);
								treasure.kill();
						}

						//==== Create Enemies ===//

						this.enemies = this.game.add.group();
						this.numEnemies = 10;
						for (var i = 0; i < this.numEnemies; i++) {
								var enemy = new _objectsEnemy2['default'](this.game, 0, 0, 'fireball', this);
								this.enemies.add(enemy);
								enemy.kill();
						}

						//===== PLAYER 1 SCORE TEXT =====//

						this.scoreTitle1 = this.add.bitmapText(85, 0, 'fat-and-tiny', '1UP', 32);
						this.scoreTitle1.smoothed = false;
						this.scoreTitle1.tint = 0xffffff;

						this.scoreText = this.add.bitmapText(64, 20, 'fat-and-tiny', this.getScore(this.game.global.score, 6), 32);
						this.scoreText.smoothed = false;
						this.scoreText.tint = 0xffff00;

						//===== LIVES TEXT =====//

						this.livesText = this.game.add.bitmapText(190, 0, 'fat-and-tiny', this.game.global.lives, 32);
						this.livesText.smoothed = false;
						this.livesText.tint = 0xffffff;

						//===== LIVES IMAGE =====//

						this.livesIcon = this.game.add.sprite(215, 20, 'livesIcon');
						this.livesIcon.anchor.setTo(0.5);

						//===== PLAYER 2 SCORE TEXT =====//

						this.scoreTitle2 = this.add.bitmapText(this.game.width - 150, 0, 'fat-and-tiny', '2UP', 32);
						this.scoreTitle1.smoothed = false;
						this.scoreTitle1.tint = 0xffffff;

						this.scoreText2 = this.add.bitmapText(this.game.width - 175, 20, 'fat-and-tiny', '000000', 32);
						this.scoreText2.smoothed = false;
						this.scoreText2.tint = 0xffff00;

						//===== HIGH SCORE TEXT =====//

						this.highScoreTitle = this.add.bitmapText(this.game.width / 2, 0, 'fat-and-tiny', 'HI', 32);
						this.highScoreTitle.smoothed = false;
						this.highScoreTitle.tint = this.CYAN;

						var highscore = this.getScore(this.game.global.highscore, 6);

						this.highScoreText = this.add.bitmapText(this.game.width / 2 - 30, 20, 'fat-and-tiny', highscore, 32);
						this.highScoreText.smoothed = false;
						this.highScoreText.tint = this.YELLOW;
				}
				// create

		}, {
				key: 'partPicked',
				value: function partPicked(player, part) {
						this.isCarryingPart = true;
				}

				// 			COLLISION FUNCTIONS

		}, {
				key: 'hitFuel',
				value: function hitFuel(player, fuel) {
						// PLAYER picks up FUEL
						this.fuel.hitFuel = true;
						this.fuel.isCarryingFuel = true;
				}
		}, {
				key: 'getScore',
				value: function getScore(n, p, c) {
						// Ensure there are preceding 0s
						// n = number / score
						// p = padding in 0s
						// c = character instead of a 0
						var pad_char = typeof c !== 'undefined' ? c : '0';
						var pad = new Array(1 + p).join(pad_char);
						return (pad + n).slice(-pad.length);
				}
		}, {
				key: 'addScore',
				value: function addScore(num) {

						this.game.global.score += num;
						this.scoreText.text = this.getScore(this.game.global.score, 6);
				}
		}, {
				key: 'enemyBulletHit',
				value: function enemyBulletHit(bullet, enemy) {

						// PLAYER'S bullet hits ENEMY
						bullet.kill();
						enemy.explode();
						enemy.reset(-100, 0);
						enemy.kill();
						this.addScore(enemy.POINTS);
				}
		}, {
				key: 'gameOver',
				value: function gameOver() {

						this.game.state.start("GameOver");
				}
		}, {
				key: 'enemyHitPlayer',
				value: function enemyHitPlayer(player, enemy) {

						// ENEMY hits PLAYER
						this.game.global.lives--;
						this.livesText.text = this.game.global.lives;

						if (this.game.global.lives == 0) {

								if (this.game.global.score > this.game.global.highscore) this.game.global.highscore = this.game.global.score;

								player.explode();
								this.player.kill();

								this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gameOver, this);
						} else {

								// drop stuff being carried
								this.isCarryingPart = false;
								this.fuel.isCarryingFuel = false;

								player.explode();
								player.kill();
								this.enemies.callAll('kill');
								this.game.time.events.add(Phaser.Timer.SECOND * 1, this.playerSpawn, this);
						}
				}
		}, {
				key: 'enemySpawn',
				value: function enemySpawn() {
						// timed event that respawns dead aliens
						var enemy = this.enemies.getFirstDead(false);
						if (enemy == null) return;
						// console.log ( "ENEMY SETUP ");
						enemy.revive();
						enemy.setup();
				}
		}, {
				key: 'playerSpawn',
				value: function playerSpawn() {

						// timed event that respawns player
						this.player.revive();
						this.player.reset(this.player.START_X, this.player.START_Y);
				}
		}, {
				key: 'treasureSpawn',
				value: function treasureSpawn(group) {

						// Timed event that respawns TREASURE

						if (this.treasures.countLiving() < 1) {

								var randomTreasure = this.getRandomChild(this.treasures);

								// console.log ("Random Treasure = "+randomTreasure.key);

								if (randomTreasure.key == 'diamond') {}

								randomTreasure.revive();
								randomTreasure.reset(this.getRandomX(), this.HUD_HEIGHT);
						}
				}
		}, {
				key: 'getRandomChild',
				value: function getRandomChild(group) {

						// Picks a random Object from Group

						do {
								var NAME = group.getRandom();
						} while (NAME.alive === true);

						return NAME;
				}
		}, {
				key: 'getRandomX',
				value: function getRandomX() {
						// Returns random number between 2 ranges
						// Used so FUEL, TREASURE not dropped on ship
						if (Math.random() >= 0.5) {
								var randX = this.game.rnd.integerInRange(50, 375);
						} else {
								var randX = this.game.rnd.integerInRange(470, this.game.width);
						}
						return randX;
				}
		}, {
				key: 'gotoNextLevel',
				value: function gotoNextLevel() {

						this.game.state.start("Level2");
				}
		}, {
				key: 'takeOff',
				value: function takeOff() {

						// console.log ("CAN TAKE OFF");
						this.player.kill();
						this.canTakeOff = true;
				}
		}, {
				key: 'update',
				value: function update() {

						// enemy spawn
						if (this.game.time.now > this.ENEMY_SPAWN_DELAY) {

								this.ENEMY_SPAWN_DELAY = this.game.time.now + this.ENEMY_SPAWN_RATE;
								this.enemySpawn();
						}

						// Treasure spawn
						if (this.game.time.now > this.TREASURE_SPAWN_DELAY) {

								this.TREASURE_SPAWN_DELAY = this.game.time.now + this.TREASURE_SPAWN_RATE;
								this.treasureSpawn();
						}

						//==== FUEL HANDLER ======//

						// drop FUEL when SHIP COMPLETE
						if (this.isShipComplete && !this.fuel.alive && !this.fuel.isShipFuelled) {

								if (this.game.time.now > this.FUEL_SPAWN_DELAY) {
										// console.log ("DROP FUEL "+this.FUEL_SPAWN_RATE );
										// this.FUEL_SPAWN_DELAY = this.game.time.now+this.FUEL_SPAWN_RATE;

										this.fuel.revive();
										var newX = this.getRandomX();
										this.fuel.reset(newX, this.HUD_HEIGHT);
								}
						}

						// if FUEL is not being carried, check for collission with PLAYER
						if (this.fuel.alive && !this.fuel.isCarryingFuel) {

								this.game.physics.arcade.overlap(this.player, this.fuel, this.hitFuel, null, this);
						}

						if (this.fuel.isCarryingFuel && !this.fuel.isDropping) {

								this.fuel.bringToTop();
								this.fuel.x = this.player.x;
								this.fuel.y = this.player.y;
								var temp = this.fuel.x - this.shipBot.x;
								if (temp > -5 && temp < 5) {
										// console.log ( "DROP FUEL NOW");
										this.fuel.x = this.shipBot.x;
										this.fuel.isCarryingFuel = false;
										this.fuel.isDropping = true;

										this.FUEL_SPAWN_DELAY = this.game.time.now + this.FUEL_SPAWN_RATE;
								}
						}

						if (this.fuel.fuelLevel[0] == 1) {
								this.shipBot.tint = this.PURPLE;
						}
						if (this.fuel.fuelLevel[1] == 1) {
								this.shipMid.tint = this.PURPLE;
						}
						if (this.fuel.fuelLevel[2] == 1) {
								this.shipTop.tint = this.PURPLE;
						}

						//==== pick up parts of ShipPart

						this.game.physics.arcade.overlap(this.player, this.nextPart, this.partPicked, null, this);

						if (this.isCarryingPart) {
								this.nextPart.x = this.player.x;
								this.nextPart.y = this.player.y;
								this.nextPart.bringToTop();
								// console.log (this.nextPart.x+" "+this.ship1.x);
								var temp = this.nextPart.x - this.shipBot.x;
								if (temp > -20 && temp < 20) {

										this.nextPart.x = this.shipBot.x;
										this.nextPart.body.gravity.y = 100;
										this.isCarryingPart = false;
										if (this.nextPart == this.shipMid) {
												this.nextPart = this.shipTop;
										} else {
												this.nextPart = null;
										}
								}
						}
						//=============================//

						// PLAYER gets into SHIP
						if (this.fuel.isShipFuelled) {
								// console.log ("SHIP IS FUELLED");
								// player hits ship part
								this.game.physics.arcade.overlap(this.player, this.shipBot, this.takeOff, null, this);
						}

						if (this.canTakeOff) {
								// console.log (" CAN TAKE OFF = TRUE");
								this.shipBot.body.gravity.y = -50;
								this.shipMid.body.gravity.y = -50;
								this.shipTop.body.gravity.y = -50;

								if (!this.exhaust.alive) {
										this.exhaust.revive();
										this.exhaust.body.gravity.y = -50;
								}

								if (this.shipMid.y < -100) {
										this.shipTop.kill();
										this.shipMid.kill();
										this.shipBot.kill();
										this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gotoNextLevel, this);
								}
						}

						if (this.shipMid.isInPlace && this.shipTop.isInPlace && !this.isShipComplete) {
								// if ( this.takeOff ) {
								this.isShipComplete = true;
								// console.log ("START FUELLING SHIP");
								this.FUEL_SPAWN_DELAY = this.game.time.now + this.FUEL_SPAWN_RATE;

								// if ( this.shipMid.y < -100 ) {
								// 	this.shipTop.kill();
								// 	this.shipMid.kill();
								// 	this.shipBot.kill();
								// 	this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gotoNextLevel, this);
								// }
						}

						//==== Handle Collision ====//

						// ship part hits platform
						this.game.physics.arcade.collide(this.ship, this.platforms);

						// fuel hits platform
						this.game.physics.arcade.collide(this.fuel, this.platforms);

						// enemy hits player
						this.game.physics.arcade.overlap(this.player, this.enemies, this.enemyHitPlayer, null, this);

						// bullet hits enemy
						this.game.physics.arcade.overlap(this.player.weapon.bullets, this.enemies, this.enemyBulletHit, null, this);

						// player hits platform
						var hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);

						// player hits HUD_HEIGHT
						this.game.physics.arcade.collide(this.player, this.HUD);

						// bullet hits platform
						this.game.physics.arcade.overlap(this.player.weapon.bullets, this.platforms, this.player.bulletHitPlatform, null, this);

						// console.log ("hitPlatfom? "+ hitPlatform);
						// console.log ("isFlying? "+ this.player.isFlying);
						// console.log ("isDown? -----------"+ this.player.body.touching.down);

						if (hitPlatform && this.player.isFlying && this.player.body.touching.down) {
								console.log("playing hit platform");
								this.player.isFlying = false;

								if (this.player.facingLeft) {
										// console.log ("stop flying");
										this.player.animations.play('leftstop');
								} else {
										// console.log ("stop flying");
										this.player.animations.play('rightstop');
								}
						}
				}
				// update

		}]);

		return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{"objects/Enemy":2,"objects/Fuel":3,"objects/Platform":4,"objects/Player.js":5,"objects/ShipPart":6,"objects/Treasure":7}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = (function (_Phaser$State) {
		_inherits(Preload, _Phaser$State);

		function Preload() {
				_classCallCheck(this, Preload);

				_get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Preload, [{
				key: 'preload',
				value: function preload() {
						/* Preload required assets */
						this.game.load.image('logo', 'assets/player2.png');
						this.game.load.atlas('player', 'assets/jetpac_atlas.png', 'assets/jetpac_atlas_hash.json');
						this.game.load.atlas('cloud', 'assets/cloud_atlas.png', 'assets/cloud_hash.json');
						this.game.load.image('ground', 'assets/ground/ground.png');
						this.game.load.image('ledge4', 'assets/platform/ledge4.png');
						this.game.load.image('ledge6', 'assets/platform/ledge6.png');
						this.game.load.image('topMargin', 'assets/platform/topmargin.png');
						this.game.load.image('bullet', 'assets/bullet.png');
						this.game.load.image('fuel', 'assets/fuel.png');
						this.game.load.image('shipBot', 'assets/ship/ship1.png');
						this.game.load.image('shipMid', 'assets/ship/ship2.png');
						this.game.load.image('shipTop', 'assets/ship/ship3.png');
						this.game.load.spritesheet('exhaust', 'assets/ship/exhaust.png', 32, 32, 2);

						//			ENEMIES
						this.game.load.spritesheet('fireball', 'assets/enemies/fireball.png', 32, 22, 2);
						this.game.load.spritesheet('fuzzball', 'assets/enemies/fuzzball.png', 16, 14, 2);

						//			TREASURE
						this.game.load.image('goldbar', 'assets/treasure/goldbar.png');
						this.game.load.image('blob', 'assets/treasure/blob.png');
						this.game.load.image('nuclear', 'assets/treasure/nuclear.png');
						this.game.load.image('triangle', 'assets/treasure/triangle.png');
						this.game.load.spritesheet('diamond', 'assets/treasure/diamond.png', 31, 28, 4);

						//			FONTS
						this.game.load.bitmapFont('fat-and-tiny', 'assets/font/fat-and-tiny.png', 'assets/font/fat-and-tiny.xml');
						this.game.load.bitmapFont('assets/font/digits');

						this.game.load.image('livesIcon', 'assets/lives/lives.png');

						this.game.load.image('splash', 'assets/menu/jetpac.jpg');
						this.game.load.image('menu', 'assets/menu/Jetpac_menu.jpg');

						//this.game.load.audio('myAudio', 'assets/my-audio.wav');
						//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
				}
		}, {
				key: 'create',
				value: function create() {
						console.log("PRELOAD CREATE()");

						var logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'splash');
						logo.anchor.setTo(0.5);

						this.input.onDown.addOnce(this.startTitle, this);
				}
		}, {
				key: 'startTitle',
				value: function startTitle() {

						this.game.state.start("GameTitle");
				}
		}]);

		return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=game.js.map

import Boot from 'states/Boot';
import Preload from 'states/Preload';
import GameTitle from 'states/GameTitle';
import Main from 'states/Main';
import Level2 from 'states/Level2';
import GameOver from 'states/GameOver';

class Game extends Phaser.Game {

	constructor() {

		super();
console.log ("===============INDEX JS ");

		this.global = {

			highscore: 0,
			lives: 3,
			score: 0,
			canvas_width_max: 2048,
			canvas_width : 1000,
			canvas_height_max : 2048,
			canvas_height : 650,
			scale_ratio : 1,
			aspect_ratio : 1,

			baseWidth: 1920,
			baseHeight: 1080,
			minPadding: 50,
			horizontalMargin: 0,
			verticalMargin: 0,
			landscapeRatio: 1.2,
			currentDevicePixelRatio: 1,
			iconSize: 364,
			fieldSize: {
				rows: 6,
				cols: 6
			}

		};

		this.global.canvas_width = window.screen.availWidth * window.devicePixelRatio;

		this.global.canvas_height = window.screen.availHeight * window.devicePixelRatio;


		this.global.aspect_ratio = this.global.canvas_width / this.global.canvas_height;

		// console.log ("canvas width "+ this.global.canvas_width);
		// console.log ("canvas width max "+ this.global.canvas_width_max);
		// console.log ("canvas hieght "+this.global.canvas_height);
		// console.log ("aspect ratio "+this.global.aspect_ratio);

		if ( this.global.aspect_ratio < 1)
			this.global.scale_ratio = this.global.canvas_height / this.global.canvas_height_max;
		else {
			this.global.scale_ratio = this.global.canvas_width / 640;

	// console.log ("canvas width "+ global.canvas_width);

	console.log ("scale ratio "+ this.global.scale_ratio);
	// this.global.scale_ratio = 2.1;

		}

// console.log ("canvas hieght "+global.canvas_height);
// console.log ("canvas width "+global.canvas_width);
// console.log ("aspect ratio "+global.aspect_ratio);

		// super( this.global.canvas_width, this.global.canvas_height, Phaser.CANVAS );

		var temp1 = window.screen.availWidth;
		var temp2 = window.screen.availHeight;
		var temp3 = window.devicePixelRatio;

console.log ("AVAIL WIDTH "+temp1);
console.log ("AVAIL HEIGHT "+temp2);
console.log ("PIXEL RATIO "+temp3);


		super( temp1, temp2, Phaser.CANVAS );

		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('GameTitle', GameTitle, false);
		this.state.add('Main', Main, false);
		this.state.add('Level2', Level2, false);
		this.state.add('GameOver', GameOver, false);

		this.state.start('Boot');
	}

}

new Game();

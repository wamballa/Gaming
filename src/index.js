import Boot from 'states/Boot';
import Preload from 'states/Preload';
import GameTitle from 'states/GameTitle';
import Level1 from 'states/Level1';
import Level2 from 'states/Level2';
import GameOver from 'states/GameOver';

class Game extends Phaser.Game {

	constructor() {

		super();

		this.global = {

			highscore: 0,
			lives: 3,
			score: 0,

		};

    	super(640, 480, Phaser.CANVAS, 'content', null);

		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('GameTitle', GameTitle, false);
		this.state.add('Level1', Level1, false);
		this.state.add('Level2', Level2, false);
		this.state.add('GameOver', GameOver, false);

		this.state.start('Boot');
	}

}

new Game();

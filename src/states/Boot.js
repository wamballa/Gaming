class Boot extends Phaser.State {

	init() {
		console.log ("============BOOT INIT");
// console.log ("GAME HEIGHT = "+this. game.height);
		// this.scale = new ScaleManager ( this.game, 640, 480);
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		// this.scale.width = 640;
		// this.scale.height = 480;
		this.scale.forceLandscape = true;

		// this.scale.pageAlignVertically = true;
		// this.scale.pageAlignHorizontally = true;
		// this.scale.forceLandscape = true;
		// this.game.canvas.style.width = '100%';
		// this.canvas.style.height = '100%';
		// this.scale.parentIsWindow = true;
		// this.scale.refresh();

console.log ("SCALE FACTOR = "+this.scale.scaleFactor);
	}

	preload() {

        this.load.image("loading", "assets/loadingback.png");

	}

	create() {
		console.log ("BOOT CREATE() ");

		// this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        //
		// this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //
		// this.game.scale.refresh();

		// this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		// this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// this.game.scale.pageAlignHorizontally = true;
		// this.game.scale.pageAlignVertically = true;
		// this.game.scale.forceLandscape = true;
		// // this.game.canvas.style.width = '100%';
		// this.game.canvas.style.height = '100%';
		// this.game.scale.parentIsWindow = true;
		// this.game.scale.refresh();

		this.game.state.start("Preload");
	}

}

export default Boot;

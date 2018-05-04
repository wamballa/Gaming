class Boot extends Phaser.State {

	preload() {

		console.log ("BOOT STATE");

	}

	create() {

		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = false;
		this.scale.forceLandscape = false;
		this.scale.refresh();

		this.game.state.start("Preload");

	}

}

export default Boot;

export default class StateInit extends Phaser.State {

  preload() {
    //
    //This file sets up the preloader
    //
    console.log('STATEINIT');
    this.game.load.image('loadingEmpty', '../../images/loading/progress_none.png');
    this.game.load.image('loadingFull', '../../images/loading/progress_all.png');
    if (this.game.isMobile == true) {
      if (this.game.useLandscape == true) {
        this.game.scale.forceOrientation(true, false);
      } else {
        this.game.scale.forceOrientation(false, true);
      }
      this.game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
      this.game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
    }
  }

  create() {
    this.state.start('StateLoad');
  }

  update() {}

  rightWay() {
    if (this.game.model.state != 'main') {
      location.reload();
    }
    document.getElementById(this.game.wrongTag).style.display = 'none';
  }

  wrongWay() {
    document.getElementById(this.game.wrongTag).style.display = 'block';
  }
}

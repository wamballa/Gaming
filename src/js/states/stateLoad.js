import BlueTheme from "js/themes/blueTheme";
import TextButton from "js/comps/ui/buttons/textButton";

export default class StateLoad extends Phaser.State {
  preload() {
    this.game.model.state = "load";
    let empty = this.game.add.image(0, 0, "loadingEmpty");
    let full = this.game.add.image(0, 0, "loadingFull");
    empty.anchor.set(0.5, 0.5);
    empty.x = this.game.width / 2;
    empty.y = this.game.height / 2;
    //
    //
    full.anchor.set(0, 0.5);
    full.x = this.game.world.centerX - empty.width / 2;
    full.y = empty.y;
    this.game.load.setPreloadSprite(full);
    //PRELOAD EVERYTHING HERE
    //
    //
    //
    //
    const theme = new BlueTheme(this.game);
    theme.loadTheme();
    //Preload all text buttons
    const button = new TextButton('Loading', -1, -1, '', this.game);
    // TextButton.preloadAll();
    button.preloadAll();
    //Preload all icons
    //preload images
    // game.load.image('heart', 'images/main/heart.png');
    this.loadMain("heart");
    this.game.load.audio("backgroundMusic", "audio/background/piano.mp3");
    //game.load.audio('elephant','audio/sfx/elephant.mp3');
    this.loadSFX("elephant");
  }
  loadMain(name) {
    this.game.load.image(name, "images/main/" + name + ".png");
  }
  loadSFX(name) {
    this.game.load.audio(name, "audio/sfx/" + name + ".mp3");
    this.game.model.regSound(name);
  }
  loadSFX2(name) {
    this.game.load.audio(name, "audio/sfx/" + name + ".wav");
    this.game.model.regSound(name);
  }
  create() {
    console.log("STATELOAD CREATE");
    //pass the key for background music to the media manager
    this.game.mediaManager.setBackgroundMusic("backgroundMusic");
    //pass sound keys to the media manager
    //a sound object will be created
    this.game.model.sfx.forEach(
      function(sound) {
        this.game.mediaManager.addSound(sound);
      }.bind(this)
    );
    if (this.game.model.devMode == true) {
      this.game.model.musicOn = false;
      this.game.state.start("StateMain", false);
    } else {
      this.game.state.start("StateTitle", false);
    }
  }
  update() {}
}

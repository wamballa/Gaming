import BaseTheme from "./BaseTheme";

export default class BlueTheme {
  constructor(game) {
    // super(game);
    this.game = game;
    this.themeName = "blue";
  }
  loadTheme() {
    this.loadMusicButtons();
    this.game.load.image("defaultButton", "images/themes/blue/buttons/default.png");
    //
    //
    //
    this.game.model.defaultButtonTextColor = "#ffffff";
    this.game.model.primaryTextColor = "#ffffff";
    this.game.model.secondTextColor = "#000000";
    this.game.model.timerBarColor = "#ff0000";
    this.game.model.pointTextColor = "#ff0000";
    this.game.model.clockColor = "#219ADDFF";
    this.game.model.scoreColor = "#219ADDFF";
    this.game.model.progBarColor = "#1CF707";
    this.game.model.timerBarColor = "#ff0000";
    this.game.model.levelColor = "#ffffff";
    this.game.model.toastTextColor = 0xffffff;
    this.game.model.toastBarColor = 0xff0000;
    this.game.model.mainFont = "Flamenco";
    //
    //
    //
    this.game.model.titleFontSize = this.game.width / 24;
    this.game.model.buttonFontSize = this.game.width / 16;
    this.game.model.defaultFontSize = this.game.width / 30;
    this.game.model.scoreFontSize = this.game.width / 40;
    this.game.model.clockFontSize = this.game.width / 40;
  }
  loadMusicButtons() {
    let path = "images/themes/" + this.themeName + "/soundButtons/";
    this.game.load.image("musicOn", path + "musicOn.png");
    this.game.load.image("musicOff", path + "musicOff.png");
    this.game.load.image("soundOff", path + "soundOff.png");
    this.game.load.image("soundOn", path + "soundOn.png");
  }
}

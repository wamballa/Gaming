import ImageToggle from "js/comps/ui/buttons/imageToggle.js";
import Align from "js/util/aligner";

export default class SoundButtons extends Phaser.Group {
  constructor(game) {
    console.log("SOUND BUTTONS CONSTUCTOR");
    super(game);
    this.game = game;
    this.G = this.game.G;
    //
    //
    this.soundIcon = new ImageToggle(
      "soundOn",
      "soundOff",
      this.G.TOGGLE_SOUND,
      this.game
    );
    // this.soundIcon.scale.set(0.5, 0.5);
    Align.scaleToGameW(this.game, this.soundIcon, 0.109375);
    this.soundIcon.x = this.soundIcon.width / 2;
    this.soundIcon.y = this.soundIcon.height / 2;
    //
    //
    //
    this.musicIcon = new ImageToggle(
      "musicOn",
      "musicOff",
      this.G.TOGGLE_MUSIC,
      this.game
    );
    Align.scaleToGameW(this.game, this.musicIcon, 0.109375);
    //this.musicIcon.scale.set(0.5, 0.5);
    this.musicIcon.x = this.game.width - this.musicIcon.width / 2;
    this.musicIcon.y = this.musicIcon.height / 2;
    this.add(this.musicIcon);
    this.add(this.soundIcon);
    this.soundIcon.setTo(this.game.model.soundOn);
    this.musicIcon.setTo(this.game.model.musicOn);
    //Align.getScaleToGameW(this.musicIcon);
    //Align.scaleToGameW(this.soundIcon, 0.109375);
  }
}

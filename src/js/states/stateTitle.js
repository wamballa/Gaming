import TextButton from "js/comps/ui/buttons/textButton";
// import SoundButtons from "js/comps/ui/buttons/soundButton";
import SoundButtons from "js/comps/ui/buttons/soundButtons.js";
import Align from 'js/util/aligner';

export default class StateTitle extends Phaser.State {
  constructor() {
    // do something
    console.log("STATETITLE CONTSTRUCTOR");
    super();
  }
  create() {
    console.log("STATETITLE CREATE");
    this.game.model.state = "title";
    var soundButtons = new SoundButtons(this.game);
    var buttonStart = new TextButton("Start", -1, -1, this.game.G.START_GAME, this.game);
    Align.center(this.game, buttonStart);
  }
}

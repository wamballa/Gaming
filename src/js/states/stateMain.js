export default class StateMain extends Phaser.State {
  constructor() {
    console.log("STATEMAIN");
    super();
  }
  preload() {}
  create() {
      console.log('STATEMAIN CREATE()');
    //keep this line
    //to tell the game what state we are in!
    this.game.model.state = "main";
  }
  update() {}
}

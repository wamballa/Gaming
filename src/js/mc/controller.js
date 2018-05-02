export default class Controller {
  constructor(eventDispatcher, game) {
    this.game = game;
    this.G = this.game.G;
    this.model = this.game.model;
    eventDispatcher.add(this.gotEvent, this);
  }
  gotEvent(call, params) {
    //console.log("call=" + call);
    switch (call) {
      case this.G.UP_SCORE:
      this.model.upScore(params);
        break;
      case this.G.TOGGLE_SOUND:
      this.model.soundOn = params;
        break;
      case this.G.TOGGLE_MUSIC:
      this.model.musicOn = params;
        break;
      case this.G.START_GAME:
      this.game.state.start("StateMain");
        break;
      case this.G.END_GAME:
      this.game.state.start("StateOver");
        break;
    }
  }
}

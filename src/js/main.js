import GameConstants from "js/gameConstants";
import Model from "js/mc/model.js";
import Controller from "js/mc/controller.js";
import MediaManager from "js/util/mediaManager.js";
import StateInit from "js/states/stateInit";
import StateTitle from "js/states/stateTitle";
import StateLoad from "js/states/stateLoad";
import StateMain from "js/states/stateMain";
import StateOver from "js/states/stateOver";

let isMobile;
const useLandscape = false;

class Game extends Phaser.Game {
  constructor(width, height, mode) {
    super(width, height, mode);

    this.game = this;
    this.G = new GameConstants();
    this.eventDispatcher = new Phaser.Signal();
    this.model = new Model(this.eventDispatcher, this);
    this.controller = new Controller(this.eventDispatcher, this);
    this.mediaManager = new MediaManager(this.eventDispatcher, this);
    this.model.devMode = false;
    this.wrongTag = false;
    this.useLandscape = useLandscape;

    this.state.add("StateInit", StateInit, false);
    this.state.add("StateLoad", StateLoad, false);
    this.state.add("StateMain", StateMain, false);
    this.state.add("StateTitle", StateTitle, false);
    this.state.add("StateOver", StateOver, false);
    this.state.start("StateInit");
  }
}

window.onload = function() {
  isMobile = navigator.userAgent.indexOf("Mobile");

  isMobile = isMobile != -1;

  if (isMobile == false) {
    console.log("DESKTOP");
    if (useLandscape == true) {
      console.log("LANDSCAPE");
      new Game(640, 480, Phaser.AUTO, "ph_game");
    } else {
      console.log("PORTRAIT");
      new Game(480, 640, Phaser.AUTO, "ph_game");
    }
  } else {
    console.log("MOBILE/TABLET");

    new Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");

    if (useLandscape == true) {
      this.wrongTag = "wrongWayLandscape";
    } else {
      this.wrongTag = "wrongWayPortrait";
    }
  }
};

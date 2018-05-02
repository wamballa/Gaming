export default class MediaManager {
  constructor(eventDispatcher, game) {
    this.game = game;
    this.G = this.game.G;
    this.soundArray = [];
    eventDispatcher.add(this.gotEvent, this);
  }
  gotEvent(call, params) {
    switch (call) {
      case this.G.PLAY_SOUND:
        this.playSound(params);
        break;
      case this.G.MUSIC_STAT_CHANGED:
        this.updateMusic();
        break;
    }
  }
  addSound(key) {
    this.soundArray[key] = this.game.add.audio(key);
  }
  playSound(key) {
    if (this.game.model.soundOn == true) {
      this.soundArray[key].play();
    }
  }
  setBackgroundMusic(key) {
    this.musicPlaying = false;
    if (this.backgroundMusic) {
      this.backgroundMusic.stop();
    }
    this.backgroundMusic = this.game.add.audio(key);
    this.backgroundMusic.volume = 0.5;
    this.backgroundMusic.loop = true;
    this.updateMusic();
  }
  updateMusic() {
    if (this.game.model.musicOn == true) {
      if (this.musicPlaying == false) {
        this.musicPlaying = true;
        if (this.backgroundMusic) {
          this.backgroundMusic.play();
        }
      }
    } else {
      this.musicPlaying = false;
      if (this.backgroundMusic) {
        this.backgroundMusic.stop();
      }
    }
  }
}

export default class TextButton extends Phaser.Group {
  constructor(text, set, style, event, game) {
    console.log('TEXTBUTTON constructor');
    super(game);
    console.log('CHECKPOINT');

    this.text = text;
    this.set = set;
    this.style = style;
    this.event = event;
    this.game = game;
    this.params = null;
    this.size = 22;
    this.textColor = "#000000";

    this.eventDispatcher = this.game.eventDispatcher;

    if (this.set === -1) {
      this.set = this.game.model.defButtonSet;
    }
    if (this.style === -1) {
      this.style = this.game.model.defButtonStyle;
    }
    this.x = this.game.width / 2;
    this.y = this.game.height / 2;
    var key = "buttons_" + this.set + "_" + this.style;
    //  console.log(key);
    this.key = key;
    //
    //
    //
    // this.text = text;
    // this.event = event;
    // this.params = params;
    //
    //
    //
    //
    this.buttonBack = this.create(0, 0, this.key);
    this.buttonBack.anchor.set(0.5, 0.5);
    //
    //
    this.textField = this.game.add.text(0, 0, this.text);
    this.textField.anchor.set(0.5, 0.5);
    console.log("size=" + this.size);

    this.textField.fontSize = this.size + "px";
    this.textField.fill = this.textColor;
    if (this.game.model.buttonFont != "none") {
      this.textField.font = this.game.model.buttonFont;
    }
    this.add(this.textField);
    this.buttonBack.inputEnabled = true;
    this.buttonBack.events.onInputUp.add(this.onReleased, this);
    this.buttonBack.events.onInputDown.add(this.onDown, this);
  }
  preload(set, style) {
    var key = "buttons_" + set + "_" + style;
    var path = "images/ui/buttons/" + set + "/" + style + ".png";
    this.game.load.image(key, path);
  }
  preloadAll() {
    var lenArray = [10, 8, 15, 14];
    for (var i = 1; i < 5; i++) {
      for (var j = 1; j < lenArray[i - 1] + 1; j++) {
        this.preload(i, j);
      }
    }
  }
  setPos(x, y) {
    this.x = x;
    this.y = y;
  }
  getBack() {
    return this.buttonBack;
  }
  onDown() {
    this.buttonBack.y = -5;
  }
  onReleased() {
    this.buttonBack.y = 0;
    if (this.event) {
      console.log(this.event);
      console.log(this.params);
      if (this.params) {
        this.eventDispatcher.dispatch(this.event, this.params);
      } else {
        this.eventDispatcher.dispatch(this.event);
      }
    }
  }
  setCallBack(callback) {
    this.callback = callback;
  }
  setTextSize(size) {
    this.textField.fontSize = size + "px";
  }
  setTextPos(xx, yy) {
    this.textField.x = xx;
    this.textField.y = yy;
  }
  setTextColor(textColor) {
    this.textField.fill = textColor;
  }
  getTextField() {
    return this.textField;
  }
  getText() {
    return this.textField.text;
  }
}

class Game {
  constructor() {}

  

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  
}

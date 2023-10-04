export default class Goblin {
  constructor(gameElement) {
    this.cells = gameElement.querySelectorAll(".col");
    this.goblinHead = gameElement.querySelector(".head");
  }

  change() {
    let previous = 0;
    let rand = 0;

    setInterval(() => {
      for (;;) {
        rand === previous;
        if ((rand = Math.floor(Math.random() * (this.cells.length - 1)))) {
          break;
        }
      }
      previous = rand;
      this.cells[rand].appendChild(this.goblinHead);
    }, 1000);
  }
}

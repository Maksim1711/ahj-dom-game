/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Goblin.js
class Goblin {
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
        if (rand = Math.floor(Math.random() * (this.cells.length - 1))) {
          break;
        }
      }
      previous = rand;
      this.cells[rand].appendChild(this.goblinHead);
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const Game = new Goblin(document.querySelector(".goblin"));
Game.change();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
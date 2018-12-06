let inquirer = require('inquirer');
let Game = require('./assets/js/Game.js');


inquirer
  .prompt(
    { type: 'confirm', name: 'start', message: 'Start Game?' },
  )
  .then(answers => {
    if(answers.start) {
      game = new Game();
      game.startGame();
    }
  });

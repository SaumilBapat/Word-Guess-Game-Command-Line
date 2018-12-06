let inquirer = require('inquirer');
let Word = require('./Word.js');

class Game {
  constructor() {
    this.words = ['commander', 'spaceship', 'blackhole', 'supernova', 'beam', 'phaser'];
    this.index = Math.floor(Math.random() * this.words.length);
    this.score = {
      wins: 0, losses: 0
    };
  }
  guessWord() {
    inquirer
      .prompt([
          { type: 'input', name: 'guess', message: 'Guess a Letter' },
      ])
      .then(answers => {
        this.word.guessLetter(answers.guess);
        console.log(this.word.getWord());
        console.log(`Guesses Left ${this.word.tries}`);
        if(this.word.tries && !this.word.completed()) {
          this.guessWord();
        } else {
          if(this.word.completed()) {
            this.score.wins++;
          } else {
            this.score.losses++;
          }
          console.log(`Wins: ${this.score.wins} \n Losses: ${this.score.losses}`);
          inquirer
            .prompt([
                { type: 'confirm', name: 'playAgain', message: 'Play Again?' },
            ])
            .then(answers => {
              if(answers.playAgain) {
                this.nextWord();
              }
            });
        }
      });
  }
  startGame() {
    this.word = new Word(this.words[this.index]);
    this.guessWord(this.word);
  }
  nextWord() {
    this.index = (this.index + 1)%this.words.length;
    this.word = new Word(this.words[this.index]);
    this.guessWord(this.word);
  }
}

module.exports = Game;

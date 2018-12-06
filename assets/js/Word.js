var Letter = require('./Letter.js');
class Word {
  constructor(word) {
    this.letters = [];
    let letters = this.letters;
    word.split('').forEach(function(letter) {
      letter = new Letter(letter);
      letters.push(letter);
    });
    this.tries = 5;
  }
  getWord() {
    var word = '';
    this.letters.forEach( function(letter) {
      word += letter.getLetter() + ' ';
    });
    return word;
  }
  guessLetter(guess) {
    if(this.tries === 0) return;
    var correctGuess = false;
    this.letters.forEach(function(letter) {
      var thisGuess = letter.guessLetter(guess);
      correctGuess = thisGuess || correctGuess;
    });
    if(!correctGuess) this.tries--;
  }
  completed() {
    let complete = true;
    this.letters.forEach(function(letter) {
      if (!letter.guessed) complete = false;
    });
    return complete;
  }
}

module.exports = Word;

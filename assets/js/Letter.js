class Letter {
  constructor(letter) {
    letter = letter.toLowerCase();
    this.letter = letter;
    this.guessed = false;
  }
  getLetter() {
    if(this.guessed) {
      return this.letter;
    } else {
      return '-';
    }
  }
  guessLetter(letter) {
    letter = letter.toLowerCase();
    this.guessed = this.guessed || this.letter === letter;
    return this.letter === letter;
  }
}
module.exports = Letter;

const Turn = require('../src/Turn');

class Round {
  constructor (deckInst) {
    this.deck = deckInst;
    this.turns = 0;
    this.currentTurn;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[`${this.correctAnswers}`];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.deck.cards[`${this.correctAnswers}`]);
    if(this.currentTurn.evaluateGuess()) {
      this.correctAnswers++;
    } else if(!this.currentTurn.evaluateGuess()) {
      this.incorrectAnswers++;
    }
    // cannot depend on this.turns for index position because it iterates no matter what
    // if it's correct, it should iterate once
    // if it's not correct, it does not iterate
    // this.currentTurn
    this.turns++;
  }
}

module.exports = Round;
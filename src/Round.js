const Turn = require('../src/Turn');

class Round {
  constructor (deckInst) {
    this.deck = deckInst;
    this.turns = 0;
    this.currentTurn;
    this.correctAnswers = 0;
    this.incorrectAnswers = [];
  }

  returnCurrentCard() {
    return this.deck.cards[`${this.correctAnswers}`];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.deck.cards[this.correctAnswers]);
    if(this.currentTurn.evaluateGuess()) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers.push(this.deck.cards[this.correctAnswers].id);
    }
    this.turns++;
    return this.currentTurn.giveFeedback();
  }
}

module.exports = Round;
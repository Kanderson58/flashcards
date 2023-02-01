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
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn;(guess, this.deck.cards[this.turns]);
    if(this.currentTurn.evaluateGuess()) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers.push(this.deck.cards[this.correctAnswers].id);
    };
    this.turns++;
    return this.currentTurn.giveFeedback();
  };

  calculatePercentageCorrect() {
    const total = 100 * (this.correctAnswers / (this.correctAnswers + this.incorrectAnswers.length));
    return `${total}%`;
  };

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()} of the questions correctly!`;
  };
};

module.exports = Round;
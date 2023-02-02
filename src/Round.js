const Turn = require('../src/Turn');

class Round {
  constructor (deckInst) {
    this.deck = deckInst;
    this.turns = 0;
    this.currentCard = deckInst[0];
    this.currentTurn;
    this.correctAnswers = 0;
    this.incorrectAnswers = [];
  };

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  };

  takeTurn(guess) {
    this.returnCurrentCard();
    this.currentTurn = new Turn(guess, this.currentCard);
    if(this.currentTurn.evaluateGuess()) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers.push(this.deck.cards[this.correctAnswers].id);
    };
    this.turns++;
    return this.currentTurn.giveFeedback();
  };

  calculatePercentageCorrect() {
    const total = Math.floor(100 * (this.correctAnswers / (this.correctAnswers + this.incorrectAnswers.length)));
    return `${total}%`;
  };

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()} of the questions correctly!`;
  };
};

module.exports = Round;
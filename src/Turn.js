class Turn {
  constructor (guess, cardObj) {
    this.guess = guess;
    this.currentCard = cardObj;
    this.result;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess() {
    if(this.guess === this.currentCard.correctAnswer) {
      this.result = true;
    } else {
      this.result = false;
    };
    return this.result;
  };

  giveFeedback() {
    if(this.result) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  };
};

module.exports = Turn;
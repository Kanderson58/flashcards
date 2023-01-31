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
      this.result = 'correct';
      return true;
    } else {
      this.result = 'incorrect';
      return false;
    };
  };

  giveFeedback() {
    if(this.result === 'correct') {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  };
};

module.exports = Turn;
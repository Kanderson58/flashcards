class Deck {
  constructor (cardObjs) {
    this.cards = cardObjs;
  };

  countCards() {
    return this.cards.length;
  }
};

module.exports = Deck;
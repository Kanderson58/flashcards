class Round {
  constructor (deckInst) {
    this.deck = deckInst;
    this.turns = 0;
  }
  
  returnCurrentCard() {
    return this.deck.cards[`${this.turns}`];
  }

  takeTurn() {
    this.turns++;
  }
}

module.exports = Round;
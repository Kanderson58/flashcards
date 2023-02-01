const data = require('./data');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
    this.deck;
    this.round;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  };

  printQuestion(round) {
      util.main(round);
  };

  start() {
    this.createCards();
    this.beginRound();
    this.printMessage(this.deck);
    this.printQuestion(this.round);
  };

  createCards() {
    const newDeck = prototypeQuestions.map(question => {
      let newCard = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return newCard;
    });
    this.deck = new Deck(newDeck);
  };
  
  beginRound() {
    this.currentRound++;
    this.round = new Round(this.deck);
  };
};

module.exports = Game;
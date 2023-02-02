const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    const newDeck = prototypeQuestions.map(question => {
      let newCard = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return newCard;
    });
    deck = new Deck(newDeck);
  });
  
  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should contain a deck of cards', () => {
    expect(deck.cards[0]).to.be.an.instanceOf(Card);
    expect(deck.cards).to.be.an('array');
  });

  it('should be able to return the number of cards', () => {
    const deckSize = deck.countCards();

    expect(deckSize).to.equal(30);
  });
});
const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function');
    const card3 = new Card(16, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'], 'the accumulator');
    deck = new Deck([card1, card2, card3]);
  });
  
  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should contain a deck of cards', () => {
    expect(deck.cards).to.be.an('array');
  });

  it('should be able to return the number of cards', () => {
    const deckSize = deck.countCards();

    expect(deckSize).to.equal(3);
  });
});
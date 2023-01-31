const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  let currentRound, deck, turn;

  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function');
    const card3 = new Card(3, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'], 'the accumulator');
    deck = new Deck([card1, card2, card3]);
    currentRound = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(currentRound).to.be.an.instanceOf(Round);
  });

  it('should start with the first card in the deck', () => {
    let card = currentRound.returnCurrentCard();

    expect(card.id).to.equal(1);
  });

  it('should keep track of how many turns have been taken', () => {
    currentRound.takeTurn();
    currentRound.takeTurn();

    expect(currentRound.turns).to.equal(2);

    currentRound.takeTurn();

    expect(currentRound.turns).to.equal(3);
  });

  it('should update current card after turn is taken', () => {
    let currentCard = currentRound.returnCurrentCard();

    expect(currentCard.id).to.equal(1);

    currentRound.takeTurn();
    currentRound.takeTurn();

    currentCard = currentRound.returnCurrentCard();

    expect(currentCard.id).to.equal(3);
  });


});
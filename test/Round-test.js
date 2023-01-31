const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  let currentRound;

  beforeEach(() => {
    currentRound = new Round();
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(currentRound).to.be.an.instanceOf(Round);
  });

  it.skip('should start with the first card in the deck', () => {
    let currentCard = currentRound.returnCurrentCard();

    expect(currentCard).to.be.an.instanceOf(Card);
    expect(currentCard.id).to.equal(1);
  });

  it.skip('should keep track of how many turns have been taken', () => {
    currentRound.takeTurn();
    currentRound.takeTurn();

    expect(currentRound.turns).to.equal(2);

    currentRound.takeTurn();
    currentRound.takeTurn();

    expect(currentRound.turns).to.equal(4);
  });

  it.skip('should update current card after turn is taken', () => {
    let currentCard = currentRound.returnCurrentCard();

    expect(currentCard.id).to.equal(1);

    currentRound.takeTurn();
    currentRound.takeTurn();

    currentCard = currentRound.returnCurrentCard();

    expect(currentCard.id).to.equal(3);
  });
});
const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should start with no rounds played', () => {
    expect(game.currentRound).to.equal(0);
  });

  it('should be able to start the game', () => {
    expect(game.start).to.be.a('function');
  });

  it('should create a deck of cards for the game', () => {
    const deck = game.createCards();

    expect(game.deck).to.be.an.instanceOf(Deck);
    expect(game.deck.cards.length).to.equal(30);
  });

  it('should start a new round', () => {
    game.createCards();
    game.beginRound();

    expect(game.currentRound).to.equal(1);
    expect(game.round).to.be.an.instanceOf(Round);
  });

  it('should have a deck full of card objects', () => {
    game.createCards();

    expect(game.deck.cards[0]).to.be.an.instanceOf(Card);
  });
});
const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', () => {
  let deck, game;

  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function');
    const card3 = new Card(16, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'], 'the accumulator');
    deck = new Deck([card1, card2, card3]);
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it.skip('should start with round one', () => {
    expect(game.currentRound).to.equal(1);
  });

  it.skip('should be able to start the game', () => {
    const beginning = game.start();

    expect(beginning).to.be.a('function');
  });

  it.skip('should create a set of cards for the game', () => {
    
  });
});
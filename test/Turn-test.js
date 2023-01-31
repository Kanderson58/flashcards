const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let currentCard;
  let firstTurn;
  let secondTurn;

  beforeEach(() => {
    currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    firstTurn = new Turn('object', currentCard);
    secondTurn = new Turn('array', currentCard);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
  // should be an instance of Turn
  it('should hold a user guess and current card', () => {
    expect(firstTurn.guess).to.equal('object');
    expect(firstTurn.currentCard.id).to.equal(1);
  });

  it('should be able to return the guess', () => {
    const currentGuess = firstTurn.returnGuess();
    
    expect(currentGuess).to.equal('object');
  });

  it('should be able to return the card', () => {
    const play = firstTurn.returnCard();
    
    expect(play).to.equal(currentCard);
  });

  it('should check if guess is correct', () => {
    const firstGuess = firstTurn.evaluateGuess();
    const secondGuess = secondTurn.evaluateGuess();

    expect(firstGuess).to.equal(true);
    expect(secondGuess).to.equal(false);
  });

  it('should give feedback', () => {
    firstTurn.evaluateGuess();
    secondTurn.evaluateGuess();

    const firstGuess = firstTurn.giveFeedback();
    const secondGuess = secondTurn.giveFeedback();

    expect(firstGuess).to.equal('Correct!');
    expect(secondGuess).to.equal('Incorrect!');
  });
});
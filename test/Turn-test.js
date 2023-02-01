const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Turn', () => {
  let currentCard;
  let firstTurn;
  let secondTurn;

  beforeEach(() => {
    const newDeck = prototypeQuestions.map(question => {
      let newCard = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return newCard;
    });
    currentCard = newDeck[0]
    firstTurn = new Turn('object', currentCard);
    secondTurn = new Turn('array', currentCard);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(firstTurn).to.be.an.instanceOf(Turn);
    expect(secondTurn).to.be.an.instanceOf(Turn);
  });

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

    expect(firstGuess).to.equal('correct!');
    expect(secondGuess).to.equal('incorrect!');
  });
});
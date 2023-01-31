const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should hold a user guess and current card', () => {
    const currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const currentTurn = new Turn('sea otter', currentCard);

    expect(currentTurn.guess).to.equal('sea otter');
    expect(currentTurn.currentCard.id).to.equal(1);
  });

  it('should be able to return the guess', () => {
    const currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const currentTurn = new Turn('sea otter', currentCard);

    const currentGuess = currentTurn.returnGuess();
    
    expect(currentGuess).to.equal(currentTurn.guess);
  });

  it('should be able to return the card', () => {
    const currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const currentTurn = new Turn('sea otter', currentCard);

    const play = currentTurn.returnCard();
    
    expect(play).to.equal(currentTurn.currentCard);
  });

  it('should check if guess is correct', () => {
    const currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const firstTurn = new Turn('sea otter', currentCard);
    const secondTurn = new Turn('pug', currentCard);

    const firstGuess = firstTurn.evaluateGuess();
    const secondGuess = secondTurn.evaluateGuess();

    expect(firstGuess).to.equal(true);
    expect(secondGuess).to.equal(false);
  });

  it('should give feedback', () => {
    const currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const firstTurn = new Turn('sea otter', currentCard);
    const secondTurn = new Turn('pug', currentCard);

    const firstTry = firstTurn.evaluateGuess();
    const secondTry = secondTurn.evaluateGuess();

    const firstGuess = firstTurn.giveFeedback();
    const secondGuess = secondTurn.giveFeedback();

    expect(firstGuess).to.equal('Correct!');
    expect(secondGuess).to.equal('Incorrect!');
  });
});
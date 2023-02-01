const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  let currentRound, deck;

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
    currentRound.takeTurn('object');
    currentRound.takeTurn('callback function');

    expect(currentRound.turns).to.equal(2);

    currentRound.takeTurn('the accumulator');

    expect(currentRound.turns).to.equal(3);
  });

  it('should update current card after turn is taken', () => {
    let currentCard = currentRound.returnCurrentCard();

    expect(currentCard.id).to.equal(1);

    currentRound.takeTurn('object');
    currentRound.takeTurn('callback function');

    currentCard = currentRound.returnCurrentCard();

    expect(currentCard.id).to.equal(3);
  });

  it('should instantiate a turn when a guess is given', () => {
    currentRound.takeTurn();

    expect(currentRound.currentTurn).to.be.an.instanceOf(Turn);
  });

  it('should evaluate the guess and return if it is correct', () => {
    currentRound.takeTurn('object');

    expect(currentRound.correctAnswers).to.equal(1);
    expect(currentRound.incorrectAnswers.length).to.equal(0);

    currentRound.takeTurn('current element');

    expect(currentRound.correctAnswers).to.equal(1);
    expect(currentRound.incorrectAnswers.length).to.equal(1);

    currentRound.takeTurn('callback function');

    expect(currentRound.correctAnswers).to.equal(2);
    expect(currentRound.incorrectAnswers.length).to.equal(1);
  });

  it('should give feedback for guesses', () => {
    let feedback = currentRound.takeTurn('object');
    
    expect(feedback).to.equal('Correct!')
    
    feedback = currentRound.takeTurn('current element');

    expect(feedback).to.equal('Incorrect!')
  })

  it('should calculate the percentage of correct guesses', () => {
    currentRound.takeTurn('object');
    currentRound.takeTurn('current element');
    currentRound.takeTurn('callback function');
    currentRound.takeTurn('the accumulator');
    const winPercent = currentRound.calculatePercentageCorrect();

    expect(winPercent).to.equal('75%');
  });

  it('should be able to end the round', () => {
    currentRound.takeTurn('array');
    currentRound.takeTurn('object');
    currentRound.takeTurn('current element');
    currentRound.takeTurn('callback function');
    currentRound.takeTurn('the accumulator');
    const endGame = currentRound.endRound();

    expect(endGame).to.equal('** Round over! ** You answered 60% of the questions correctly!');
  });

  it('should be able to get a perfect score', () => {
    currentRound.takeTurn('object');
    currentRound.takeTurn('callback function');
    currentRound.takeTurn('the accumulator');

    const endGame = currentRound.endRound();

    expect(endGame).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });

  it('should be able to have a failing score', () => {
    currentRound.takeTurn('array');
    currentRound.takeTurn('function');
    const endGame = currentRound.endRound();

    expect(endGame).to.equal('** Round over! ** You answered 0% of the questions correctly!');
  });
});
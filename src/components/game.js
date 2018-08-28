import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    }
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({feedback: 'Invalid number'});
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'Very Cold';
    }
    else if (difference >= 40) {
      feedback = 'Cold';
    }
    else if (difference >= 30) {
      feedback = 'Slightly Cold';
    }
    else if (difference >= 20) {
      feedback = 'Slightly Warm';
    }
    else if (difference >= 10) {
      feedback = 'Warm';
    }
    else if (difference >= 5) {
      feedback = 'Very Warm';
    }
    else if (difference >= 3) {
      feedback = 'Slightly Hot';
    }
    else if (difference >= 2) {
      feedback = 'Hot';
    }
    else if (difference >= 1) {
      feedback = 'Very Hot';
    }
    else {
      feedback = 'You are correct';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }

  render() {
    const {feedback, guesses} = this.state;
    const guessCount = guesses.length;

    return (
      <div className='game-wrapper'>
        <Header
          onRestartGame={() => this.restartGame()}
        />
        <main>
          <GuessSection 
            feedback = {feedback}
            guessCount = {guessCount}
            onMakeGuess = {guess => this.makeGuess(guess)}
          />
          <StatusSection 
            guesses = {guesses}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}
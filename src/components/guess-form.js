import React from 'react';

export default class GuessFrom extends React.Component {
  onSubmit (e) {
    e.preventDefault();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit = {e => this.onSubmit(e)}>
        <input 
        type='number'
        name='userGuess'
        id='userGuess'
        className='text'
        min='1'
        max='100'
        ref={input => (this.input = input)}
        required
      />
      <button type='submit' name='submit'>
      Guess
      </button>
      </form>
    )
  }
}
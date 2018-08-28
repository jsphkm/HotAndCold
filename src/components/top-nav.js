import React from 'react';

export default function TopNav(props) {
  return (
    <nav>
      <ul>
        <li>
          <a href='#instructions'>Instructions</a>
        </li>
        <li>
          <a 
          href='#restart'
          onClick={() => props.onRestartGame()}
          >
          New Game
          </a>
        </li>
      </ul>
    </nav>
  )
}
import React from 'react';

export default function InfoSection(props) {
  return (
    <section>
      <h2>Instructions</h2>
      <ul>
        <li>A random number between 1 to 100 will be chosen</li>
        <li>You should guess a whole integer</li>
        <li>Feedbacks are "hot" and "cold"</li>
      </ul>
    </section>
  );
}
import React from "react";
import Guess from "../Guess";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guess, index) => (
        <Guess key={index} word={guess}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;

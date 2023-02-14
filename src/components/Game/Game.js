import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function addNewGuess(newGuess) {
    if (guessResults.length + 1 > NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuessResults([...guessResults, newGuess]);
  }
  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer}></GuessResults>
      <GuessInput addNewGuess={addNewGuess}></GuessInput>
    </>
  );
}

export default Game;

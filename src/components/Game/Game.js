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
  const [guessResults, setGuessResults] = React.useState(["   ", ""]);
  function addNewGuess(newGuess) {
    setGuessResults([...guessResults, newGuess]);
  }
  return (
    <>
      <GuessResults guessResults={guessResults}></GuessResults>
      <GuessInput addNewGuess={addNewGuess}></GuessInput>
    </>
  );
}

export default Game;

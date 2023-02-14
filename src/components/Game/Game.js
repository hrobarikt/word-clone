import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED)
  );
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);

  function addNewGuess(newGuess) {
    if (numOfGuesses + 1 > NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    const nextGuessResults = [...guessResults];
    nextGuessResults[numOfGuesses] = newGuess;
    setNumOfGuesses(numOfGuesses + 1);
    setGuessResults(nextGuessResults);
  }
  return (
    <>
      <GuessResults guessResults={guessResults}></GuessResults>
      <GuessInput addNewGuess={addNewGuess}></GuessInput>
    </>
  );
}

export default Game;

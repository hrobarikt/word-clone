import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameWonBanner from "../GameWonBanner";
import GameLostBanner from "../GameLostBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function addNewGuess(newGuess) {
    const nextGuesses = [...guessResults, newGuess];
    setGuessResults(nextGuesses);

    if (newGuess === answer) {
      setGameStatus("won");
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer}></GuessResults>
      <GuessInput
        addNewGuess={addNewGuess}
        gameStatus={gameStatus}
      ></GuessInput>
      {gameStatus === "won" && (
        <GameWonBanner numOfGuessess={guessResults.length}></GameWonBanner>
      )}
      {gameStatus === "lost" && (
        <GameLostBanner answer={answer}></GameLostBanner>
      )}
    </>
  );
}

export default Game;

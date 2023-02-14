import React from "react";

function GuessInput({ addNewGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");
  function submitHandler(event) {
    event.preventDefault();
    addNewGuess(guess);
    console.log({ guess });
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        disabled={gameStatus !== "running"}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();
          setGuess(newGuess);
        }}
        maxLength={5}
        minLength={5}
      />
    </form>
  );
}

export default GuessInput;

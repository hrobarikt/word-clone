import React from "react";

function GuessInput({ addNewGuess }) {
  const [guess, setGuess] = React.useState("");
  function submitHandler(event) {
    event.preventDefault();
    addNewGuess(guess);
    setGuess("");
    console.log({ guess });
  }

  function removeUnwantedChars(str) {
    if (typeof str !== "string") {
      return;
    }
    return str.replace(/[^A-Z]/g, "");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const newGuess = removeUnwantedChars(
            event.target.value.toUpperCase()
          );
          setGuess(newGuess);
        }}
        minLength="5"
        maxLength="5"
      />
    </form>
  );
}

export default GuessInput;

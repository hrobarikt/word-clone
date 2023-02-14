import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          className={`cell ${word ? result[index].status : ""}`}
          key={index}
        >
          {word ? word[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

import React from "react";

function Guess({ word }) {
  return (
    <p className="guess">
      {word.split("").map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

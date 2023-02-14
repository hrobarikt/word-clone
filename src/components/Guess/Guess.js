import React from "react";

import { range } from "../../utils";

function Guess({ word }) {
  const cells = range(5);

  return (
    <p className="guess">
      {cells.map((index) => (
        <span className="cell" key={index}>
          {word[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;

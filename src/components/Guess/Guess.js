import React from "react";
import { range } from "../../utils";

function Guess({ letters }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          className={`cell ${letters ? letters[index].status : ""}`}
          key={index}
        >
          {letters ? letters[index].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

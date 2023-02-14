import React from "react";
import Banner from "../Banner/Banner";

function GameWonBanner({ numOfGuessess }) {
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in {""}
        <strong>
          {numOfGuessess === 1 ? "1 guess" : `${numOfGuessess} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default GameWonBanner;

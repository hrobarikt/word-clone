import React from "react";
import Banner from "../Banner/Banner";

function GameLostBanner({ answer }) {
  return (
    <Banner type="sad">
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    </Banner>
  );
}

export default GameLostBanner;

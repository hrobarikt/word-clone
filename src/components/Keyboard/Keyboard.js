import React from "react";

const KEY_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];
function Keyboard({ validatedGuesses }) {
  const letterStatusMap = {};
  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      letterStatusMap[letter] = status;
    });
  });

  return (
    <div className="keyboard">
      {KEY_ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div key={letter} className={`letter ${letterStatusMap[letter]}`}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

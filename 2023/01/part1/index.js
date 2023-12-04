const { readFileSync } = require('node:fs');

(() => {

  // We are going to read the puzzle file.
  const fileContents = readFileSync('./puzzle.txt', 'utf8');
  const lines = fileContents.split('\n');

  let calibrationValues = 0;

  for (const line of lines) {
    // We are going to split the line into characters.
    // We will then filter all the non-numbers out.
    const foundNumbers = line.split('').filter((char) => !isNaN(char));
    const first = foundNumbers[0];
    const last = foundNumbers.at(-1);
    calibrationValues += +([first, foundNumbers.length === 0 ? first : last].join(''));
  }

  console.log({ calibrationValues })

})();

const { readFileSync } = require('node:fs');

(() => {
  const fileContents = readFileSync('./puzzle.txt', 'utf8');
  const lines = fileContents.split('\n');

  const knownWords = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ]

  let calibration = 0;
  // We are going to loop through each line.
  // We are then going to split the line into words.
  // We are going to loop through each word.
  // A word will be anything up to a number. We will then check if the word is a number.
  // If it is, we will put that into another array, which we will then use to determine the first and last.
  for (let line of lines) {
    // we are going to loop the line and replace all the knownWords with
    // and equivalent of `{first_char}NUMBER{last_char}` to avoid breaking other numbers.
    for (let word of knownWords) {
      line = line.replaceAll(word, `${word[0]}${knownWords.indexOf(word) + 1}${word.at(-1)}`);
    }

    // We are now just going to rip all the numbers.
    const numbers = line.split("").filter(char => !isNaN(char))
    console.log({ numbers })
    const first = numbers[0];
    const last = numbers.at(-1);

    calibration += +([first, numbers.length === 0 ? first : last].join(""));
  }

  console.log({ calibration })
})();

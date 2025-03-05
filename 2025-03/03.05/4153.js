const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split('\n');

function solution() {
  const numberArray = stdin.map((numbers) =>
    numbers.split(' ').map((number) => Number(number))
  );

  numberArray.forEach((numbers) => {
    if (numbers.some((number) => number === 0)) return;
    numbers.sort((a, b) => a - b);
    if (
      Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2) ===
      Math.pow(numbers[2], 2)
    ) {
      console.log('right');
    } else {
      console.log('wrong');
    }
    return;
  });
}

solution();

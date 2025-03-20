const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const scores = input[1].split(' ').map(Number);

const maxScore = Math.max(...scores);

const newScores = scores.map((score) => (score / maxScore) * 100);
const sum = newScores.reduce((acc, cur) => {
  const results = acc + cur;
  return results;
}, 0);

const newAverage = sum / newScores.length;

console.log(newAverage);

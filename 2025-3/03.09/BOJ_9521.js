const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

function solution(inputs) {
  const [str1, str2] = inputs;

  const dp = Array.from(Array(str1.length + 1), () =>
    Array(str2.length + 1).fill(0)
  );

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp[str1.length][str2.length]);
}

solution(inputs);

/* ========================================================================= */

function solution2(inputs) {
  const [str1, str2] = inputs;

  const dp = new Array(str1.length + 1).fill(0);

  for (ch of str2) {
    let prevNum = 0;
    let curNum = 0;

    for (let j = 1; j < dp.length; j++) {
      curNum = dp[j];

      if (ch === str1[j - 1]) dp[j] = prevNum + 1;
      else dp[j] = Math.max(dp[j], dp[j - 1]);

      prevNum = curNum;
    }
  }
  console.log(dp[dp.length - 1]);
}

solution2(inputs);

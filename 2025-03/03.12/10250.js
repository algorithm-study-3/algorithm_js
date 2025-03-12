const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const iter = parseInt(input[0]);

for (let i = 0; i < iter; i++) {
  let data = input[i + 1].split(' ');

  let floor = Number(data[0]);
  let room = Number(data[1]);
  let guestNum = Number(data[2]);

  let guestFloor = guestNum % floor === 0 ? floor : guestNum % floor;

  let roomNum = Math.ceil(guestNum / floor);

  if (roomNum >= 10) {
    console.log(`${guestFloor}${roomNum}`);
  } else {
    console.log(`${guestFloor}0${roomNum}`);
  }
}

// TO FIND Non-negative Integers without Consecutive Ones
let result = 0;

const findConsecutive = (number) => {
  let prevnum = "";
  for (let num in number) {
    if (number[num] === prevnum && parseInt(number[num]) > 0) {
      return true;
    }
    prevnum = number[num];
  }
  return false;
};

const converttobinary = (num) => {
  if (num < 0) {
    num = 0xffffffff + num + 1;
  }
  return parseInt(num, 10).toString(2);
};
const findIntegers = (n) => {
  if (1 <= n <= Math.pow(10, 9)) {
    for (let x = 0; x <= n; ++x) {
      let conv = converttobinary(x);
      let test1 = findConsecutive(conv);
      if (!test1) {
        result++;
      }
    }

    return result;
  } else {
    return 0;
  }
};
console.log(findIntegers(10000000));

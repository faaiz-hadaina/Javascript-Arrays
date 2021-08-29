var isThree = function (n) {
  let count = 0;
  for (x = 1; x < n + 1; x++) {
    if (n % x == 0) {
      count++;
    }
  }
  return count === 3;
};
console.log(isThree(4));

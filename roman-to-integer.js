var romanToInt = function (s) {
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  if (s.length < 1 || s.length > 15) return -1;
  for (let x = 0; x < s.length; x++) {
    if (roman[s[x + 1]] > roman[s[x]]) {
      result -= roman[s[x]];
    } else {
      result += roman[s[x]];
    }
  }

  return result;
};

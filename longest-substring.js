const s1 = 'abcabcbb';

var lengthOfLongestSubstring = function (s) {
  let result = [];
  let temp = '';
  if (s == '') return 0;
  while (s.length > 0) {
    for (char of s) {
      if (temp.includes(char)) {
        result.push(temp.length);
        temp = '';
        s = s.substring(1);
        break;
      } else {
        temp += char;
      }
    }
  }
  return Math.max.apply(null, result);
};
console.log(lengthOfLongestSubstring(s1));

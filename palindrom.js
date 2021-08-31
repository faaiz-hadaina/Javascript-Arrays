var isPalindrome = function (x) {
  let a = `${x}`;
  return x == a.split('').reverse().join('');
};
console.log(isPalindrome('madam'));

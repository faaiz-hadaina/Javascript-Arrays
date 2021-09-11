var longestCommonPrefix = function (strs) {
  let result = '';
  //  console.log(strs[0])
  for (let x = 0; x < strs[0].length; x++) {
    for (word of strs) {
      //  console.log(word)
      if (word.length < x || word.charAt(x) != strs[0].charAt(x)) return result;
    }
    result = result + word.charAt(x);
  }

  return result;
};

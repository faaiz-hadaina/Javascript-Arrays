var isValid = function (s) {
  let stack = [];
  const closeInput = { ')': '(', '}': '{', ']': '[' };

  for (chars of s) {
    if (chars in closeInput) {
      if (stack && stack[stack.length - 1] == closeInput[chars]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(chars);
    }
  }
  if (stack.length <= 0) {
    return true;
  } else {
    return false;
  }
};

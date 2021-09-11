let arr = [10, 15, 3, 7];
function find2numbers(a, k) {
  for (let x = 0; x < a.length; x++) {
    const missing = k - a[x];
    if (arr.indexOf(missing) != -1) {
      return true;
    }
  }
  return false;
}
console.log(find2numbers(arr, 17));

const a = [1, 2, 3, 4, 5];
function rotateArray(n, a) {
  const b = a.splice(0, n);
  const c = [...a, ...b];
  return c.join(' ');
}
console.log(rotateArray(4, a));
 
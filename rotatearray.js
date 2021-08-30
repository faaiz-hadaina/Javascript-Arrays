// const a = [1, 2, 3, 4, 5];
// function rotateArray(n, a) {
//   const b = a.splice(0, n);
//   const c = [...a, ...b];
//   return c.join(' ');
// }
// console.log(rotateArray(4, a));

//While loop checking

// let num = 11;
// let x = 1;
// let result = 0;
// while (x < 11) {
//   result += x;
//   x++;
// }
// console.log(result);

//Recursion

function factorial(num) {
  if (num == 1) {
    return num;
  } else {
    result = num * factorial(num - 1);
    console.log(result);
    return result;
  }
}
factorial(5);

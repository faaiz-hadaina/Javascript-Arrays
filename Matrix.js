// Array.matrix = function (rows, cols, initial) {
//   var arr = [];
//   for (let i = 0; i < rows; i++) {
//     var column = [];
//     for (let j = 0; j < cols; j++) {
//       column[j] = initial;
//     }
//     arr[i] = column;
//   }
//   return arr;
// };

// var nums = Array.matrix(5, 5, 0);
// //nums[2][3] = 5;
// console.log(nums);

// var grades = [
//   [1, 2, 3],
//   [3, 82, 81],
//   [3, 94, 89]
// ];

// var total = 0;
// var average = 0.0;

// for (var col = 0; col < grades.length; col++) {
//   for (var row = 0; row < grades[col].length; row++) {
//     total += grades[row][col];
//   }
//   average = total; // grades[row].length;
//   console.log(
//     'Student ' + parseInt(col + 1) + ' average: ' + average.toFixed(2)
//   );
//   total = 0;
//   average = 0.0;
// }
// console.log(`${3} "${typeof 3}"`); // 3 "number"
// console.log(`"${'a'}" "${typeof 'a'}"`); // "a" "string"
// console.log(`${2} "${typeof 2}"`, `"${'a'}" "${typeof 'a'}"`); // 2 "number" "a" "string"
const allNumbers = new Set();
function getUniqueSortedNumbers(arr) {
  for (words in arr) {
    if (typeof arr[words] === 'number') {
      allNumbers.add(arr[words]);
    }
    getUniqueSortedNumbers(arr[words]);
  }
  return Array.from(allNumbers).sort();
}
console.log(
  getUniqueSortedNumbers({
    a: {
      x: 3,
      y: {
        d: 2,
        e: 2,
        f: {
          g: 4
        },
        z: 8
      }
    }
  })
); // [2, 3, 4, 8];

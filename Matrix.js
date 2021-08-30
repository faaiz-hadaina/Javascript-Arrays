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
// nums[2][3] = 5;
// console.log(nums);

var grades = [
  [1, 2, 3],
  [3, 82, 81],
  [3, 94, 89]
];

var total = 0;
var average = 0.0;

for (var col = 0; col < grades.length; col++) {
  for (var row = 0; row < grades[col].length; row++) {
    total += grades[row][col];
  }
  average = total; // grades[row].length;
  console.log(
    'Student ' + parseInt(col + 1) + ' average: ' + average.toFixed(2)
  );
  total = 0;
  average = 0.0;
}

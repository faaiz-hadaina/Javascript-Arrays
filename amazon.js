// function getUniqueCharacter(s) {
//   // Write your code here
//   let objMap = {};
//   if (s.length < 1 || s.length > Math.pow(10, 5)) {
//     return -1;
//   }

//   for (let x = 0; x < s.length; x++) {
//     if (s.charAt(x) == s.charAt(x).toUpperCase()) {
//       return -1;
//     }
//     objMap[s.charAt(x)] != undefined
//       ? (objMap[s.charAt(x)] = parseInt(objMap[s.charAt(x)]) + 1)
//       : (objMap[s.charAt(x)] = 1);
//   }
//   const result = 0;
//   let index = 0;
//   let found = false;
//   for (obj in objMap) {
//     if (objMap[obj] == 1) {
//       found = true;
//       break;
//     }
//     index++;
//   }
//   if (found) {
//     return index + 1;
//   } else {
//     return -1;
//   }
// }

function modifyArray(arr) {
  // Write your code here
  let previousvalue = 0;
  arr.sort((a, b) => a - b);
  let sortEngine = {};
  console.log(arr);
  for (let item in arr) {
    // console.log(item);
    if (sortEngine[arr[item]] !== undefined) {
      sortEngine[arr[item]] = parseInt(sortEngine[arr[item]]) + 1;
    } else {
      sortEngine[arr[item]] = 1;
    }
  }
  for (let num in sortEngine) {
    if (sortEngine[num] >= 2) {
    }
  }
}

console.log(modifyArray([6, 9, 8, 7, 2, 3, 3]));

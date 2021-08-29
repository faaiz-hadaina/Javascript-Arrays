// const companies = [
//   { name: 'Haifx', category: 'ICT', year: '2010' },
//   { name: '7thTower', category: 'ICT', year: '2020' },
//   { name: 'Meed', category: 'ICT', year: '2000' },
//   { name: 'Qiswah', category: 'Printing', year: '2010' },
//   { name: 'Examian', category: 'ICT', year: '2018' },
//   { name: 'Edperfect', category: 'ICT', year: '2006' },
//   { name: 'PrintForte', category: 'Printing', year: '2014' }
// ];

//const company2010 =

// const { name, category } = companies[0];
// console.log(category);
// let fruits = ["Apple", "Banana"];

// console.log(fruits.length);
// // 2
// fruits.forEach((fruit, index) => {
//   console.log(`${fruit} ${index}`);
// });

// const newcompanies = [...companies];

// console.log(companies.at(0));
// const array1 = [5, 12, 8, 130, 44];

// array1.shift();
// //console.log(array1);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// // Concatenate (join) myGirls and myBoys
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits[0]);
// fruits.reverse();
// console.log(fruits[0]);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a);
// console.log(points);

// const points = [40, 100, 1, 5, 25, 10];

// const arr = Math.max.apply(()null, points);
// console.log(arr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (let x of fruits) {
//   console.log(x);
// }
//const words = ["ball", "area", "lead", "lady"];

// let test2 = [];
// let result = false;

// for (let word of words) {

//   let newword = "";
//   for (let x = 0; x < word.length; x++) {
//     //     console.log(x);
//     for (let word2 of words) {
//       newword += word.charAt(x);
//     }

//     //     // if (test2 !== test1) {
//     //     //   result = false;
//     //     //   break;
//     //     // }
//     //     // result = true;
//   }
//   test2.push(newword);
// }
// console.log(test2);
//console.log(result);
// let result = null;
// let test1 = "";
// let test2 = "";

// for (let word of words) {
//   console.log(word);
//   test1 = word;
//   //
//   let newtest = "";

//   for (let x = 0; x < word.length; x++) {
//     for (let word2 of words) {
//       newtest += word2.charAt(x);
//     }
//     // if (test1 === test2) {
//     //   result = true;
//     // } else {
//     //   result = false;
//     // }
//     console.log(test1 + " and " + test2);
//   }
//   test2 = newtest;

//   // test = "";
//   //   if (word === test) {
//   //     result = true;
//   //   } else {
//   //     result = false;
//   //   }
// }
// console.log(result);
// // console.log(newwords);
//const arr = ["ball", "area", "lead", "lady"];
// const arr = ["abcd", "bnrt", "crm", "dt"];
// const findValidSquares = (arr = []) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (
//         i >= arr.length ||
//         j >= arr.length ||
//         j >= arr[i].length ||
//         i >= arr[j].length
//       ) {
//         return false;
//       }
//       if (arr[i][j] !== arr[j][i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// console.log(findValidSquares(arr));
// const aut = "ball";
// for (let char of aut) {
//   console.log(char);
// }
// Array.prototype.wale = true;

// for (word in arr) {
//   if (arr.hasOwnProperty(word)) console.log(word);
// }
// const arr = ["ball", "area", "lead", "lady"];
// let word = "";
// let result;
// for (let x = 0; x < arr.length; x++) {
//   for (let u = 0; u < arr[x].length; ++u) {
//     word += arr[u].charAt(x);
//   }
//   if (arr[x] !== word) {
//     result = false;
//     break;
//   }
//   word = "";
//   result = true;
// }
// console.log(result);

// const str =
//   "Hardships often prepare ordinary people for an extraordinary destiny";
// const result = [];
// function findShortestString(str) {
//   let words = str.split(" ");
//   const wordArray = words.map((word) => {
//     return { word: word, length: word.length };
//   });
//   const sorted = wordArray.sort((a, b) => a.length - b.length);
//   result.push(sorted[0].word);
//   sorted.reverse();
//   result.push(sorted[0].word);
//   console.log(result);
// }
// findShortestString(str);

// const str = "This is a sample string";
// const findSmallest = (str) => {
//   const strArr = str.split(" ");
//   const creds = strArr.reduce(
//     (acc, val) => {
//       let { length, word } = acc;
//       console.log(val + " " + length);
//       //   if (val.length < length) {
//       //     length = val.length;
//       //     word = val;
//       //   }
//       return { length, word };
//     },
//     {
//       length: Infinity,
//       word: "",
//     }
//   );
//   return creds.word;
// };
// console.log(findSmallest(str));

// const countOccurrences = (arr, val) =>
//   arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// for (let x = 1; x < arr.lenth)

// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));

// const arr = [2, 2, 3, 3];
// const obj = [];
// for (let x = 0; x < arr.length; x++) {
//   const newarray = arr.filter((num) => num === arr[x]);
//   if (arr[x] === newarray.length) {
//     obj.push({ number: arr[x], freq: newarray.length });
//     obj.sort((a, b) => b.freq - a.freq);
//     console.log(obj);
//   }
// }
// if (obj.length > 0) {
//   console.log(obj[0].number);
// } else {
//   console.log(-1);
// }
// const array = [
//   [2],
//   [3],
//   [4],
//   [5],
//   [6],
//   [7],
//   [2],
//   [4],
//   [2],
//   [5],
//   [2],
//   [4],
//   [3],
//   [6],
//   [2],
//   [3]
// ];
// const newarray = [];
// for (x = 0; x < array.length; x++) {
//   if (newarray.includes(array[x]) === false) newarray.push(array[x]);
// }
// console.log(newarray);

// const x = [2];
// const y = [2];

// function arrayEquals(a, b) {
//   return (
//     Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index])
//   );
// }
// if (arrayEquals(x, y)) {
//   console.log('true');
// } else {
//   console.log('false');
// }

//https://api.2vendors.com/assets/images/categories/

let expense = [2200, 2350, 2600, 2130, 2190];
function getExtra(array) {
  let extra = array[1] - array[0];
  return extra;
}
//console.log(getExtra(expense));

function totalFirstQuarter(array) {
  let total = 0;
  for (let x = 0; x < 3; x++) {
    total += array[x];
  }
  return total;
}
// console.log(totalFirstQuarter(expense));

function findExact(array) {
  if (array.includes(2000)) {
    return true;
  } else {
    return false;
  }
}
//console.log(findExact(expense));

function addNew(array, newitem) {
  array.push(newitem);
  // return array;
}
addNew(expense, 1980);
//console.log(expense);

function refund(array, change) {
  let newAmount = array[3] - change;
  array[3] = newAmount;
}
//refund(expense, 200);
//console.log(expense);

const heros = ['spider man', 'thor', 'hulk', 'iron man', 'captain america'];

function findLength(array) {
  return array.length;
}
//console.log(findLength(heros));

function addPanther(array, newitem) {
  array.push(newitem);
  return array;
}
//console.log(addPanther(heros, 'black panther'));

function addPantherAfter(array, newitem) {
  array.pop();
  array.splice(3, 0, newitem);
  return array;
}
//console.log(addPantherAfter(heros, 'black panther'));

function removeAngry(array, replacement) {
  array.splice(1, 2, replacement);
  return array;
}
//console.log(removeAngry(heros, 'doctor strange'));

function sortItems(array) {
  array.sort();
  return array;
}
//console.log(sortItems(heros));

function generateOddnumbers(n) {
  for (let x = 0; x < n; x++) {
    if (x % 2 != 0) console.log(x);
  }
}
generateOddnumbers(10);

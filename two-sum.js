// var twoSum = function (nums, target) {
//   let total = 0;
//   for (x = 0; x < nums.length; x++) {
//     console.log(nums[x]);
//     for (r = 0; r < nums.length; r++) {
//       if (x != r) {
//         total = nums[x] + nums[r];
//         if (total == target) {
//           return [x, r];
//         }
//       }
//     }
//   }
// };
// console.log(twoSum([3, 2, 4], 6));
// var languages = ['java', 'ppp', 'type'];
// languages.length = 0;
// languages.push('golang');
// console.log(languages);
// console.log(Number('10') - 10 == 0);
// var index = 1,
//   count = {};
// count: {
//   begin: 2;
//   baz: ++index;
// }
// count.begin + count.index + index;
// const a = [1, 2];
// a[0] = 10;
// a[1] = 20;
// a[2] = 30;
// console.log(a);
//Object.defineProperty(obj, 'prop', {wrt})

// let arr = [1, 2];
// arr.ade = true;

// for (x of arr) {
//   console.log(x);
// }

// function* gen1() {
//   console.log(yield 1);
//   console.log(yield 2);
//   console.log(yield 3);
// }

// const ite = gen1();

// // console.log(ite.next('a').value);
// // console.log(ite.next('b').value);
// // console.log(ite.next('c').value);

// const arr = new Array(2);

// arr[1] = 1;
// arr[3] = 3;

// console.log('Length:', arr.length);
// console.log('Elements:');

// for (const element of arr) {
//   console.log('\t', element);
// }

// async function apiCall() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('b');
//     }, 50);
//   });
// }
// async function logger() {
//   setTimeout(() => console.log('a'), 10);
//   console.log(await apiCall());
//   console.log('c');
// }

// logger();
// function recurFib(n) {
//   return n < 2 ? n : recurFib(n - 1) + recurFib(n - 2);
// }
// console.log(recurFib(10));

const result = 123 % 10;
console.log(result);
let rev = 0;
rev = rev * 10 + result;
console.log(rev);

const result2 = Math.floor(123 / 10);
console.log(result2);
const max = Number.MAX_VALUE;
console.log(max / 10);

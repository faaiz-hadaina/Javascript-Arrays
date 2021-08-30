//const arrobj = { 2: 'Ade', 1: 'Shola' };
// arrobj.set(2, 'Ade');
// arrobj.set(3, 'Shola');
// console.log(Object.keys(arrobj).map((x) => Number(x)));
// const arr = [4, 6, 7, 2, 8, 2, 3, 6, 2];
// console.log(
//   Math.max.apply(
//     {},
//     Object.keys(arrobj).map((x) => Number(x))
//   )
// );

//console.log(());
// var nums = [2, 3, 4, 5];
// var newnum = 1;
// nums.unshift(newnum);

// nums = [3, 4, 5];
// nums.unshift(1, 2);
// console.log(nums); // 1,2,3,4,5

const words = ['Monday', 'Moon', 'Moongate', 'Montain'];
const search = words.filter((x) => x.startsWith('Re'));
console.log(search);

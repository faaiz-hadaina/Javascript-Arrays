const companies = [
  { name: "Haifx", category: "ICT", year: "2010" },
  { name: "7thTower", category: "ICT", year: "2020" },
  { name: "Meed", category: "ICT", year: "2000" },
  { name: "Qiswah", category: "Printing", year: "2010" },
  { name: "Examian", category: "ICT", year: "2018" },
  { name: "Edperfect", category: "ICT", year: "2006" },
  { name: "PrintForte", category: "Printing", year: "2014" },
];

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

const points = [40, 100, 1, 5, 25, 10];

const arr = Math.max.apply(null, points);
console.log(arr);

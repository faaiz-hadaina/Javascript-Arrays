const arr = [1, 2, 3, 4, 5];

function getProducts(a) {
  const result = [];
  for (let x = 0; x < arr.length; x++) {
    console.log(arr[x]);
    const final = arr.reduce((total, current) => {
      return arr[x] === current ? total * 1 : total * current;
    });
    result.push(final);
  }
  return result;
}
console.log(getProducts(arr));

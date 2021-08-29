//const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

function sockMerchant(n, ar) {
  let result = 0;
  const mp = new Map();
  ar.reduce((total, item) => mp.set(item, (mp.get(item) || 0) + 1), 1);
  const final = new Map(
    [...mp].sort((a, b) => {
      return String(b[1]).localeCompare(a[1]);
    })
  );
  final.forEach((a, b) => {
    result += parseInt(a / 2);
  });
  return result;
}

console.log(sockMerchant(7, ar));

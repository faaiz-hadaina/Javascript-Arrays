function exampleQuadratic(n) {
  for (x = 0; x < n; x++) {
    console.log(x);
    for (u = x; u < n; u++) {
      console.log(u);
    }
  }
}
//exampleQuadratic(100);

function exampleLogarithmic(n) {
  for (var i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
}
exampleLogarithmic(100000000000000);

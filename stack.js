class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  push(element) {
    this.dataStore[this.top++] = element;
  }
  pop() {
    return this.dataStore[this.top--];
  }
  peek() {
    return this.dataStore[this.top - 1];
  }
  clear() {
    this.top = 0;
  }
  print() {
    console.log(this.dataStore);
  }
  length() {
    return this.top;
  }
}

function mulBase(num, base) {
  const s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);
  let converted = '';
  while (s.length() > 0) {
    console.log(converted);
    converted += s.pop();
  }
  return converted;
}
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(newNum);
//console.log(num + ' converted to base ' + base + ' is ' + newNum);

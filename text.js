// type ColorTuringType = [string, number, number, number]
// let red: ColorTuringType = ['Red', 1, 0, 0]
// let green:  [string, number, number, number] = ['green', 0,1,0]
// let blue = ['blue', 0, 0, 1]
// class TuringQueue<T> {
//     private data = []
//     push = (item: T) => this.data.push(item)
//     pop = (): T => this.data.shift()
//     }
//     const turingQeueu = new TuringQueue<number>()
//     turingQeueu.push(0);
//     turingQeueu.push("1")
// //    console.log(turingQeueu)
// let index1: number = 1;
// function turingTest() {
//   let index2: number = 2;
//   if (index2 > index1) {
//     let index3: number = 3;
//     index3++;
//   }
//   while (index1 < index2) {
//     let index4: number = 4;
//     index1++;
//   }
//   console.log(index1);
//   console.log(index2);
//   console.log(index3);
//   console.log(index4);
// }
// turingTest();
// b: any = [];
// let a = [] + b + 'Turing'.split('');
// console.log(a);
// const x = [1,2,3]
// x[-1] = -1
// consol
function Foo() {
  this.bar = 10;
}
Foo.prototype.bar = 42;
var foo = new Foo();
console.log('1:', foo.bar);
delete foo.bar;
console.log('2:', foo.bar);

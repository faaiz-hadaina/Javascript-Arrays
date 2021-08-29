const { link } = require('fs');
const LinkedList = require('./LinkedList');

//const ll = new LinkedList();

// ll.insertAtHead(18);
// console.log(ll);
// ll.insertAtHead(20);
const ll = LinkedList.fromValues(10, 20);
console.log(ll);

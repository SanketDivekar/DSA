let arr1 = [2, 4, 3];
let arr2 = [5, 6, 9];
class CreateNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkList {
  constructor() {
    this.head = null;
  }
}
let sum = 0;
let curr;
const list = new MyLinkList();

function addNumbers(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    sum = arr1[i] + arr2[i];
    createOutputNode(sum);
  }
}

function createOutputNode(val) {
  let newNode = new CreateNode(val);
  if (!list.head) {
    curr = newNode;
    list.head = curr;
  } else {
    curr.next = newNode;
    curr = curr.next;
  }
}

addNumbers(arr1, arr2);

console.log("Linkedlist is - ");
let currOne = list.head;
while (currOne) {
  console.log(currOne.val);
  currOne = currOne.next;
}

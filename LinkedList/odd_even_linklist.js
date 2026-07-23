// Code to group all odd indexed nodes followed by even indexed nodes in the linklist. Leet code proble no - 328
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

const list = new MyLinkList();

const nodeOne = new CreateNode(2);
const nodeTwo = new CreateNode(1);
const nodeThree = new CreateNode(3);
const nodeFour = new CreateNode(5);
const nodeFive = new CreateNode(6);
const nodeSix = new CreateNode(4);
const nodeSeven = new CreateNode(7);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;
nodeFive.next = nodeSix;
nodeSix.next = nodeSeven;

list.head = nodeOne;

function oddEvenList(head) {
  //check if list is empty or not, if list is empty return head.
  if (!head || !head.next) {
    return head;
  }

  let oddIdxPtr = head;
  let evenIdxPtr = head.next;
  let evenIdxStart = head.next;
  while (oddIdxPtr && evenIdxPtr) {
    oddIdxPtr.next = oddIdxPtr.next.next;
    evenIdxPtr.next = evenIdxPtr.next.next;
    oddIdxPtr = oddIdxPtr.next;
    evenIdxPtr = evenIdxPtr.next;
  }
  oddIdxPtr.next = evenIdxStart;
  return head;
}

console.log("Original list - ");
let curr = list.head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
const result = oddEvenList(list.head);

console.log("List after odd/even grouping - ");

let currTwo = list.head;
while (currTwo) {
  console.log(currTwo.val);
  currTwo = currTwo.next;
}
// Code to find middle of the link list. Leet code problem no - 876

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

const nodeOne = new CreateNode(1);
const nodeTwo = new CreateNode(2);
const nodeThree = new CreateNode(3);
const nodeFour = new CreateNode(4);
const nodeFive = new CreateNode(5);
const nodeSix = new CreateNode(6);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;
nodeFive.next = nodeSix;

list.head = nodeOne;

function findMiddle(head) {
  let ptrOne = head;
  let ptrTwo = head;

  while (ptrTwo != null && ptrTwo.next != null) {
    ptrOne = ptrOne.next;
    ptrTwo = ptrTwo.next.next;
  }
  return ptrOne.val;
}

const result = findMiddle(list.head);
console.log(result);

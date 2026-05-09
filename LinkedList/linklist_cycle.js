// Code to check if the link list has cycle in it or not. Leet code problem no - 141
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

const nodeOne = new CreateNode(3);
const nodeTwo = new CreateNode(2);
const nodeThree = new CreateNode(0);
const nodeFour = new CreateNode(-4);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeTwo;

list.head = nodeOne;

function hasCycle(head) {
  let curr = head;
  let nodesInList = new Set();
  while (curr) {
    if (nodesInList.has(curr)) {
      return true;
    }
    nodesInList.add(curr);
    curr = curr.next;
  }
  return false;
}
const result = hasCycle(list.head);
console.log(result);

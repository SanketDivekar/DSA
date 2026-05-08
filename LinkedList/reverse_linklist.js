// Code to reverse a linked list. Leet code problem no - 206
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

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;

list.head = nodeOne;

function displayList() {
  let curr = list.head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

console.log("List before reverse:");

displayList();

function reverseList(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
}

reverseList(list.head);

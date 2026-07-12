// Code to remove nth node from the end of the linkedlist. Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Leetcode proble no - 19

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

const nodeOne = new CreateNode(6);
const nodeTwo = new CreateNode(6);
const nodeThree = new CreateNode(6);
const nodeFour = new CreateNode(3);
const nodeFive = new CreateNode(4);
const nodeSix = new CreateNode(5);
const nodeSeven = new CreateNode(6);

// create a watcher node(Sentinel node) which always points to head.

let sentinelNode = new CreateNode();

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;
nodeFive.next = nodeSix;
nodeSix.next = nodeSeven;

list.head = nodeOne;

function removeNthFromEnd(head, idx) {
  sentinelNode.next = head;
  let lengthOfList = 0;
  // Find length of linkedlist
  while (head) {
    head = head.next;
    lengthOfList++;
  }

  // Find one position before the given index (find prev node).
  let prevNodeIndex = lengthOfList - idx;

  // create a pointer variable which will track prev node and initially assigned to sentinel node.
  let prev = sentinelNode;

  // move prev to next untill it reaches the one position before the given index.
  for (let i = 0; i < prevNodeIndex; i++) {
    prev = prev.next;
  }

  // point prev.next = prev.next.next to remove linking of prev.next
  prev.next = prev.next.next;

  // return head of the list as sentinel node always points to head of list.
  return sentinelNode.next;
}

console.log("List before deletion - ");
let curr = list.head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
const result = removeNthFromEnd(list.head, 2);

console.log("List after deletion - ");

let currTwo = list.head;
while (currTwo) {
  console.log(currTwo.val);
  currTwo = currTwo.next;
}

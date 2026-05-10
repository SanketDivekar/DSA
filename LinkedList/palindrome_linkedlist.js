// Code to check if the linked list is palindrome list or not. Leetcode problem no - 234

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
const nodeFour = new CreateNode(2);
const nodeFive = new CreateNode(1);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;

list.head = nodeOne;

function isPalindromeList(head) {
  // find middle node of the list
  let slowPtr = head;
  let fastPtr = head;
  while (fastPtr != null && fastPtr.next != null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }
  console.log(slowPtr.val);

  // reverse list from middle node to tail node
  let curr = slowPtr;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // palindrome check
  let start = head;
  while (prev) {
    if (start.val != prev.val) {
      return false;
    }
    start = start.next;
    prev = prev.next;
  }
  return true;
}

const result = isPalindromeList(list.head);
console.log(result);

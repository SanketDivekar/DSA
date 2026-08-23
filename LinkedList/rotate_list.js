// Code to rotate the list by given k places.

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

const listOne = new MyLinkList();

const listOneNodeOne = new CreateNode(1);
const listOneNodeTwo = new CreateNode(2);
const listOneNodeThree = new CreateNode(3);
const listOneNodeFour = new CreateNode(4);
const listOneNodeFive = new CreateNode(5);

listOneNodeOne.next = listOneNodeTwo;
listOneNodeTwo.next = listOneNodeThree;
listOneNodeThree.next = listOneNodeFour;
listOneNodeFour.next = listOneNodeFive;

listOne.head = listOneNodeOne;

function rotateList(head, k) {
  if (!head || !head.next) {
    return head;
  }
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  k = k % length;
  let ptr1 = head;
  let ptr2 = head;
  for (let i = 0; i < k; i++) {
    ptr2 = ptr2.next;
  }
  while (ptr2.next) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  ptr2.next = head;
  let newPtr = ptr1.next;
  ptr1.next = null;

  return newPtr;
}

let current = rotateList(listOne.head, 2);
console.log("List after rotation - ");
while (current) {
  console.log(current.val);
  current = current.next;
}

// Code to merge two sorted linkedlists
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
const listOneNodeThree = new CreateNode(4);

listOneNodeOne.next = listOneNodeTwo;
listOneNodeTwo.next = listOneNodeThree;

listOne.head = listOneNodeOne;

const listTwo = new MyLinkList();
const listTwoNodeOne = new CreateNode(1);
const listTwoNodeTwo = new CreateNode(3);
const listTwoNodeThree = new CreateNode(4);

listTwoNodeOne.next = listTwoNodeTwo;
listTwoNodeTwo.next = listTwoNodeThree;

listTwo.head = listTwoNodeOne;
let sentinal = new CreateNode();
let curr = sentinal;
function mergeTwoLists(headOne, headTwo) {
  if (!headOne) {
    return headTwo;
  }
  if (!headTwo) {
    return headOne;
  }

  while (headOne && headTwo) {
    if (headOne.val < headTwo.val) {
      curr.next = headOne;
      headOne = headOne.next;
    } else {
      curr.next = headTwo;
      headTwo = headTwo.next;
    }
    curr = curr.next;
  }
  if (!headOne) {
    curr.next = headTwo;
  }
  if (!headTwo) {
    curr.next = headOne;
  }
}

console.log("Merged linkedlist is - ");
mergeTwoLists(listOne.head, listTwo.head);
let current = sentinal.next;
while (current) {
  console.log(current.val);
  current = current.next;
}

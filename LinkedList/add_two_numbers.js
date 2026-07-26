// Code to add two node values of link list where two linklist nodes are ordered in reverse.
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

const listOneNodeOne = new CreateNode(3);
const listOneNodeTwo = new CreateNode(4);
const listOneNodeThree = new CreateNode(9);

listOneNodeOne.next = listOneNodeTwo;
listOneNodeTwo.next = listOneNodeThree;

listOne.head = listOneNodeOne;

const listTwo = new MyLinkList();
const listTwoNodeOne = new CreateNode(5);
const listTwoNodeTwo = new CreateNode(6);
const listTwoNodeThree = new CreateNode(3);
// const listTwoNodeFour = new CreateNode(9);

listTwoNodeOne.next = listTwoNodeTwo;
listTwoNodeTwo.next = listTwoNodeThree;
// listTwoNodeThree.next = listTwoNodeFour;

listTwo.head = listTwoNodeOne;

let curr;
let listThree = new MyLinkList();

function addTwoNumbers(headOne, headTwo) {
  let sum = 0;
  let carry = 0;
  let digit = 0;
  while (headOne || headTwo || carry > 0) {
    if (headOne == null) {
      sum = headTwo.val + carry;
      headTwo = headTwo.next;
    } else if (headTwo == null) {
      sum = headOne.val + carry;
      headOne = headOne.next;
    } else if (headOne == null && headTwo == null) {
      sum = carry;
    } else {
      sum = headOne.val + headTwo.val + carry;
      headOne = headOne.next;
      headTwo = headTwo.next;
    }
    carry = Math.floor(sum / 10);
    if (carry > 0) {
      digit = Math.floor(sum % 10);
      createNewNode(digit);
    } else {
      createNewNode(sum);
    }
  }
}

function createNewNode(val) {
  let newNode = new CreateNode(val);
  if (!listThree.head) {
    curr = newNode;
    listThree.head = curr;
  } else {
    curr.next = newNode;
    curr = curr.next;
  }
}

addTwoNumbers(listOne.head, listTwo.head);

let output = listThree.head;
while (output) {
  console.log(output.val);
  output = output.next;
}

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

const listOneNodeOne = new CreateNode(9);
const listOneNodeTwo = new CreateNode(9);
const listOneNodeThree = new CreateNode(9);
const listOneNodeFour = new CreateNode(9);
const listOneNodeFive = new CreateNode(9);
const listOneNodeSix = new CreateNode(9);
const listOneNodeSeven = new CreateNode(9);

listOneNodeOne.next = listOneNodeTwo;
listOneNodeTwo.next = listOneNodeThree;
listOneNodeThree.next = listOneNodeFour;
listOneNodeFour.next = listOneNodeFive;
listOneNodeFive.next = listOneNodeSix;
listOneNodeSix.next = listOneNodeSeven;

listOne.head = listOneNodeOne;

const listTwo = new MyLinkList();
const listTwoNodeOne = new CreateNode(9);
const listTwoNodeTwo = new CreateNode(9);
const listTwoNodeThree = new CreateNode(9);
const listTwoNodeFour = new CreateNode(9);

listTwoNodeOne.next = listTwoNodeTwo;
listTwoNodeTwo.next = listTwoNodeThree;
listTwoNodeThree.next = listTwoNodeFour;

listTwo.head = listTwoNodeOne;

let curr;
let sentinel = new CreateNode();
let listThree = new MyLinkList();

function addTwoNumbers(headOne, headTwo) {
  let sum = 0;
  let carry = 0;
  let digit = 0;
  while (headOne || headTwo || carry > 0) {
    if (headOne == null && headTwo == null) {
      sum = carry;
    } else if (headOne == null) {
      sum = headTwo.val + carry;
      headTwo = headTwo.next;
    } else if (headTwo == null) {
      sum = headOne.val + carry;
      headOne = headOne.next;
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
    sentinel = listThree.head;
  } else {
    curr.next = newNode;
    curr = curr.next;
  }
}

addTwoNumbers(listOne.head, listTwo.head);

console.log("Head of the list is - ", sentinel.val);

let output = listThree.head;
while (output) {
  console.log(output.val);
  output = output.next;
}

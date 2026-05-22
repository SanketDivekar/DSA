// Code to check if two list have any intersecting node or not. Leet code problem no - 160
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
const listTwo = new MyLinkList();

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

const listTwoNodeOne = new CreateNode(8);
const listTwoNodeTwo = new CreateNode(9);
const listTwoNodeThree = new CreateNode(10);
const listTwoNodeFour = new CreateNode(3);
const listTwoNodeFive = new CreateNode(19);
const listTwoNodeSix = new CreateNode(21);

listTwoNodeOne.next = listTwoNodeTwo;
listTwoNodeTwo.next = listTwoNodeThree;
listTwoNodeThree.next = listTwoNodeFour;
listTwoNodeFour.next = listTwoNodeFive;
listTwoNodeFive.next = listTwoNodeSix;

listTwo.head = listTwoNodeOne;

function checkIntersection(headA, headB) {
  let listNodes = new Set();
  while (headB) {
    listNodes.add(headB.val);
    headB = headB.next;
  }

  while (headA) {
    if (listNodes.has(headA.val)) {
      return headA.val;
    }
    headA = headA.next;
  }
  return null;
}

const result = checkIntersection(listOne.head, listTwo.head);
console.log(result);

// Code to remove duplicates from sorted list. Leet code proble no - 83
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
const nodeTwo = new CreateNode(1);
const nodeThree = new CreateNode(2);
const nodeFour = new CreateNode(3);
const nodeFive = new CreateNode(3);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;

list.head = nodeOne;
function removeDuplicate(head) {
  let curr = head;
  while (curr && curr.next != null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

console.log("List before deletion - ");
let curr = list.head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
const result = removeDuplicate(list.head);

console.log("List after deletion - ");

let currTwo = list.head;
while (currTwo) {
  console.log(currTwo.val);
  currTwo = currTwo.next;
}

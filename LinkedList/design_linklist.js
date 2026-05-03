// Code to create a link list and traverse a linked list

// Creating a node
class CreateNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create a empty list
class MyLinkedList {
  constructor() {
    this.head = null;
  }
}

// create a instance of MyLinkedList
const list = new MyLinkedList();

// create nodes for list
const nodeOne = new CreateNode(10);
const nodeTwo = new CreateNode(20);
const nodeThree = new CreateNode(30);

// Reference each node to next node
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;

// Create a reference point for linked list head
// Using line no - 32 linked list head is now pointing to nodeOne
list.head = nodeOne;

// Traversing the list
let current = list.head;
console.log("Linked list contains below values: ");

while (current) {
  console.log(current.val);
  current = current.next;
}

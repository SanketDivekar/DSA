// Code to create a link list and traverse a linked list

// Blueprint to create a node
class CreateNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Blueprint to create a linklist
class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

let idx;

// create a instance of MyLinkedList below line will create an empty list
const list = new MyLinkedList();

// function to add element at head of the list
function addElementAtHead(val) {
  // create a new node
  let newNode = new CreateNode(val);

  // point new node to head of the list
  newNode.next = list.head;

  // point head to the new node
  list.head = newNode;
  list.size += 1;
}

// function to add element at the tail of the list
function addElementAtTail(val) {
  // create a new node
  let newNode = new CreateNode(val);

  //check if list is empty or not, if list is empty point head to newNode else traverse through list using reference variable, when it reaches the last node point reference variable.next = newNode
  if (list.head == null) {
    list.head = newNode;
  } else {
    let curr = list.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  list.size += 1;
}

// function to add element before index position
function addElementAtIndex(index, val) {
  let newNode = new CreateNode(val);
  idx = index;
  if (index == 0) {
    addElementAtHead(val);
    return;
  } else if (index == list.size) {
    addElementAtTail(val);
    return;
  } else {
    let curr = list.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  list.size += 1;
}

// function to get element at index
function getElement(index) {
  idx = index;
  if (index < 0 || index >= list.size) {
    return -1;
  } else {
    let curr = list.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }
}

// function to delete an element at index
function deleteElement(index) {
  idx = index;
  if (index < 0 || index >= list.size) {
    return;
  } else if (index == 0) {
    list.head = list.head.next;
  } else {
    let curr = list.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  list.size -= 1;
}

// create nodes for list
const nodeOne = new CreateNode(10);
const nodeTwo = new CreateNode(20);
const nodeThree = new CreateNode(30);

list.size += 3;

// Reference each node to next node
nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;

// Create a reference point for linked list head
// Using line no - 32 linked list head is now pointing to nodeOne
list.head = nodeOne;

// Traversing the list
let current = list.head;
console.log(
  "Linked list contains below values: and size of list is: ",
  list.size,
);

while (current) {
  console.log(current.val);
  current = current.next;
}

addElementAtHead(11);

// Traversing the list
current = list.head;
console.log(
  "\nLinked list contains below values after adding element at head position: and size of list is: ",
  list.size,
);

while (current) {
  console.log(current.val);
  current = current.next;
}

addElementAtTail(22);

// Traversing the list
current = list.head;
console.log(
  "\nLinked list contains below values after adding element at tail position: and size of list is: ",
  list.size,
);

while (current) {
  console.log(current.val);
  current = current.next;
}

addElementAtIndex(3, 33);

// Traversing the list
current = list.head;
console.log(
  "\nLinked list contains below values after adding element before index",
  idx,
  "and size of list is: ",
  list.size,
);

while (current) {
  console.log(current.val);
  current = current.next;
}

const listElement = getElement(4);
console.log("\nElement at index", idx, "is :", listElement);

deleteElement(5);
current = list.head;
console.log(
  "\nLinked list contains below values after deleting element at index",
  idx,
  "and size of list is: ",
  list.size,
);

while (current) {
  console.log(current.val);
  current = current.next;
}

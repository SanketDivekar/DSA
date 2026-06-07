// Code to remove the linklist node from the list. Given an integer value remove all nodes where Node.val === val and return the new head. Leetcode problem no - 203
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

// Created a watcher node which will always point to head of the link list, it is also called as sentinel node.

const watcherNode = new CreateNode(null);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;
nodeFive.next = nodeSix;
nodeSix.next = nodeSeven;

list.head = nodeOne;

function removeListElement(head, val) {
  // point watchernode to head of the list.
  watcherNode.next = head;
  let prev = watcherNode;

  while (prev && prev.next != null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return watcherNode.next.val;
}

const result = removeListElement(list.head, 6);
console.log(result);

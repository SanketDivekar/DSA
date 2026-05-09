/* Code to check if the link list has cycle in it or not. Leet code problem no - 141

This is an optimized approach with respect to space complexity
This solution uses Floyds Cycle Detection Algorithm

How it works
It uses two pointer approach:
1. slow pointer - Moves one node at a time.
2. fast pointer - Moves two nodes at a time.
Initially both pointers should point to the head

cycle detection - 
If the fast pointer reahes null than list has no cycle.
If the cycle is present, fast pointer eventually reaches or "laps" slow pointer and both the pointer meets at same node. This proves the cycle exist.
*/

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

const nodeOne = new CreateNode(3);
const nodeTwo = new CreateNode(2);
const nodeThree = new CreateNode(0);
const nodeFour = new CreateNode(-4);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeTwo;

list.head = nodeOne;

function hasCycle(head) {
  if (head == null) {
    return false;
  }
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr != null && fastPtr.next != null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) {
      return true;
    }
  }
  return false;
}

const result = hasCycle(list.head);
console.log(result);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const nextNode = leader.next;
    leader.next = newNode;
    newNode.next = nextNode;
    this.length++
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      index = this.length - 1;
    }

    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    if (index === this.length - 1) {
      this.tail = leader;
    }
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

// 1 --> 10 --> 99 --> 5 --> 15
const myLinkedList = new SinglyLinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99)
myLinkedList.remove(4)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())


class _Node {
  constructor(value) {
    this.value = value; this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null; this.last = null;
  }

  enqueue(data) {
    //add item to the end of the queue
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      //connect new node after last item
      this.last.next = node;
    }
    //makes new node last item on node
    this.last = node;
  }

  dequeue() {
    //if queue is empty
    if (this.first === null) {
      return;
    }
    const node = this.first;
    //setting node var as first
    //then setting first as next from first
    this.first = this.first.next;
    if (node === this.last) {
      //if node is the last node, setting last to null
      this.last = null;
    }
    return node.value;
  }
  peek() {
    return this.first.value;
  }
  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    }
  }
  
}

export default Queue
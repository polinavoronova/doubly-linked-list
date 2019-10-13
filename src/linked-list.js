const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        if (this._head === null) {
            this._head = new Node(data, null, null);
            this._tail = this._head;
        } else {
            let node = new Node(data, this._tail, null);
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let curr = this._head;
        for (let i = 0; i < index; i++) {
            if (curr === null) {
                return null;
            }
            
            curr = curr.next; 
        }
        return curr.data;
    }

    insertAt(index, data) {
        let curr = this._head; 
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        let node = new Node(data, curr.prev, curr);
        
        if (curr.prev != null) {
            curr.prev.next = node;
        }

        curr.prev = node;
        this.length++;
        return this;
    }

    isEmpty() {
        return this._head === null;
    }

    clear() {
        this._head = new Node(); 
        this._tail = new Node();
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let curr = this._head; 
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }        

        if (curr.prev != null) {
            curr.prev.next = curr.next;
        }

        if (curr.next != null) {
            curr.next.prev = curr.prev;
        }
        
        this.length--;
        return this;
    }

    reverse() {
        let tmp;
        let curr = this._head;
        while (curr != null) {
            tmp = curr.prev;
            curr.prev = curr.next;
            curr.next = tmp;
            curr = curr.prev;
        }

        tmp = this._head;
        this._head = this._tail;
        this._tail = tmp;

        return this;
    }

    indexOf(data) {
        let curr = this._head;
        let index = 0;
        for (; curr !== null; index++) {

            if (curr.data === data) {
                return index;
            }

            curr = curr.next; 
        }

        return -1;
    }
}

module.exports = LinkedList;

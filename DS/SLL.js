class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* Adding a node to the end */
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
        return newNode
    }

    /* Removing a node from the end */
    pop() {
        if (!this.head) return undefined

        let curr = this.head;
        let newTail = curr;

        while (curr.next) {
            newTail = curr;
            curr = curr.next;
        }

        newTail.next = null
        this.tail = newTail;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return curr
    }

    /* Removing a node from the front */
    shift() {
        if (!this.head) return undefined

        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (!this.length) {
            this.tail = null;
        }
        return currentHead
    }

    /* Adding a node to the front */
    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
        }

        this.head = newNode;
        this.length++;
        return newNode
    }

    /* Find a node by the position */
    findByPos(pos) {
        if (!this.head || pos < 0 || pos >= this.length) return undefined;

        let currentHead = this.head;
        let counter = 0

        while (counter !== pos) {
            currentHead = currentHead.next;
            counter++
        }

        return currentHead
    }

    /* Find a node by the value */
    findByVal(val) {
        if (!this.head || !val) return undefined;
        let currentHead = this.head;

        while (currentHead.value !== val) {
            currentHead = currentHead.next;
        }

        return currentHead
    }

    /* Find a node by the given position */
    removeByPos(pos) {
        if (!this.head || pos < 0 || pos >= this.length) return undefined;

        if (pos === 0) {
            return this.shift()
        }

        if (pos === this.length - 1) {
            return this.pop()
        }

        let prevNode = this.findByPos(pos - 1)
        const removedNode = prevNode.next
        prevNode.next = removedNode.next
        removedNode.next = null

        this.length--
        return removedNode
    }

    /* Find a node by the given value */
    removeByVal(val) {
        if (!this.head || !val) return undefined;
        let currentHead = this.head;
        let counter = 0

        while (currentHead.value !== val) {
            counter++
            currentHead = currentHead.next;
        }

        return this.removeByPos(counter)
    }

    insert(pos, val) {
        if (pos < 0 || pos > this.length) return false;
        if (pos === this.length) return this.push(val);
        if (pos === 0) return this.unshift(val);

        let newNode = new Node(val);
        let prev = this.findByPos(pos - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    /* Clear list */
    clear() {
        this.head = null;
    }

    /* Reverse list recursively */
    reverseRec() {
        const reverseList = (head) => {
            if (head === null || head.next === null) {
                return head
            }

            const reversedList = reverseList(head.next)
            head.next.next = head
            head.next = null

            return reversedList
        }

        this.tail = this.head
        this.head = reverseList(this.head)
    }

    /* Reverse list */
    reverse() {
        let current = this.head;
        let next = null;
        let prev = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
        return prev
    }

    /* Merge two lists */
    merge(head1, head2) {
        if (!head1 || !head2) {
            return head1 || head2
        }

        let newHead = new Node()
        if (head1.value <= head2.value) {
            newHead = head1
            head1 = head1.next
        } else {
            newHead = head2
            head2 = head2.next
        }

        let tmpHead = newHead

        while (head1 && head2) {
            let curr = null
            if (head1.value <= head2.value) {
                curr = head1;
                head1 = head1.next
            } else {
                curr = head2;
                head2 = head2.next
            }

            tmpHead.next = curr
            tmpHead = curr
        }

        if (head1) {
            tmpHead.next = head1;
        } else if (head2) {
            tmpHead.next = head2;
        }

        return newHead
    }

    /* Sort the list */
    sort() {
        if (!this.head || !this.head.next) return this.head;

        const dummyNode = new Node();
        dummyNode.next = this.head;
        let prev = this.head;
        let cur = this.head.next;

        while (cur) {
            if (cur.value >= prev.value) {
                prev = cur
                cur = cur.next
                continue
            }


            const next = cur.next
            let pos = dummyNode

            while (pos.next) {
                if (pos.next.value >= cur.value) break;
                pos = pos.next;
            }

            cur.next = pos.next;
            pos.next = cur;
            prev.next = next;
            cur = next;
        }

        // prev.next = null;
        this.tail = prev
        this.head = dummyNode.next
    }

    print() {
        let str = ''
        let current = this.head;
        while (current) {
            str += current.value + ', ';
            current = current.next;
        }

        console.log(str);
    }
}

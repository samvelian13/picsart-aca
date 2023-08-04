export class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next
    }
}

export class SinglyLinkedList {
    constructor(node) {
        this.head = node ?? null;
        this.length = 0;
    }

    /* Adding a node to the end */
    push(key, value) {
        const newNode = new Node(key, value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            let prev = null

            while (curr) {
                if (curr.key === key) {
                    curr.value = value;
                    return curr
                }

                prev = curr
                curr = curr.next;
            }

            prev.next = newNode;
        }

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
        this.length--;

        if (!this.length) {
            this.head = null;
        }
        return curr
    }

    /* Removing a node from the front */
    shift() {
        if (!this.head) return undefined

        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        return currentHead
    }

    /* Adding a node to the front */
    unshift(key, value) {
        const newNode = new Node(key, value);

        newNode.next = this.head;
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

    /* Find a node by the key */
    findByKey(key) {
        if (!this.head || !key) return undefined;
        let curr = this.head;

        while (curr) {
            if (curr.key === key) {
                break
            }

            curr = curr.next;
        }

        return curr
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

        if (this.head.value === val) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        let prev = this.head
        let isFound = false

        while (current) {
            if (current.value === val) {
                isFound = true
                break
            }
            prev = current
            current = current.next;
        }

        if (!isFound) {
            return isFound
        }

        this.length--
        prev.next = current.next
        return isFound;
    }

    /* Find a node by the given key */
    removeByKey(val) {
        if (!this.head || !val) return undefined;

        if (this.head.key === val) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        let prev = this.head
        let isFound = false

        while (current) {
            if (current.key === val) {
                isFound = true
                break
            }
            prev = current
            current = current.next;
        }

        if (!isFound) {
            return isFound
        }

        this.length--
        prev.next = current.next
        return isFound;
    }

    insert(pos, key, val) {
        if (pos < 0 || pos > this.length) return false;
        if (pos === this.length) return this.push(key, val);
        if (pos === 0) return this.unshift(key, val);

        let newNode = new Node(key, val);
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

        this.head = prev;
        return prev
    }

    /* Merge two lists */
    merge(head1, head2) {
        if (!head1 || !head2) {
            return head1 || head2
        }

        let newHead
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

        const newNode = new Node();
        newNode.next = this.head;
        let prev = this.head;
        let cur = this.head.next;

        while (cur) {
            if (cur.value >= prev.value) {
                prev = cur
                cur = cur.next
                continue
            }


            const next = cur.next
            let pos = newNode

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
        this.head = newNode.next
    }

    print() {
        let str = ''
        let current = this.head;

        while (current) {
            str += current.key + ' : ' + current.value + ', ';
            current = current.next;
        }

        console.log(str);
    }
}

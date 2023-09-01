// Remove Nth Node From End of List

import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const removeNthFromEnd = function (head, n) {
    if (!head) return head;

    let curr = head
    let count = 0

    while (curr) {
        count++
        curr = curr.next
    }

    let countTmp = count - n;
    if (count === 1) return null;
    if (countTmp === 0) return head.next;

    curr = head

    while (countTmp-- > 1) {
        curr = curr.next
    }

    if (!curr.next) {
        return null
    }

    const removedNode = curr.next
    curr.next = removedNode.next
    removedNode.next = null

    return head
}

const list = new SinglyLinkedList()
// const head = [1, 2, 3, 4, 5], n = 2
// const head = [1], n = 1
const head = [1, 2], n = 1

head.forEach((i) => {
    list.push(i)
})

const res = removeNthFromEnd(list.head, n)
debugger

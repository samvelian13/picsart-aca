// Odd Even Linked List
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'

/**
 * @param {Node} head
 * @return {Node}
 */
const oddEvenList = function (head) {
    if (!head) return head;

    let curr = head.next // Even
    let evenHead = curr
    let prev = head // Odd

    while (curr && curr.next) {
        prev.next = curr.next
        prev = curr.next
        curr.next = prev.next
        curr = curr.next
    }

    prev.next = evenHead
    return head
}

const list = new SinglyLinkedList()
// const head = [1, 2, 3, 4, 5]
// const head = [2, 1, 3, 5, 6, 4, 7]
const head = [1, 2, 3, 4, 5, 6, 7, 8]

head.forEach((i) => {
    list.push(i)
})

const res = oddEvenList(list.head)
debugger

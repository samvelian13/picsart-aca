// Swapping nodes in a linked list
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const swapNodes = function (head, k) {
    let curr = head

    while(--k > 0 && curr) {
        curr = curr.next;
    }

    let firstNode = curr
    let lastNode = head

    while (curr.next) {
        curr = curr.next
        lastNode = lastNode.next
    }

    if (firstNode === lastNode) {
        return head
    }

    let tmpVal = firstNode.value
    firstNode.value = lastNode.value
    lastNode.value = tmpVal

    return head
}

const list = new SinglyLinkedList()
const head = [1, 2, 3, 4, 5], k = 2

head.forEach((i) => {
    list.push(i)
})

const res = swapNodes(list.head, k)
debugger

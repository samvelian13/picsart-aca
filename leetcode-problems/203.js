// Remove Linked List Elements
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const removeElements = function (head, val) {
    if (!head) return head;

    let prev = new Node()
    prev.next = head
    let tmpPrev = prev

    while (head) {
        if (head.value === val) {
            prev.next = head.next
        } else {
            prev = head
        }

        head = head.next
    }

    return tmpPrev.next
}

const list = new SinglyLinkedList()
const head = [6, 2, 6, 3, 4, 5, 6], val = 6
// const head = [1, 3, 6, 3, 5], val = 3
// const head = [7, 7, 7, 7], val = 7

head.forEach((i) => {
    list.push(i)
})

const res = removeElements(list.head, val)
console.log(res);
debugger

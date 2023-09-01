// Reverse Linked List II
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'


const reverseBetween = function (head, left, right) {
    let dummyNode = new Node()
    dummyNode.next = head
    let current = dummyNode
    let count = 1

    while (count++ < left) current = current.next;

    let prev = current
    let next = null
    let tmpNode = current
    current = current.next

    while (left++ <= right) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    tmpNode.next.next = current
    tmpNode.next = prev
    return dummyNode.next
}

const list = new SinglyLinkedList()
const head = [1, 2, 3, 4, 5], left = 1, right = 4
// const head = [5], left = 1, right = 1

head.forEach((i) => {
    list.push(i)
})

const res = reverseBetween(list.head, left, right)
// console.log(res);
debugger

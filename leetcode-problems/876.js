// Middle of the linked list
import {SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const middleNode = function (head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

// const head = [1, 2, 3, 4, 5, 6]
const head = [1, 2, 3, 4, 5]
const list = new SinglyLinkedList()

head.forEach((i) => {
    list.push(i)
})

const res = middleNode(list.head)
console.log(res);
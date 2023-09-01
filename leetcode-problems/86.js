// Partition List
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'


const partition = function (head, x) {
    let left = new Node()
    let tmpLeft = left
    let right = new Node()
    let tmpRight = right
    let curr = head


    while (curr) {
        if (curr.value < x) {
            left.next = curr
            left = curr
        } else {
            right.next = curr
            right = curr
        }
        curr = curr.next
    }

    right.next = null
    left.next = tmpRight.next

    return tmpLeft.next
}

const head = [1, 4, 3, 2, 5, 2], x = 3
const list = new SinglyLinkedList()

head.forEach((i) => {
    list.push(i)
})

const res = partition(list.head, x)


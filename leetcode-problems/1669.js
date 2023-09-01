// Merge In Between Linked Lists
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const mergeInBetween = function (list1, a, b, list2) {
    let curr = list1.head
    let count = 0
    let prev = null

    while (count < b) {
        if (count === a - 1) {
            prev = curr
        }

        count++
        curr = curr.next
    }

    prev.next = list2.head

    let list2head = list2.head
    while (list2head.next) {
        list2head = list2head.next
    }

    list2head.next = curr.next
    return list1.head
}

const list1 = new SinglyLinkedList()
const list2 = new SinglyLinkedList()
const head1 = [0, 1, 2, 3, 4, 5], a = 3, b = 4,
    head2 = [1000000, 1000001, 1000002]


// const head1 = [0, 1, 2, 3, 4, 5, 6], a = 1, b = 3, head2 = [1000000, 1000001, 1000002, 1000003, 1000004]
head1.forEach((i) => {
    list1.push(i)
})
head2.forEach((i) => {
    list2.push(i)
})

const res = mergeInBetween(list1, a, b, list2)
debugger

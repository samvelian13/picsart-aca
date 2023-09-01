import {SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const frontBackSplit = function (head) {
    if (!head || !head.next) {
        return false
    }

    let slow = head
    let fast = head

    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }

    slow.next = null
    return [head, fast]
}

const head = [3, 2, 0, -4]
const list = new SinglyLinkedList()

head.forEach((i) => {
    list.push(i)
})

const res = frontBackSplit(list.head)

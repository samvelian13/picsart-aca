// Rotate List
import {SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const rotateRight = function (head, k) {
    if (!head || !k) return head;
    let curr = head
    let length = 1

    while (curr && curr.next) {
        length++
        curr = curr.next
    }

    curr.next = head
    curr = head
    k = length - (k % length); //

    while (k > 1) {
        k--
        curr = curr.next
    }


    head = curr.next
    curr.next = null

    return head
}

// const head = [1, 2, 3, 4, 5], k = 2
// const head = [0, 1, 2], k = 4
const head = [1, 2], k = 1
const list = new SinglyLinkedList()

head.forEach((i) => {
    list.push(i)
})

const res = rotateRight(list.head, k)
// console.log(res);
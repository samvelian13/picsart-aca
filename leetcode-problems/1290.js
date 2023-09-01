// Convert Binary Number in a Linked List to Integer
import {SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const getDecimalValue = function (head) {
    let curr = head
    let decimal = 0

    while (curr) {
        decimal = (decimal * 2) + curr.value;
        curr = curr.next
    }
    return decimal
}

// const head = [1, 1, 0]
const head = [0]
const list = new SinglyLinkedList()

head.forEach((i) => {
    list.push(i)
})

const res = getDecimalValue(list.head)
console.log(res);

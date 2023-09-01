import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const deleteDuplicates = function (head) {
    let dummyNode = new Node()
    dummyNode.next = head
    let prev = dummyNode

    while (head) {
        if (head.next && head.value === head.next.value) {
            while (head.next && head.value === head.next.value) {
                head = head.next
            }

            prev.next = head.next
        } else {
            prev = prev.next
        }

        head = head.next
    }

    return dummyNode.next
}


const list = new SinglyLinkedList()
const head = [1, 2, 3, 3, 4, 4, 5]

head.forEach((i) => {
    list.push(i)
})

const res = deleteDuplicates(list.head)
console.log(res, '-result');
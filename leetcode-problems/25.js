// Reverse Nodes in k-Group
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'


const reverseKGroup = function (head, k) {
    if (!head || !head.next || k <= 1) {
        return head
    }

    let dummyNode = new Node()
    dummyNode.next = head
    let groupPrev = dummyNode

    while (true) {
        const kth = getKth(groupPrev, k)
        if (!kth) break

        let groupNext = kth.next
        let prev = kth.next
        let current = groupPrev.next


        while (current !== groupNext) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        let tmp = groupPrev.next
        groupPrev.next = kth
        groupPrev = tmp
    }

    return dummyNode.next
}

function getKth(curr, k) {
    while (curr && k > 0) {
        curr = curr.next
        k-=1
    }
    return curr
}

const list = new SinglyLinkedList()
const head = [1, 2, 3, 4, 5], k = 4

head.forEach((i) => {
    list.push(i)
})

const res = reverseKGroup(list.head, k)
debugger
// console.log(res);

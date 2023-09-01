// Sort list
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const sortList = function (head) {
    if (head === null || head.next === null)
        return head

    const mid = middleNode(head)
    const left = sortList(head)
    const right = sortList(mid)

    return merge(left, right)
}

const merge = function (list1, list2) {
    const dummyHead = new Node();
    let tail = dummyHead

    while (list1 && list2) {
        if (list1.value < list2.value) {
            tail.next = list1;
            list1 = list1.next;
            tail = tail.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
            tail = tail.next;
        }
    }

    tail.next = list1 ? list1 : list2;
    return dummyHead.next;
}

const middleNode = function (head) {
    let slow = head
    let fast = head
    let prev = null

    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    prev.next = null;
    return slow
}

const list = new SinglyLinkedList()
const head = [4,2,1,3]

head.forEach((i) => {
    list.push(i)
})

const res = sortList(list.head)
debugger

// Reorder List
import {SinglyLinkedList} from '../DS/LinkedList/SLL.js'

const reorderList = function (head) {
    if (!head)
        return head

    let secondHalf = middleNode(head)
    secondHalf = reverse(secondHalf)
    merge(head, secondHalf)
}

const reverse = function (head) {
    let current = head;
    let next = null;
    let prev = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
}

const merge = function (list1, list2) {
    let list1Next = null;
    let list2Next = null;

    while (list2) {
        list2Next = list2.next;
        list1Next = list1.next;

        list2.next = list1Next;
        list1.next = list2;

        list2 = list2Next;
        list1 = list1Next;
    }
}

const middleNode = function (head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let tmp = slow.next
    slow.next = null;
    return tmp
}

const list = new SinglyLinkedList()
const head = [1, 2, 3, 4, 5]

head.forEach((i) => {
    list.push(i)
})

reorderList(list.head)
debugger

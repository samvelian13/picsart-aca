// recursive solution
import {Node, SinglyLinkedList} from '../DS/LinkedList/SLL.js'

/**
 * @param {Node} list1
 * @param {Node} list2
 * @return {Node}
 */
const mergeTwoLists = function (list1, list2) {
    if (!list1 || !list2) {
        return list1 || list2
    }

    let newHead
    if (list1.value <= list2.value) {
        newHead = list1
        list1 = list1.next
    } else {
        newHead = list2
        list2 = list2.next
    }

    let tmpHead = newHead

    while (list1 && list2) {
        let curr = null
        if (list1.value <= list2.value) {
            curr = list1;
            list1 = list1.next
        } else {
            curr = list2;
            list2 = list2.next
        }

        tmpHead.next = curr
        tmpHead = curr
    }

    if (list1) {
        tmpHead.next = list1;
    } else if (list2) {
        tmpHead.next = list2;
    }

    return newHead
}

const head1 = [1, 2, 4], head2 = [1, 3, 4]
const list1 = new SinglyLinkedList()
const list2 = new SinglyLinkedList()

head1.forEach((i) => {
    list1.push(i)
})
head2.forEach((i) => {
    list2.push(i)
})

const res = mergeTwoLists(list1.head, list2.head)
console.log(res);

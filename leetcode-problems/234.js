// Palindrome Linked List
import {SinglyLinkedList} from '../DS/LinkedList/SLL.js'


const isPalindrome = function (head) {
    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let firstHalf = head
    let secondHalf = reverse(slow.next)
    slow.next = null

    while (firstHalf && secondHalf) {
        if (firstHalf.value !== secondHalf.value) {
            return false
        }

        firstHalf = firstHalf.next
        secondHalf = secondHalf.next
    }

    return true
}

const reverse = function (head) {
    let curr = head;
    let next = null;
    let prev = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev
}

// const head = [1, 2, 2, 1]
const head = [1,2]
const list = new SinglyLinkedList()

head.forEach((i) => {
    list.push(i)
})

const res = isPalindrome(list.head)
console.log(res);
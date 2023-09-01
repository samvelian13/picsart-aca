// Reverse Linked List

const reverseList = function(head) {
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

const head = [1,2,3,4,5]
const res = reverseList(head)
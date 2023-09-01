import SinglyLinkedList from '../DS/LinkedList/SLL.js'

const hasCycle = function (head) {
    if (!head) {
        return false
    }

    let slow = head
    let fast = head

    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) {
            return true
        }
    }

    return false

}

const head = [3, 2, 0, -4], pos = 1
// const head = [1], pos = -1
const list = new SinglyLinkedList()

head.forEach((i) => {
    list.push(i)
})

const circledNode = list.findByPos(pos)

if (circledNode) {
    list.tail.next = circledNode
    const res = hasCycle(list.head)
    console.log(res);
}


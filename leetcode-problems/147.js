/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    if (!head || !head.next) return head;

    const dummyNode = new ListNode();
    dummyNode.next = head;
    let prev = head;
    let cur = head.next;

    while (cur) {
        if (cur.val >= prev.val) {
            prev = cur
            cur = cur.next
            continue
        }


        const next = cur.next
        let pos = dummyNode

        while (pos.next) {
            if (pos.next.val >= cur.val) break;
            pos = pos.next;
        }

        cur.next = pos.next;
        pos.next = cur;
        prev.next = next;
        cur = next;
    }

    // prev.next = null;
    return dummyNode.next
}
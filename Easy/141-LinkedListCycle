/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * classic tortoise and hare problem... really the only hard part here is knowing you have to compare the refs of the whole lists and the while loop condition
 */
var hasCycle = function (head) {
    let tortoise = head;
    let hare = head;
    while (hare !== null && hare.next !== null) {

        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) { // we dont want to compare vals, we want to compare the entire list references..so if we land on the node that points back to the loop start we'll see that the references from both tort and hare are the same
            return true;
        }
    }
    return false;
};
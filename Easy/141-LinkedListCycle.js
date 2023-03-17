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



// Failed solution....very close....a few redundant vars and didnt get the while check correct.
// always check for hare.next since that's going to run into null before others in the case of no cycles

var hasCycle = function (head) {
    if (head === null) {
        return false
    }
    let tort = head;
    let hare = head.next

    while (hare !== null && tort !== null) {


        if (tort === hare) {
            return true;
        }

        else {
            head = head.next;
            tort = tort.next;
            hare = hare.next.next;
        }
    }

    return false


}


var hasCycle = function (head) {

    let tort = head;
    let hare = head;

    while (hare !== null && hare.next !== null) {
        tort = tort.next;
        hare = hare.next.next;

        if (tort === hare) {
            return true;
        }


    }

    return false

}

// study 3/16/2023
//got it...just need to check hares next and next and id say we got this one DOWN
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

var removeNthFromEnd = function (head, n) {
    let nodeToReturn = head;

    //Have two pointers, one that is n ahead of the other
    let pointer1 = head;
    let pointer2 = head;

    //Move pointer2 to be n ahead
    for (let i = 0; i < n; i++) {
        pointer2 = pointer2.next;
    }

    //If pointer2 doesn't exist, that means we must remove the head of the list
    if (!pointer2) {
        return nodeToReturn.next;
    }

    //Move both pointers until pointer2 reaches the end
    while (pointer2.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    //Save the node two places ahead of pointer1;    
    pointer1.next = pointer1.next.next;

    return nodeToReturn;
};

//Input: head = [1,2,3,4,5], n = 2
//Output: [1,2,3,5]
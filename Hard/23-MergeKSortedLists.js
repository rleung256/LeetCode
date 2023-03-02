/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://www.youtube.com/watch?v=Ga32S0So-fM
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 * Insights
 * this one is divide and conquor ...AKA merge sort...merge 2 lists at one time...merge those into 1 list and then merge that list with the next list
 * The challenge of this problem is knowing how to merge 2 linked lists and how to implement the merge sort
 * T O(nlogk)
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null; // if theres nothing in the list return null
    }

    while (lists.length > 1) { // this is the start of the merge sort... we take 2 lists at a time and put them into our sorting func
        let list1 = lists.shift();
        let list2 = lists.shift();

        let merged = mergeLists(list1, list2);

        lists.push(merged); // we then take the result and push it into our list
    }

    return lists[0]; // return the list... this also takes care of if there is only a list of 1 as it wont enter the while loop above

};

function mergeLists(list1, list2) {
    let dummy = new ListNode(0); // create a node and init it to anything
    let head = dummy; // create a reference to the head so we can return it later

    while (list1 && list2) { // while we have values in both of our lists
        if (list1.val <= list2.val) { // check the vals and set the value of dummy to that 
            dummy.next = list1;// we arnt setting the val but the referance...
            list1 = list1.next; // once we have dummy set move onto the next ndoe
        }
        else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next; //move our dummy pointer to the next value
    }

    if (list1 === null) {// this exists for if one list runs out of values vs the others...in this instance you just take the remaining list and add it to the dummy node
        dummy.next = list2;
    }
    else {
        dummy.next = list1;
    }

    return head.next; // at line 36 we set this to anything so now we just return the first node after the first(second node)
}
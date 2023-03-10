/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * think of this one as just reversing the pointers one at a time and its super easy
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


function reverseList(head) {
    var prev = null; // think of this as a pointer and head is our other pointer
    while (head) {

        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;

    }
    return prev;
}

reverseList([1, 2, 3, 4, 5])
// [5,4,3,2,1]

// null=>1=>2=>3=>4=>5 set next to head.next
// prev  h  n

// null<=1=>2=>3=>4=>5 head.next pointer now looks at prev
// prev  h  n

// null<=1=>2=>3=>4=>5 move head over(set head to next)
// prev     h

// null<=1=>2=>3=>4=>5 set next to head.next
// prev     h  n

// null<=1<=2=>3=>4=>5 set head.next to prev
//       p  h  n

// null<=1<=2=>3=>4=>5 set head to next
//       p     h

// null<=1<=2=>3=>4=>5 set next to head.next
//       p     h  n

// null<=1<=2<=3=>4=>5 set head.next to prev  and so on..
//          p  h  n



/**
 * // 3/10/2023
    // failed soluition...what im missing is starting off with null. 
    //overall structure and idea was right...need to remember null, then just set prev to head...set next to curr...then curr.next  = prev....draw it out.
 */
var reverseList = function (head) {

    let ret = head;

    while (head) {
        let prev = head;
        let curr = head.next;
        curr.next = prev;
        prev = curr;

    }

    return ret;

};
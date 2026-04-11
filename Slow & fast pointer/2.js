// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head
   // if fast or fast.next becomes null loop breaks
    while(fast!=null && fast.next!=null){
        slow=slow.next // move 1 step 
        fast=fast.next.next // move 2 step
        // if slow == fast than its loop 
        if(slow==fast){
            // if head == slow loop breaks
            while(head!=slow){
                // both pointer move 1 step ahead
                head = head.next
                slow = slow.next
            }
            return slow // return the starting point
        }
    }
return null
};

// note: using LL cycle 1 logic to check if LL is cycle or not, if LL cycle than it check for starting pointer
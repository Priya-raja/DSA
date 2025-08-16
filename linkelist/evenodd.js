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
var oddEvenList = function(head) {

    if(head === null){
        return head
    }

    let temp = head
    let odd = temp

    let even = odd.next
    let evenList = even

    while (even !== null && even.next !== null){
        odd.next = even.next
        odd = odd.next

        even.next = odd.next
        even = even.next
    }

    odd.next = evenList
    return temp
    
};

//[2,3,6,7,1,5,4]
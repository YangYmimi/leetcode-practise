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
var deleteDuplicates = function(head) {
  var q = head;
  while (q != null && q.next != null) {
    if (q.val == q.next.val) {
      q.next = q.next.next;
    } else {
      q = q.next;
    }
  }

  return head;
};
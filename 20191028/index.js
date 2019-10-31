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
 */
var isPalindrome = function(head) {
  if (!head || !head.next) { // 特殊处理
    return true;
  }

  var fast = head, slow = head; // 快慢指针寻找中点
  while (fast.next && fast.next.next) { // 快指针 fast.next 存在则 slow.next 一定存在
    fast = fast.next.next;
    slow = slow.next;
  }

  // slow.next 是后半部分的尾指针
  var last = slow.next;
  while (last.next) { // 反转链表
    var temp = last.next;
    last.next = temp.next; // last.next.next
    temp.next = slow.next;
    slow.next = temp;
  }

  var pre = head;
  while (slow.next) {
    slow = slow.next;
    if (pre.val != slow.val) {
      return false;
    }
    pre = pre.next;
  }

  return true;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) { // 递归结束条件
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  if (l1.val <= l2.val) { // l1 节点值更小，则保留 l1 当前节点，将剩余节点和 l2 再进行比较得到新的 l1
    l1.next = mergeTwoLists(l1.next, l2);
    console.log(l1); // 得到新的l1
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    console.log(l2);
    return l2;
  }
};
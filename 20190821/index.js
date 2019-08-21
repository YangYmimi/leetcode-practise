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
var addTwoNumbers = function(l1, l2) {
  var carry = 0; // 定义进位
  var dummyHead = new ListNode(0); // 初始化结果链表
  var cur = dummyHead, p = l1, q = l2; // 初始化加数以及结果链表指针
  while (p != null || q != null) { // 链表存在next, 使用或来满足链表长度不同的情况
    var x = (p != null) ? p.val : 0;
    var y = (q != null) ? q.val : 0; // 链表节点为空时，当前值设置为0
    console.log('x: ' + x, 'y: ' + y, 'carry: ' + carry);
    var sum = x + y + carry; // 按位计算，并加上进位
    cur.next = new ListNode(sum % 10); // 取余当作当前位的值
    carry = Math.floor(sum / 10); // 更新进位, 向下取整
    cur = cur.next; // 更新当前链表节点指针
    p != null ? p = p.next : p = null;
    q != null ? q = q.next : q = null;
  }

  if (carry > 0) { // 最高位进 `1` 操作
    cur.next = new ListNode(carry);
  }

  return dummyHead.next;
};
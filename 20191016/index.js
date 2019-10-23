/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 递归判断节点是否相等即可
  // 终止条件是 p 和 q 都为 Null
  // 若 p 为 null 或者 q 为 null 则返回false
  if (p == null && q == null) {
    return true;
  }
  
  if (p == null || q == null) {
    return false;
  }

  if (p.val != q.val) {
    return false;
  }

  // 递归判断
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  var mirror = function (p, q) {
    if (p == null && q == null) {
      return true;
    }
  
    if (p == null || q == null) {
      return false;
    }
  
    return (p.val == q.val) && mirror(p.left, q.right) && mirror(p.right, q.left);
  }

  return mirror(root, root);
};
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  var sLen = s.length; // s 数组长度
  var p = 0, q = sLen - 1; // 设置首尾指针

  while (p < q) {
    var temp = s[p];
    s[p] = s[q];
    s[q] = temp;
    p++;
    q--;
  }
};
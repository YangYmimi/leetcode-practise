/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var sum = 0;
  while (n) {
    sum += n & 1; // 按位与，位相等返回1，否则返回0
    n >>>= 1; // 无符号右移
  }
  return sum;
};
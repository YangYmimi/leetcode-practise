/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }

  // n 分正负，奇偶情况
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  if (n % 2 === 0) { // n 是偶数
    var half = myPow(x, n / 2);
    return half * half;
  } else {
    var half = myPow(x, Math.floor(n / 2)); // 向下取整
    return half * half * x;
  }
};
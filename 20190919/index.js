/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var left = 0, right = Math.ceil(x / 2); // 向上取整
  while (left < right) {
    var mid = (left + right + 1) >>> 1; // 无符号数右移，取中间数
    var result = mid * mid;
    if (result > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return parseInt(left);
};
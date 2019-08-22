/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (!Number.isInteger(x)) { // 非整数情况
    return false;
  }

  if (x < 0) { // 负数情况
    return false;
  }

  var reversedX = (x + '').split('').reverse().join('');
  if (reversedX === (x + '')) { // 字符串比较
    return true;
  }

  return false;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var s = s.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
  var left = 0, right = s.length - 1; // 设置左右指针，分别指向头部和尾部
  while (left < right) {
    if (s[left] != s[right]) { // 不相等就直接返回false
      return false;
    }

    left++;
    right--;
  }

  return true;
};
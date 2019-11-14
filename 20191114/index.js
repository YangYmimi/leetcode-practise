/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var longest = 0,
      p = 0,
      arr = [];

  while(p < s.length) {
    if (arr.includes(s[p])) { // 如何存在则将数字弹出
      arr.shift(); // 弹出最早重复的
      continue;
    } else {
      arr.push(s[p]);
    }
    longest = Math.max(longest, arr.length);
    p++;
  }

  return longest;
};
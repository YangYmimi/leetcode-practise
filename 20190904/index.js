/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var haystackLength = haystack.length;
  var needleLength = needle.length;
  if ((needleLength === 0) || (haystack === needle)) { return 0; }
  if (needleLength > haystackLength) { return -1; }

  for (var index = 0; index < haystackLength; index++) {
    if (haystack[index] === needle[0]) { // 当前字符和needle的第一个字符一样
      if (haystack.substr(index, needleLength) === needle) { // 截取haystack中needle长度的字符进行比较
        return index;
      }
    }
  }

  return -1;
};
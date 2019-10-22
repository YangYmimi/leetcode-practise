/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var s = s.trim();
  var right = s.length - 1;

  var begin = right;
  while (begin >= 0 && s[begin] != ' ') {
    begin--;
  }

  return right - begin;
}
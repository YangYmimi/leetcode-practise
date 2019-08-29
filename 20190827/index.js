/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  var sLen = s.length;
  var stack = [];
  for (var index = 0; index < sLen; index++) {
    var node = s[index];
    if (map[stack[stack.length - 1]] === node) { // 当前遍历的括号为数组末尾元素对应的右括号
      stack.pop();
    } else { // 否则将当前元素push进去
      stack.push(node);
    }
  }

  return stack.length === 0;
};
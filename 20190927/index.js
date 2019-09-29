/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  var stack = [], // 存放结果的数组
      point = 0, // 指针
      sLen = S.length - 1;
  while (point <= sLen) {
    var top = stack[stack.length - 1];
    if (top === S[point]) { // 待入栈元素和栈顶元素一致
      stack.pop(); // 栈顶元素出栈
    } else {
      stack.push(S[point]);
    }
    point++; // 指针后移，当前元素跳过
  }

  return stack.join('');
};
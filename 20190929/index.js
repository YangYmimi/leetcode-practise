/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  if (popped.length === 0) {
    return pushed.length === 0;
  }

  // 改进点: 为什么我要用一个新的 stack 空间啊?
  var pushedIndex = 0, stack = [], pushedLen = pushed.length; 
  var result = '';
  while (pushedIndex <= pushedLen) { // pushed 数组全部进栈之后退出循环
    if (popped.length === 0) {
      pushedIndex++;
      break;
    }

    var sLen = stack.length; // 栈长度
    console.log(pushedIndex, ' | ', stack[sLen - 1], ' | ', popped[0]);
    if (stack[sLen - 1] === popped[0]) { // 栈顶元素和 popped 首位一致
      var pop = popped.splice(0, 1); // popped 数组去掉首位
      stack.pop();
      result += 'pop(' + pop + ')->';
    } else { // 若 popped 数组首位不等于 stack 栈顶，则只能执行入栈操作
      stack.push(pushed[pushedIndex]);
      result += 'push(' + pushed[pushedIndex] + ')->';
      pushedIndex++;
    }
  }

  console.log(result);
  return stack.length === 0
};
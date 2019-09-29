/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  var primitive = [], stack = []; // primitive 存放所有的原语，stack 用堆栈方式找出原语
  var primitivedStr = '';
  var index = 0;
  while (index <= S.length) {
    if (primitivedStr && stack.length === 0) { // 若栈为空，并且存储原语的临时不为空，则说明此时找到了一个原语，将原语push到原语数组内
      primitive.push(primitivedStr.substring(1, primitivedStr.length - 1)); // 将首尾元素去掉后，作为原语放回数组
      primitivedStr = ''; // 将原语push到原语数组后，清空临时变量
    }

    primitivedStr += S[index]; // 拼接临时原语字符串
    if (stack[stack.length - 1] === '(' && S[index] === ')') { // 栈顶元素是 '('，当前即将入栈的元素是 ')' 则组成了一个括号对，将栈顶元素 pop
      stack.pop();
    } else {
      stack.push(S[index]);
    }

    index++;
  }

  return primitive.join('');
};

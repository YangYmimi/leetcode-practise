/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) { return x; } // 特殊判断

  var check32Int = function (v) { // 定义溢出判断函数
    var v = Number.parseInt(v);
    return v > (Math.pow(2, 31) - 1) || v < Math.pow(-2, 31) ? 0 : v;
  }

  var isNegative = x < 0; // 检测 x 是否小于0
  var reversedX = (Math.abs(x) + '').split('').reverse().join('');
  var result = check32Int(reversedX);
  return isNegative ? -1 * result : result;
};
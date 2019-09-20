/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var left = 0, right = numbers.length - 1;
  while (left < right) {
    var sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) { // 结果大于目标数，则要把右边大数变小
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
};
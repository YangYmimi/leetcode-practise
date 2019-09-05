/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var left = 0, right = nums.length - 1;
  while (left <= right) { // 左边小于右边
    var mid = (left + right) >>> 1; // 左中位数
    var midValue = nums[mid];
    console.log('mid', mid, '+', 'midvalue', midValue);
    if (midValue === target) { // 相等
      return mid;
    } else if (target < midValue) { // 左半区，将右边缩小
      right = mid - 1;
    } else {
      left = mid + 1; // target 比中间数大，左边缩小
    }
  }

  return left;
};
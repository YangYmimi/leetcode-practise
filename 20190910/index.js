/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var maxIndex = nums.length - 1;

  if (nums[0] < nums[maxIndex]) {
    return nums[0];
  } // 数组未进行旋转

  var left = 0, right = maxIndex, min = nums[0];
  while (left < right) {
    var mid = (left + right + 1) >>> 1;
    if (min > nums[mid]) { // 中位数比首位小，那么中位数前面，不包括中位数，有可能比中位数还小，那么在中位数前半区进行查找比较
      min = nums[mid]; // 重新赋值
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (min > nums[left]) {
    min = nums[left];
  } // 一定要判断一下当left和right一样的情况下，while循环跳出，left这个位置的元素和min的大小

  return min;
};
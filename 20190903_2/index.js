/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) {
    return 0;
  }

  for (var index = 0; index < nums.length;) {
    if (nums[index] === val) {
      nums.splice(index, 1); // 继续 `index=0` 开始比较
    } else {
      index++; // index 后移
    }
  }

  return nums.length;
};
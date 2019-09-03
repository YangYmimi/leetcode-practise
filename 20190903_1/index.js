/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  for (var index = 0; index < nums.length;) {
    if (nums[index] === nums[index+1]) {
      nums.splice(index, 1); // 继续 `index=0` 开始比较
    } else {
      index++; // index 后移
    }
  }

  return nums.length;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var nums = nums.sort();
  var flag = 0, len = nums.length;
  while (flag < len) {
    if (nums[flag] == nums[flag + 1]) {
      flag += 2;
    } else {
      break;
    }
  }

  return nums[flag];
};
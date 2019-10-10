/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = nums.length, index = 0;
  while (index < len) {
    if (nums[index] === nums[index + 2]) {
      nums.splice(index + 2, 1);
      len -= 1;
    } else {
      index++;
    }
  }
};
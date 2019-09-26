/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var numSorted = nums.sort();
  return numSorted[Math.ceil(nums.length / 2) - 1]; // 数组索引从0开始
};

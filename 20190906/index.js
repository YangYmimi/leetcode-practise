/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var ans = nums[0]; // 设置初始的最长子序列和
  var sum = 0;
  nums.forEach((num) => { // 依次遍历当前数组
    if (sum > 0) { // 如果
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  });

  return ans;
};
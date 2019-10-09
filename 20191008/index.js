/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var len = nums.length;
  if (len === 0 || len < 3) { return []; } // 特殊情况处理

  var result = [];
  nums.sort(function(a, b) { return a - b; }); // 数组升序

  for (var index = 0; index < len; index++) {
    // 因为是升序，当前若大于0则后面部分肯定大于0，则退出循环
    if (nums[index] > 0) { break; }

    // index 和 index - 1值相同，则说明和之前的循环重复了
    if (index > 0 && nums[index] == nums[index - 1]) { continue; }

    var left = index + 1; // 设置双指针指向 index 后面部分的首位
    var right = len - 1;
    while (left < right) {
      var sum = nums[index] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([ nums[index], nums[left], nums[right] ]);

        // 去重，关键部分
        while (left < right && nums[left] === nums[left + 1]) { left++; }
        while (left < right && nums[right] === nums[right - 1]) { right--; }

        left++;
        right--; // 找到之后缩小查询空间
      } else if (sum > 0) {
        right--; // 大于0则说明右边数字大了
      } else if (sum < 0) {
        left++;
      }
    }
  }

  return result;
};
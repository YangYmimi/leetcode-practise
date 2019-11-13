/**
 * @param {number[]} nums
 * @return {number}
 */
// 给定一个包含 `n + 1` 个整数的数组 `nums`，其数字都在 1 到 n 之间（包括 1 和 n）
var findDuplicate = function(nums) {
  var n = nums.length - 1;
  var left = 0, right = n;

  while (left < right) {
    var count = 0; // 计数器
    var mid = (left + right + 1) >>> 1; // 中间数
    nums.forEach((num) => {
      if (num < mid) { // 查找小于 mid 的数的个数
        count++;
      }
    });

    if (count >= mid) { // 若个数大于等于 mid，则说明有重复
      right = mid - 1; // 左半区寻找，去除 mid 位置
    } else {
      left = mid;
    }
  }

  return left;
};
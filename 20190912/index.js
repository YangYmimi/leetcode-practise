/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var maxIndex = nums.length - 1;

  var left = 0, right = maxIndex, min = nums[0];
  while (left < right) {
    var mid = (left + right + 1) >>> 1;
    if (min < nums[mid]) { // 中位数比最小值大，则说明最小值至中位数之间数字逐渐变大，那么需要在另外一个半区查找
      left = mid + 1;
      if (nums[left] < min) { // 判断 mid + 1 位置是否比 min 小，相当于重新为右半区赋值走二分流程
        min = nums[left];
      }
    } else if (min > nums[mid]) { // 中位数比最小值小，则说明最小值至中位数之间数字可能存在转折点，那么需要在这个半区找
      min = nums[mid]; // 重新赋值
      right = mid - 1;
    } else { // 相等的情况?不知道在左边找还是右边找,这个时候将左边空间缩小一位，我们已经假设了 min = nums[0]
      // 若数组中不存在重复值，那么最左边元素一定不为最小值，而且不存在说 min = nums[mid] 的情况
      // 若数组中存在重复值，那么如果 min = nums[0] 就是我们要找的最小数，那么后面无论怎么寻找都找不到比 min 还小的数
      // 若数组中存在重复值，若 min = nums[0] 在之后寻找中还有比 `min` 更小的数，那么 `left = left + 1` 将整体空间缩小的方式，并将 min = nums[left]，设置为新的最小值（因为之后可能还会找到对应的最小值），不会将可能的最小值排除之外
      left = left + 1;
      min = nums[left];
    }
  }

  if (min > nums[left]) {
    min = nums[left];
  } // 一定要判断一下当left和right一样的情况下，while循环跳出，left这个位置的元素和min的大小

  return min;
};

/*
test case
[1,3]
[1,1,1,1]
[1,1,0,1]
[1,0,1,1,1]
[1,3,5]
[1,3,3,1]
[4,5,6,7,0,1,2]
[1,2,2,2,0,1,1]
*/
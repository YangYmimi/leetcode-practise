/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  var result = [];
  var sortedNums = nums.sort(function(a, b) {
    return a - b;
  }); // 升序排列
  var flag = 0, len = sortedNums.length; // 设置指针
  while (flag < len) {
    if (sortedNums[flag] == sortedNums[flag - 1] ) { // 与前面的元素相等，则避免重复计算，跳过该数字
      flag++;
      continue;
    }

    var left = flag + 1, right = len - 1; // 设置二分法左右指针
    while (left <= right) {
      var mid = (left + right) >>> 1; // 左中位数
      if (sortedNums[mid] - sortedNums[flag] === k) { // 相等
        result.push([sortedNums[flag], sortedNums[mid]]);
        break; // 退出循环
      } else if (sortedNums[mid] - sortedNums[flag] < k) { // flag位置固定，mid位置的数小了，则在右半区重新寻找mid
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // 本次未找到，进入下次循环
    flag++;
  }

  console.log(result);
  return result.length;
};
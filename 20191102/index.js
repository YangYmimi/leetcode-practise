/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  var len = A.length, flag = len - 1;
  var maxPerimeter = 0; // 记录最长周长

  if (len < 3) {
    return maxPerimeter;
  }

  var sortedA = A.sort(function(a, b) {
    return a - b;
  }); // 对边长数组进行排序, 递增排序

  // 从后往前遍历计算
  console.log(sortedA);
  while (flag - 2 >= 0) { // flag，flag - 1，flag - 2 组成三边
    console.log('flag: ', flag);
    if (sortedA[flag] < sortedA[flag - 1] + sortedA[flag - 2]) { // 两边之和大于第三边
      maxPerimeter = sortedA[flag] + sortedA[flag - 1] + sortedA[flag - 2];
      break;
    }

    flag--;
  }

  return maxPerimeter;
};
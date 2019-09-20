/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // 数组为空，最小数比目标数大
  if (matrix.length === 0 || matrix[0][0] > target) {
    return false;
  }

  var index = matrix.length - 1;
  while (index > 0) {
    if (matrix[index][0] <= target) { // 注意等号
      break;
    }

    index--;
  }

  return matrix[index][0] === target ? true : binarySearch(matrix[index], target);
};

var binarySearch = function(data, target) {
  if (data.length === 0) {
    return false;
  }

  var left = 0, right = data.length - 1;
  while (left < right) {
    var mid = (left + right + 1) >>> 1; // 无符号位右移找到右边中位数
    if (data[mid] === target) {
      return true; // 找到
    } else if (data[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // data[right] === target

  if (data[right] === target) {
    return true;
  }

  return false;
}
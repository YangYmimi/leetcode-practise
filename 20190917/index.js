/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(data) {
  // area = (indexY - indexX) * Math.min(x, y)
  var lens = data.length;
  var result = 0;
  for (var outIndex = 0; outIndex < lens; outIndex++) {
    for (var innerIndex = outIndex + 1; innerIndex < lens; innerIndex++) {
      var width = innerIndex - outIndex;
      var height = Math.min(data[innerIndex], data[outIndex]);
      result = Math.max(result, width * height);
    }
  }

  return result;
};

var maxArea = function(data) {
  var left = 0, right = data.length - 1, result = 0;
  while (left < right) {
    result = Math.max(result, (right - left) * Math.min(data[left], data[right]));
    data[left] > data[right] ? right-- : left++;
  }

  return result;
};
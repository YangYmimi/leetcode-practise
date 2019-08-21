/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result = [];
  var doLoop = true;
  nums.forEach((num, index) => {
    var vIndex = nums.indexOf(target - num);
    if (vIndex > -1 && vIndex !== index && doLoop) {
      result = [index, vIndex];
      doLoop = false;
    }
  });

  return result;
};
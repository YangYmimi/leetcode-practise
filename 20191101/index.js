/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var set1 = new Set(nums1);
  var set2 = new Set();

  for (let index = 0; index < nums2.length; index++) {
    if (set1.has(nums2[index])) {
      set2.add(nums2[index]);
    }
  }

  return Array.from(set2);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection2 = function(nums1, nums2) {
  // 利用 Set 去重，Array.filter() 方法过滤非交集元素
  return Array.from(new Set(nums1.filter((item) => {
    return nums2.includes(item);
  })))
};
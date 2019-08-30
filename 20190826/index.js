/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var oLength = strs.length; // 数组的总大小
  var longestCommonPrefixStr = strs[0] || ''; // 设第一个当作最长前缀

  for (var index = 1; index < oLength; index++) { // 从第二个数开始查
    while (!strs[index].startsWith(longestCommonPrefixStr)) { // 发现不存在则切割末尾
      longestCommonPrefixStr = longestCommonPrefixStr.substr(0, longestCommonPrefixStr.length - 1);
    }
  }

  return longestCommonPrefixStr;
};
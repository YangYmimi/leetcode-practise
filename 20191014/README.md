### 问题描述

> https://leetcode-cn.com/problems/permutations/

给定一个没有重复数字的序列，返回其所有可能的全排列。

```
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

### 思路

* 递归: `f(1, 2, 3... n) = { 第一位是1 + f(n-1) } + { 第一位是2 + f(n-1) } + ... + { 第一位是n + f(n-1) }`

从集合中依次选出每一个元素，作为排列的第一个元素，然后对剩余的元素进行全排列，如此递归处理，从而得到所有元素的全排列。

```
固定a，求后面bc的排列：abc，acb
固定b，求后面ac的排列：bac，bca
固定c，求后面ba的排列：cba，cab
```

```
/**
 * 递归法
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, begin, end) {
  if (begin === end) {
    for (var i = 0; i <= end; i++) {
      console.log(nums[i] + '');
    }

    return;
  }

  var swap = function(nums, a, b) {
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  for (var j = begin; j <= end; j++) {
    swap(nums, begin, j);
    permute(nums, begin + 1, end);
    swap(nums, begin, j);
  }
}
```

### Key Points

* https://leetcode-cn.com/problems/permutations/solution/quan-pai-lie-by-leetcode/


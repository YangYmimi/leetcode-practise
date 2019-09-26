### 问题描述

> https://leetcode-cn.com/problems/majority-element/

给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数 **大于** ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

```
输入: [3,2,3]
输出: 3

输入: [2,2,1,1,1,2,2]
输出: 2
```

### 思路

* 设数组长度为 `n`，众数是 `x` 那么存在 `Counts(x) > Math.ceil(n / 2)` 

* 先对数组排序，那么众数一定在 `n / 2` 的位置上

* 利用快速排序进行数组排序，找到 `n / 2` 的数

### Key Points

* 针对排序数组，众数一定在 `n / 2` 的位置上

### 官方解答

* [摩尔投票算法](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm)

http://www.cs.rug.nl/~wim/pub/whh348.pdf

这个真的吊!

```
// 利用栈作为存储，当然写完发现可以用变量作为存储
var majorityElementByBoyerMoore = function(nums) {
  var stack = [], i = 0, len = nums.length - 1; // stack 只存放同一个的元素,可以用变量代替
  while (i <= len) {
    if (stack.length === 0) { // stack 数组为空则push一个新的值进去
      stack.push(nums[i]);
    } else if (stack[0] !== nums[i]) {
      stack.pop();
    } else { // 当前元素和数组内元素一样
      stack.push(nums[i]);
    }

    i++;
  }

  return stack.pop();
};
```
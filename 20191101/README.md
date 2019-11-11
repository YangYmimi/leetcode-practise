### 问题描述

> https://leetcode-cn.com/problems/intersection-of-two-arrays/

给定两个数组，编写一个函数来计算它们的交集。

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
```

### 思路

* 利用 `Set` 元素不重复的特点，判断 nums1 中是否含有 nums2 的元素

* 利用 `Set` 和 `Array.prototype.filter()` 和 `Array.prototype.includes()` 方法

### Key Points

### 额外解答
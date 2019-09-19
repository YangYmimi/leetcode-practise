### 问题描述

> https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

### 思路

* 合并数组方式最简单，但是复杂度不满足题目要求

### Key Points

* `中位数` : 将一个集合划分为两个长度相等的子集，其中一个子集中的元素总是大于另一个子集中的元素。

* 中位数 mid = (m + n) / 2

* 若在 nums1 中取 i 个元素，则需要在 nums2 中取 j 个元素，将 i+j 个元素放到左边，则可以令 `m+n+1=(i+j)*2`

### 官方解答

* 官方：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-shu-b/

* 推荐：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/shuang-zhi-zhen-by-powcai/
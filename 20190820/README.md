### 问题描述

> https://leetcode-cn.com/problems/two-sum/

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

```
输入：nums = [2, 7, 11, 15], target = 9
输出：[0, 1]
原因：nums[0] + nums[1] = 2 + 7 = 9
```

### 思路

1. 遍历 nums, 得到 num
2. 记录 num 的 index
3. 用 target 和 num 做减法得到 res
4. 在 nums 中寻找 res 的 rIndex

### Key Points

1. 不可以重复利用同样的元素，即要求 ```rIndex != index```
2. 找到一组即返回

```
执行 : twoSum([2, 3, 4], 5)
返回 : [0, 1] 而非 [1, 0]
```
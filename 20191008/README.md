### 问题描述

> https://leetcode-cn.com/problems/3sum/

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 `a + b + c = 0` ？找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。

```
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

### 思路

* 给定条件 `a + b + c = 0`

* 先将数组排序，排序后循环遍历数组

* 给定当前遍历数为 `data[i]`，设置双指针指向 `left = i + 1` 和 `right = data.length`

* 若 `data[i] + data[left] + data[right] > 0` 则说明需要把 `right` 缩小，则 `right--`，反之 `left++`

### Key Points

* 利用 `index > 0 && nums[index] == nums[index - 1]` 判断重复情况

```javascript
while (left < right && nums[left] === nums[++left]) {}
while (left < right && nums[right] === nums[--right]) {}
```
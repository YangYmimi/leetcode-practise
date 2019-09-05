### 问题描述

> https://leetcode-cn.com/problems/search-insert-position/

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。可以假设数组中无重复元素。

```
示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0
```

### 思路

* set `left = 0`, `right = (array).length - 1`

* 设置循环条件 `while (left < right)` 后续可能会改这个条件

* 获得中间位 `mid = (left + right) >>> 1` 采用无符号右移方式，取得是左中间位

* 判断 `target === (array)[mid]` 是否相等

* 判断 `target < (array)[mid]` 是否成立，成立则 `right = mid` 剪掉右半区

* 判断 `target > (array)[mid]` 是否成立，成立则 `left = mid + 1` 剪掉左半区

* 最后验证，发现循环有问题，更新 `while (left <= right)`，修改 `right = mid - 1`

### Key Points

* 寻找 mid 位的写法

``` java
int mid = (left + right) / 2;

int mid = left + (right - left) / 2 ;

// 左边界索引 + 右边界索引，然后无符号右移 1 位
int lMid = (left + right) >>> 1; // 左中位数
int rMid = (left + right + 1) >>> 1; // 右中位数
```

* 排除中位数写法

```
if (排除中位数逻辑1) {
  left = mid + 1;
} else {
  right = mid;
}

if (排除中位数逻辑2) {
  right = mid -1 1;
} else {
  left = mid;
}
```

一个排除中位数，一个包含中位数

* 注意循环条件
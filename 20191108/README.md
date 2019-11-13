### 问题描述

> https://leetcode-cn.com/problems/pascals-triangle/

给定一个非负整数 `numRows`，生成杨辉三角的前 `numRows` 行

### 思路

```
[
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1]
]
```

1. 可以看出第 `n(n > 2)` 行第 `i` 个数为 `n-1` 行第 `i` 个数和第 `i-1` 个数的和

2. `i` 或者 `i-1` 任意一个不存在则用 0 代替

3. 第 `n` 行有 `n` 个数

### Key Points
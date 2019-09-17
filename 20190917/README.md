### 问题描述

> https://leetcode-cn.com/problems/container-with-most-water/

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

![图片](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```

### 思路

* 仔细读题目，设前面的一条线在数组中的索引是 indexX，值为 X，后一条线的索引是 indexY，值为 Y，且必有 indexY > indexX

* 则转换成 area = (indexY - indexX) * Math.min(x, y) 求 area 的最大值

### Key Points

* 尝试使用双指针解决呢?从左右两边开始计算面积，应用较高的线来寻找较长的范围，从而获得较大的面积。因此当左值较小时，左指针增加，右值较小时，右指针减小.

### 官方解答

https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-by-leetcode/
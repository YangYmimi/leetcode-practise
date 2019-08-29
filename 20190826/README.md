### 问题描述

> https://leetcode-cn.com/problems/longest-common-prefix/

编写一个函数来查找字符串（所有输入只包含小写字母 a-z）数组中的最长公共前缀。

如果不存在公共**前缀**，返回空字符串 ""。

```
输入: ["flower", "flow", "flight"]
输出: "fl"
```

```
输入: ["dog", "racecar", "car"]
输出: ""
解释: 输入不存在公共前缀。
```

### 思路

解法一:

* 最长公共前缀字符串应该尽可能找最长的子串
* 从字符串中最长子串开始遍历

解法二:

* 找到最小长度的字符串（最长前缀一定从这部分产生）
* 字符串二分法分别查找对应半区是否存在最长前缀，不存在直接丢弃

### Key Points

* `startWith` 可以快速判断前缀

### 官方解答

> https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode/
### 问题描述

> https://leetcode-cn.com/problems/palindrome-linked-list/

请判断一个链表是否为回文链表。

```
输入: 1->2
输出: false

输入: 1->2->2->1
输出: true
```

### 思路

* 回文链表一定是对称的

* 利用快慢指针找到链表的中点，将后半段的链表翻转

### Key Points

* 链表中点

* 边界特殊处理

### 额外解答
### 问题描述

> https://leetcode-cn.com/problems/validate-stack-sequences/

给定 pushed 和 popped 两个序列，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。

```
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

```
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
```

提示：

* 0 <= pushed.length == popped.length <= 1000
* 0 <= pushed[i], popped[i] < 1000
* pushed 是 popped 的排列。

### 思路

* pushed 数组为入栈顺序, popped 数组为出栈顺序

* pushed 数组按顺序入栈，每次入栈前判断 popped 数组首位是否与 pushed 数组当前栈顶元素一致，一致则 pushed 数组先出栈，直到 popped 数组首位元素与 pushed 数组栈顶元素不匹配，则执行入栈操作

* 最后看栈是否为空

### Key Points

* 对于数组的操作，最先想到栈去解决
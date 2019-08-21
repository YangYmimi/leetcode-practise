### 问题描述

> https://leetcode-cn.com/problems/reverse-integer/

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31, 2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

```
输入: 123
输出: 321

输入: -123
输出: -321

输入: 120
输出: 21
```

### 思路

* 确定 `x` 是否是负数
* 取 `x` 绝对值 `split()` 成数组
* 将分割后的数组 `reverse()`
* 重新合并反转后的数组，并根据之前判断出的正负将反转后的数还原
* 检测反转后的数字是否满足 32 位有符号整数的范围

### Key Points

* 注意正数，负数，0 三种情况
* 注意当原数末位是 `0` 的时候，`reverse` 之后首位为 `0`，需要去 `0` 直到第一个不为 `0` 的数

### 官方解答

> https://leetcode-cn.com/problems/reverse-integer/solution/zheng-shu-fan-zhuan-by-leetcode/

采用数字反转的方式，对 `x` 进行取余和整除操作，将整除后的值重新赋值给 `x`

```
//pop operation:
pop = x % 10;
x /= 10;

//push operation:
temp = rev * 10 + pop;
rev = temp;
```

注意判断 temp 的溢出问题
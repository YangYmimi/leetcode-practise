### 问题描述

> https://leetcode-cn.com/problems/palindrome-number/

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

```
输入: 121
输出: true

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

### 思路

* 找出无回文数的特殊情况
  - 负数肯定没有回文数
  - 个位数是 `0` 的也没有回文，但是这个不用刻意判断
* 原数字转为字符串 `x` 再转为数组，然后反转数组后拼接字符串，将字符串与原 `x` 进行比较

### Key Points

### 官方解答

不采用转成字符串方式

将数字对半分，然后后一半反转之后与前一半比较

```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  var revertedNumber = 0;
  while(x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
  // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
  // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
  return x == revertedNumber || x == Math.floor(revertedNumber / 10);
};
```
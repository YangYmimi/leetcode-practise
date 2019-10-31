### 问题描述

> https://leetcode-cn.com/problems/valid-palindrome/

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。本题中，我们将空字符串定义为有效的回文串。

```
输入: "A man, a plan, a canal: Panama"
输出: true

输入: "race a car"
输出: false
```

### 思路

* 设置首尾指针，首指针逐渐变大，尾指针逐渐变小，直到2个指针重合

### Key Points

* 本题，只考虑字母和数字的比较，所以标点需要处理掉

```javascript
s.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
```

### 额外解答

一行代码，字符串反转对比

```javascript
var isPalindrome = function(s) {
  return s.replace(/\W/g, '').toLowerCase().split('').reverse().join('') === s.replace(/\W/g, '').toLowerCase()
};
```
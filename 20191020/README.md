### 问题描述

> https://leetcode-cn.com/problems/single-number/

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

```
示例 1:

输入: [2,2,1]
输出: 1

示例 2:

输入: [4,1,2,1,2]
输出: 4
```

### 思路

* 利用对象可以解决（hash 表）

* 先排序，然后循环判断 `i` 和 `i+1` 元素的值是否一样，注意边界情况

### Key Points

### 额外解答

* 利用位运算：https://leetcode-cn.com/problems/single-number/solution/hua-jie-suan-fa-136-zhi-chu-xian-yi-ci-de-shu-zi-b/

规则：

- 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
- 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
- XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans = 0;
  for(const num of nums) {
    ans ^= num;
  }
  return ans;
};
```
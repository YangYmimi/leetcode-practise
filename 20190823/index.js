/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var maps = [
    { num: 1000, roman: 'M' },
    { num: 900, roman: 'CM' },
    { num: 500, roman: 'D' },
    { num: 400, roman: 'CD' },
    { num: 100, roman: 'C' },
    { num: 90, roman: 'XC' },
    { num: 50, roman: 'L' },
    { num: 40, roman: 'XL' },
    { num: 10, roman: 'X' },
    { num: 9, roman: 'IX' },
    { num: 5, roman: 'V' },
    { num: 4, roman: 'IV' },
    { num: 1, roman: 'I' }
  ];

  var result = '';
  var index = 0;
  while (index < 13) { // index 从 0 ~ 12 最多13个
    while (num >= maps[index].num) { // 大于等于则继续做分解操作
      num -= maps[index].num;
      result += maps[index].roman;
    }
    index++;
  }

  return result;
};
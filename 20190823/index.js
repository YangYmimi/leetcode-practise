/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var maps = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  };

  var step = 0, sum = 0;
  while (step < s.length) {
    var single = maps[s.substr(step, 1)]; // 取1个
    var multi = maps[s.substr(step, 2)]; // 取2个
    if (multi) {
      sum += multi;
      step += 2;
    } else {
      sum += single;
      step += 1;
    }
  }

  return sum;
};
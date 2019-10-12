/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(function (a) {
    return a * a;
  }).sort(function (l, r) {
    return l - r;
  });
};
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) {
    return [];
  }

  if (numRows == 1) {
    return [[1]];
  }

  if (numRows == 2) {
    return [[1], [1,1]];
  }

  // numRows > 3
  var result = [[1], [1,1]];
  var rowIndex = 2; // 第三行
  while (rowIndex < numRows) { // 遍历行数
    var rowArray = []; // 记录行
    for (let colIndex = 0; colIndex <= rowIndex; colIndex++) { // colIndex 记录列
      rowArray.push((result[rowIndex-1][colIndex] || 0 ) + (result[rowIndex-1][colIndex-1] || 0))
    }
    rowIndex++;
    result.push(rowArray);
  }

  return result;
};
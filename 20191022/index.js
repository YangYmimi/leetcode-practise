/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.helper = []; // 辅助空间，存最小值
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);

  var helperLength = this.helper.length;
  if (helperLength == 0 || x <= this.helper[helperLength - 1]) {
    this.helper.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.pop() == this.helper[this.helper.length - 1]) {
    this.helper.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.helper.length > 0 ? this.helper[this.helper.length - 1] : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
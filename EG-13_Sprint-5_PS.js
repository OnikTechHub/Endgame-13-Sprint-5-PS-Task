// 01. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

let nums = [1, 1, 2];
let result = checkSubarraySum(nums);
console.log("Expected Output: 2");

// 02. Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

let numsArr = [-1, 0, 3, 5, 9, 12];
let targetVal = 9;
console.log("Expected Output: 4");

// 03. Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

let numsArr3 = [1, 3, 5, 6];
let targetVal3 = 5;
console.log("Expected Output: 2");

// 04. Maximum Depth of Binary Tree

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log("Expected Output: 3");



// 05. Invert Binary Tree

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

if (typeof TreeNode === "undefined") {
  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let rootTree = new TreeNode(4);
rootTree.left = new TreeNode(2);
rootTree.right = new TreeNode(7);
rootTree.left.left = new TreeNode(1);
rootTree.left.right = new TreeNode(3);
rootTree.right.left = new TreeNode(6);
rootTree.right.right = new TreeNode(9);

let invertedRoot = invertTree(rootTree);

function treeToArray(node) {
  if (!node) return [];
  let result = [];
  let queue = [node];
  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr) {
      result.push(curr.val);
      queue.push(curr.left);
      queue.push(curr.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

console.log("Expected Output: [4, 7, 2, 9, 6, 3, 1]");




// 06. Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let res = new Array(n);

    
    res[0] = 1;
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] = res[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return res;
};

let nums6 = [1, 2, 3, 4];
console.log("Expected Output: [24, 12, 8, 6]");



// 07. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    
    function reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};


let nums7 = [1, 2, 3, 4, 5, 6, 7];
let kVal = 3;
rotate(nums7, kVal);

console.log("Expected Output: [5, 6, 7, 1, 2, 3, 4]");




// 08. Min Stack


/**
 * @return {void}
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = []; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
   
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

let output1 = minStack.getMin();
minStack.pop();
let output2 = minStack.getMin(); 

console.log("Expected Output: [-3, -2]");
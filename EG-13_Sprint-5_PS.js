
// 01. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
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

console.log(checkSubarraySum([1, 1, 2]));


// 02. Binary Search


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
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

console.log(search([-1, 0, 3, 5, 9, 12], 9));




// 03. Search Insert Position


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
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

console.log(searchInsert([1, 3, 5, 6], 5));




// 04. Maximum Depth of Binary Tree


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

let root04 = new TreeNode(3);
root04.left = new TreeNode(9);
root04.right = new TreeNode(20);
root04.right.left = new TreeNode(15);
root04.right.right = new TreeNode(7);

console.log(maxDepth(root04));


// 05. Invert Binary Tree
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

let root05 = new TreeNode(4);
root05.left = new TreeNode(2);
root05.right = new TreeNode(7);
root05.left.left = new TreeNode(1);
root05.left.right = new TreeNode(3);
root05.right.left = new TreeNode(6);
root05.right.right = new TreeNode(9);

let invertedRoot = invertTree(root05);

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

console.log(treeToArray(invertedRoot));


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

console.log(productExceptSelf([1, 2, 3, 4]));



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

let arr07 = [1, 2, 3, 4, 5, 6, 7];
rotate(arr07, 3);
console.log(arr07);



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

MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
let m1 = minStack.getMin();
minStack.pop();
let m2 = minStack.getMin();
console.log([m1, m2]);



// 09. Continuous Subarray Sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum_09 = function(nums, k) {
    let map = new Map();
    map.set(0, -1);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (k !== 0) {
            sum %= k;
        }
        if (map.has(sum)) {
            if (i - map.get(sum) >= 2) {
                return true;
            }
        } else {
            map.set(sum, i);
        }
    }
    return false;
};

console.log(checkSubarraySum_09([23, 2, 4, 6, 7], 6));


// 10. Daily Temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let answer = new Array(n).fill(0);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
//* 1186. Maximum Subarray Sum with One Deletion
// https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/description/
var maximumSum = function (arr) {
    const n = arr.length;
    const left = new Array(n);
    const right = new Array(n);

    // left kadane's
    left[0] = arr[0];
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(arr[i], left[i - 1] + arr[i]);
    }
    console.log("left", left)

    // right kadane's
    right[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(arr[i], right[i + 1] + arr[i]);
    }
    console.log("right", right)


    let result = left[n - 1];
    console.log("result", result)

    for (let i = 0; i < n; i++) {
        // dono sides hain
        if (i > 0 && i < n - 1) {
            result = Math.max(result, left[i - 1] + right[i + 1]);
        }
        // sirf left side (i last element hai ya right negative se worse)
        if (i > 0) {
            result = Math.max(result, left[i - 1]);
        }
        // sirf right side
        if (i < n - 1) {
            result = Math.max(result, right[i + 1]);
        }

    }

    return result;
};
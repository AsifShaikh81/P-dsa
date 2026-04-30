//* 152. Maximum Product Subarray
https://leetcode.com/problems/maximum-product-subarray/description/?utm_source=chatgpt.com

let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    // Tino options mein se max aur min nikalo
    let tempMax = Math.max(curr, maxProd * curr, minProd * curr);
    let tempMin = Math.min(curr, maxProd * curr, minProd * curr);

    maxProd = tempMax;
    minProd = tempMin;

    result = Math.max(result, maxProd);
  }

  return result;
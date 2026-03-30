
// https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1
/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    
     longestKSubstr(s, k) {
    let left = 0;
    let maxLen= - 1; // if no ans found it will return maxLen that is -1
    let freq = {}; // simple object instead of Map

    for (let right = 0; right < s.length; right++) {

      // 👉 add character
      let char = s[right];
      // if string is there in map inc its coutn by 1 else intialize it by 1
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }

      // 👉 shrink window if more than k unique chars
      while (Object.keys(freq).length > k) {
        let leftChar = s[left];

        freq[leftChar]--;

        if (freq[leftChar] === 0) {
          delete freq[leftChar];
        }

        left++;
      }

      // 👉 update answer if exactly k unique chars
      if (Object.keys(freq).length === k) {
        let windowSize = right - left + 1;
        if (windowSize > maxLen) {
          maxLen = windowSize;
        }
      }
    }

    return maxLen;
  }
     
}

// https://leetcode.com/problems/happy-number/
//* Happy number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function check(num){
  let sum = 0 
  while(num>0){
    let digit = num%10 // last digit
    sum = sum + digit * digit // square and add
    num = Math.floor(num/10) // remove last digit 
    
  }
  return sum 
  
}
// both pointer at n 
let slow = n 
let fast  = n 
while(fast!=1){
slow = check(slow)
fast = check(fast)
fast = check(fast)
if(slow==fast && slow!=1) return false

}
return true


};
// dry run - https://chatgpt.com/c/69df50e7-6f38-8320-92e7-9f3eb64e47c9
// 1. Given a number check if it is pos, neg or zero
function check (num){
    if(num <0) {
    return "negative"
    }
    else if(num==0) {
    return "Zero"
    }
    else  {
    return "positive"
    }
}

let result1 = check(0)
console.log(result1)

// 2.check if num is odd or even

// n % 2 = 1, so n is odd.
// n % 2 = 0, so n is even.

function EO (num){
    if(num % 2 == 1){
        return "odd number"
    }
    else {
        return "even number"
    }
}
// sum of  all odd number in array  
let arr = [1,2,3,4,5]
function sumofodd(arr){
let odd =0
for(let i =0; i<=arr.length; i++){
    if(arr[i]%2 ==1){
        odd = odd + arr[i]
    }
    
}
return odd
}
console.log(sumofodd(arr))

// sum of  all odd number in array using recursion
// index-> 0 1 2 3 4 
let arr2 = [1,2,3,4,5]
//           4 
function sum(n){
// if n hit 0 return element at zero index
if(n == 0 ) return arr2[n]
//    5   +  4-1
   return  arr2[n]+sum(n-1)
}

console.log(sum(arr2.length-1))

// arr.length ->5
// arr.length-1 ->4 , we have to do this bcz arr start from 0



let result2 = EO(97)
console.log(result2)

 3//take two number as input and print which one is greater or if they are equal

function two(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater`;
    } else if (num2 > num1) {
        return `${num2} is greater`;
    } else {
        return "Both numbers are equal";
    }
}

let result3 = two(10, 100);
console.log(result3);

// -----------------------string----------------
1//Check empty string
let s1 = ["A","S","I","F"]
let empty1 = []

function CES(arr){
      if(arr.length === 0) {
        return "array is empty";
    }
for(let i=0; i<arr.length ; i++){
    if(arr[i]===""){
        return "empty string"
    }else {
        return s
    }
}
}

let result4 = CES(empty1)
console.log(result)

2//Check string length is greater than 5 or not
let s = ["A","S","I","F"]
let empty = []

function CSL (arr){
    for(let i = 0; i<arr.length ; i++){
        if(arr.length > 5){
            return "string is greater than 5"
        }else {
            return "string is less than 5"
        }
            
    }
}


let result5 = CSL(s)
console.log(result5)

3//Check vowel ,consonant


function VC (str){
  let ch = str[0].toLowerCase(); // getting first character
  if("aeiou".includes(ch)){
      return "vowel"
  }else {
      return "consonant"
  }
    
}


// let result = VC("Asif")
let result = VC("Boy")
console.log(result)

// --------------------------------------------------------------

1//print 1 to n

let n1 = 5 
for (let i =0 ; i <=n1 ; i++){
    console.log(i)
}

2 //print sum of 1 to n
let n2= 5
let i =1
let sum =0
while( i<=n2){
sum = sum +i
i++
console.log(sum)
}

3//print factorial of n 
5*4*3*2*1
let num = 5
let fact
for(fact = 1 ; num > 1 ; num--){
    `     1  * 5 =5
     5   5 * 4 =20
     20  20 * 3 = 60
     60  60 * 2 = 120
     `
    fact = fact * num
    console.log(fact)
}

//* fact using  recur
let facto = (n)=>{
    if(n == 1) return 1
    return n * facto(n-1)
}

console.log(facto(5))


//* sum of n
let sumOf = (n) => {
    if(n==0) return 0
  return n + sumOf(n-1)

}
console.log(sumOf(5))

4// Reverse number

function reverseNum(num){
    if(num>0 && num<9){
        return num 
    }
    // condition run only when num is not equal to 0
    let reverse = 0
    while(num!=0){ 
         //321
        reverse = reverse * 10 + (num%10) //0*10 + 123%10
        //1
        num = Math.floor(num/10) //123 / 10 --> 12.3 ---> 12 
    }
    return reverse
}
let res = reverseNum(7894)
// let res = reverseNum(8)
console.log(res)

5//Count the number of digits in a given number using a do-while loop.

let n = 78428
let count = 0 
do {
count++
n = Math.floor(n/10)

}while(n>0)

console.log("digits", count)

//using while loop - count digit
function count(x){
    let count = 0
while(x>0){
    count ++
    x = Math.floor(x/10)
    
}
return count
}

console.log(count(456987))
//using while loop - count digit
function C(num){
    let count =0 
  while(num!=0){
    num = Math.floor(num/10)
    count++
 }
 return count
}
      

console.log(C(46575))



//* is palindrome
function isPalindrome(x){
let rev = 0
xCopy = x // copy org val of x for later comparison
while(x>0){
    let rem = x%10 // getting last number 
    rev = (10*rev) + rem // storing last num in rev
    x = Math.floor(x/10) // removing the last digit
}
if(rev === xCopy){
    return true 
}else{
   return false
}

}


console.log(isPalindrome(121))

//*armstrong
// https://youtu.be/svIVWXvA1dk?si=4b7L0m0TqI-cd4Tl
function Armstrong(x){
    let noOfDigit = x.toString().length // getting len of digit
    let xCopy = x // stroring copy for later comparison
    let sum =0 // to sum
    // lopp run hoga jab tak x>0
    while(x>0){
     let rem = x%10 // getting last digit 153/10 -> 3
     sum = sum + rem**noOfDigit  // adding 
     // getting digit before decimal 
     x = Math.floor(x/10) // 153 -> 15.3 -> 15
     
    }
    if(sum ===xCopy){
        return "Armstrong"
    }else {
        return "not an Armstrong"
    }
}

console.log(Armstrong(1634))


//*Check for prime muber from 1 to n
//https://www.youtube.com/watch?v=-emuDW_0hKQ
function isPrime(num){
    // if num is greater than 1 than only run loop 
    // bcz 1 is not prime
    if(num>1){
        for(let i=2; i<num; i++ ){
    // num%i-> if after div gives 0 than its not prime number
            if(num%i ==0){
                return "not a prime number"
            }else {
                return "prime"
            }
            
            
        }
    }
}
console.log(isPrime(5))

//* print all divisors/factors of num
function divisor(num) {
    let arr = [];
// num%i -> if after dividing gives 0 than divisor found
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }

    return arr;
}

console.log(divisor(36));


//*print hcf or gcd of number
function divisor(num1,num2) {
    let hcf = 0

    for (let i = 1; i <= num1 && i<=num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i 
        }
    }

    return hcf
}

console.log(divisor(36,54));
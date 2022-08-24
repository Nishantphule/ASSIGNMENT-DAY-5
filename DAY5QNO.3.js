// QUESTION NO.- 3
// Do the below programs in arrow functions.

// a.Print odd numbers in an array.

// CODE-
let getodd = (arr) => {
    let odd =[]
      for(let i in arr)
    if (arr[i] % 2 !== 0)
          odd.push(arr[i]);
          return odd;
      }
      console.log(getodd([2, 4, 9, 7, 17, 26]))

// OUTPUT-
// (3) [9, 7, 17]



// b.Convert all the strings to title caps in a string array.

// CODE-
 let gettitleCase = (str) => {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      }
      return str.join(' ');
    }
    console.log(gettitleCase("welcome to guvi"));

// OUTPUT-
// Welcome To Guvi



// C.Sum of all numbers in an array.

// CODE-
  let getsum = (arr) => {
    let sum = 0
    for (var i = 0; i < arr.length; i++) {
     sum+=arr[i]
    }
    return sum;
  }
  console.log(getsum([2,4,5,6,8,10]));

// OUTPUT-
// 35



// d.Return all the prime numbers in an array.

// CODE-
let getPrime = (arr)=>{
  let prime = []
  for (var i = 0; i<arr.length; i++){
  var count = 0
  for(var j=1;j<=arr[i];j++){
   if(arr[i]%j===0)
  count++;}
  if(count===2){
  prime.push(arr[i])}}
  return prime;
}
console.log(getPrime([2,4,5,6,8,10,13,14,17,22,23]));


// OUTPUT-
// (5) [2, 5, 13, 17, 23]



// e.Return all the palindromes in an array.

// CODE-
let getpalindromes = (arr)=>{
  let num = arr.join().split(",")
  let palindromes = []
  for (var i = 0; i<num.length; i++){
  let p = num[i].split("").reverse().join("")
  if(p===num[i]){
  palindromes.push(arr[i])}}
  return palindromes;
  }
console.log(getpalindromes([121,343,556,678,999,828,543]));

// OUTPUT-
// (4) [121, 343, 999, 828]



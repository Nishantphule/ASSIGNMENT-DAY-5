// QUESTION NO. - 1
// Do the below programs in anonymous function & IIFE.

// a.Print odd numbers in an array.

// ANONYMOUS FUNCTION-
// CODE-

let getodd = function (arr)
{let odd =[]
    for(let i in arr)
  if (arr[i] % 2 !== 0)
        {odd.push(arr[i]);}
    return odd}
    console.log(getodd([2, 4, 9, 7, 17, 26]))

// OUTPUT-
[9, 7, 17]


// IEFE-
// CODE-
(function (arr) {let odd = [];
     for(let i in arr)
      {if (arr[i] % 2 !== 0)
          {odd.push(arr[i]);}}
         
          console.log(odd);})
          ([2, 4, 9, 7, 17, 26])

// OUTPUT-
// (3) [9, 7, 17]



// b.Convert all the strings to title caps in a string array.

// ANONYMOUS FUNCTION-
// CODE-
let gettitleCase = function (str)
{str = str.split(' ');
for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(gettitleCase("welcome to guvi"));

// OUTPUT-
// Welcome To Guvi


// IEFE-
// CODE-
function titleCase(str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(titleCase("welcome to guvi"));

// OUTPUT-
// Welcome To Guvi



// c.Sum of all numbers in an array.

// ANONYMOUS-
// CODE-
let getsum = function (arr){
let sum = 0
    for (var i = 0; i < arr.length; i++) {
     sum+=arr[i]
    }
    return sum;
  }
  console.log(getsum([2,4,5,6,8,10]));

// OUTPUT-
// 35


// IEFE-
// CODE-
function getsum(arr) {
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

// ANONYMOUS-
// CODE-
let getPrime = function (arr){
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


// IEFE-
// CODE-
function getPrime(arr) {
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

// ANONYMOUS-
// CODE-
let getpalindromes = function (arr){
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


// IEFE-
// CODE-
function getpalindromes(arr) {
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



// f.Return median of two sorted arrays of the same size.

// ANONYMOUS-
// CODE-
let getmedian = function (arr1,arr2){
  let arr = [...arr1,...arr2].sort()
  // as we have same size array. we will divide the length by 2 ,to get the median elements
  // arr.length/2 will be the nth index median and n-1
  let n = arr.length/2
  var m1 = n
  var m2 = n-1
  // to get median add both index and divide by 2
  var median = arr[m1]+arr[m2]/2
  return median;
}
console.log(getmedian([2,3,4],[6,7,9]));

// OUTPUT-
// 8


// IEFE-
// CODE-
function getmedian(arr1,arr2) {
    let arr = [...arr1,...arr2].sort()
    // as we have same size array. we will divide the length by 2 ,to get the median elements
    // arr.length/2 will be the nth index median and n-1
    let n = arr.length/2
    var m1 = n
    var m2 = n-1
    // to get median add both index and divide by 2
    var median = arr[m1]+arr[m2]/2
    return median;
  }
  console.log(getmedian([2,3,4],[6,7,9]));

// OUTPUT-
// 8



// g.Remove duplicates from an array.

// ANONYMOUS-
// CODE-
let removeDuplicates = function (arr){
  let Array = []
  for(let i = 0;i<arr.length;i++){
  if(arr[i]!==arr[i-1]){
  Array.push(arr[i])}}
  return Array;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 4, 5, 5]));

// OUTPUT-
// (5) [1, 2, 3, 4, 5]


// IEFE-
// CODE-
function removeDuplicates(arr) {
    let Array = []
    for(let i = 0;i<arr.length;i++){
    if(arr[i]!==arr[i-1]){
    Array.push(arr[i])}}
    return Array;
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]));

// OUTPUT-
// (5) [1, 2, 3, 4, 5]



// h.Rotate an array by k times.

// ANONYMOUS-
// CODE-
let Rotate = function (arr,k){
  let n = arr.length
  let arr1 = arr.slice(n-k)
  let arr2 = arr.slice(0,n-k)
  var Array = [...arr1,...arr2]
  return Array
}
console.log(Rotate([1, 2, 3, 4, 5],3));

// OUTPUT-
// (5) [3, 4, 5, 1, 2]


// IEFE-
// CODE-
function Rotate(arr,k) {
    let n = arr.length
    let arr1 = arr.slice(n-k)
    let arr2 = arr.slice(0,n-k)
    var Array = [...arr1,...arr2]
    return Array
  }
  console.log(Rotate([1, 2, 3, 4, 5],3));

// OUTPUT-
// (5) [3, 4, 5, 1, 2]







/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  //base case
  if(i === nums.length) return 1;
  
  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longWord=0) {
  //base case
  if(i === words.length) return longWord;

  longWord = Math.max(words[i].length, longWord);
  return longest(words, i+1, longWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr="") {
  //return str.split('').map((ltr, i) => (i % 2 === 0) ? ltr : "").join("");
  if (i >= str.length) return newStr;
  newStr += str[i];
  return everyOther(str, i + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let left = i;
  let right = str.length - i - 1;
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;

  if(val === arr[i]) return i;
  return findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, strRev="", i=0) {
  if(strRev.length === str.length) return strRev;
  strRev += str[str.length - 1 - i]
  return revString(str, strRev, i+1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for(let key in obj){
    if(typeof obj[key] === 'string') strings.push(obj[key]);
    if(typeof obj[key] === 'object') strings.push(...gatherStrings(obj[key]));
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if(left > right) return -1;

  let middle = Math.floor((right+left)/2);
  if(arr[middle] === val) return middle;
  if(arr[middle]>val) return binarySearch(arr, val, left, middle-1)
  return binarySearch(arr, val, middle+1, right);

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

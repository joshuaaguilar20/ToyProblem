Skip to content
Search…
All gists
Back to GitHub
New gist
@joshuaaguilar20 
@CraigRodrigues CraigRodrigues/toyProblems.js
Last active 2 years ago • 
0
0
 Code  Revisions 2
 
<script src="https://gist.github.com/CraigRodrigues/22b9f310bdb6d5eea9f6f15ed34171fb.js"></script>
  
Toy Problems #1
 toyProblems.js
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */
 
/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
 
var allAnagrams = function(string) {
  
  function findAnagrams(start, stringRemainder) {
    if (stringRemainder.length === 1) {
      return [start + stringRemainder];
    } else {
      let results = [];
      for (let i = 0; i < stringRemainder.length; i++) {
        let anagram = findAnagrams(stringRemainder[i], stringRemainder.substr(0, i) + stringRemainder.substr(i + 1));
        for (let j = 0; j < anagram.length; j++) {
          results.push(start + anagram[j]);
        }
      }
      
      return results;
    }
  }
  
  return findAnagrams('', string);
};
 
var anagrams = allAnagrams('abc');
console.log(anagrams);

--------

/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */
  
var characterFrequency = function(string) {
  let charHash = {};
  let results = [];
  for (let char of string) {
    char in charHash ? charHash[char]++ : charHash[char] = 1;
  }
  
  for (let letter in charHash) {
    results.push([letter, charHash[letter]]);
  }
  
  results.sort((a,b) => b[1] - a[1]);
  results.sort(function (a, b) {
    if (a[1] === b[1] && a[0] > b[0]) {
        return 1;
    }
  });
  
  return results;
};

---------

/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */
 
var sumArray = function(array) {
  let greatestSum = 0;
  let currentSum = 0;

  array.forEach(num => {
    if (num + currentSum > greatestSum) {
      greatestSum = num + currentSum;
    }
    
    if (num + currentSum < 0) {
      currentSum = 0;
    } else {
      currentSum += num;
    }
  });

  return greatestSum;
};
 @joshuaaguilar20
   
 


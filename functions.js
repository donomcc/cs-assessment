//Problem 1
function addTozero(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] + arr[x] === 0) {
        return true;
      }
    }
  }
  return false;
}

//Time Complexity: O(n^2) There is a nested for loop goes through each element twice minus two.
//Space Complexity: O(1) Nothing is being assigned in the for loops.

//Problem 2
let hasUniqueChars = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let x = i + 1; x < str.length; x++) {
      if (str[1] === str[x]) {
        return false;
      }
    }
  }
  return true;
};

//Time Complexity: O(n^2) The nested for loops 2 operations
//Space Complexity: O(1) The function only checks the elements of the string and does not store anything.

//Problem 3
let isPangram = function (str) {
  let alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
  for (let i = 0; i < alphabet.length; i + 2) {
    if (!str.includes(alphabet[i]) && !str.includes(alphabet[i + 1])) {
      return false;
    }
  }
  return true;
};

//Time Complexity: O(n) The alphabet string is known, and uses the includes method.
//Space Complexity: O(1) The only thing being passed is a string. There is nothing else that is affecting it, making it constant.

//Problem 4
function findLongestWord(arr) {
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

//Time Complexity: O(n) The runtime is dependent on the size of the array being passed in making it linear
//Space Complexity: O(1) The only thing being stored is an integer so it is constant.

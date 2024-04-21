console.log("1.Print Odd Numbers in an Array:");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = (function(arr) {
    for (let ind in arr) {
        if (array[ind]% 2 !== 0) {
            console.log(array[ind]);
    
        }
    }
})(array);
printOddNumbers;
console.log("--------------------");
console.log("2.Convert all the Strings to Title Caps in a String Array");
const stringsArray = ["all the best", "hard work is the best way of success", "never lose"];
const titleCapsArray = [];

(function(arr) {
    for (let str of arr) {
        let titleCaseString = "";
        let capitalizeNext = true;

        for (let char of str) {
            if (capitalizeNext) {
                titleCaseString += char.toUpperCase();
                capitalizeNext = false;
            } else {
                titleCaseString += char.toLowerCase();
            }
            if (char === ' ') {
                capitalizeNext = true;
            }
        }

        titleCapsArray.push(titleCaseString);
    }
})(stringsArray);

console.log(titleCapsArray);  
console.log("--------------------");
console.log("3.Sum of all Numbers in an Array");
const array1 = [10, 24, 90, 45, 59];

const sum = (function(arr) {
    let total = 0;
    for (let num=0; num<array1.length; num++) {
        total += array1[num];
    }
    return total;
})(array1);

console.log(sum);
console.log("--------------------");
console.log("4.Return all the Prime Numbers in an Array")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function(arr) {
    return arr.filter(function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numbers);

console.log(primeNumbers);
console.log("--------------------");
console.log("5.Return all the Palindromes in an Array:")
const arr = ["level", "hello", "radar", "world", "noon", "madam"];

const palindromes = (function() {
    return arr.filter(function(word) {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
})();

console.log(palindromes);
console.log("--------------------");
console.log("6.Return Median of Two Sorted Arrays of the Same Sfize:")
const array2 = [1, 2, 3, 8];
const array3 = [9, 5, 7, 4];
const medianValues = (function(arr1, arr2)  {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = (arr1.length + arr2.length) / 2;
    return (mergedArray[Math.floor(mid)] + mergedArray[Math.ceil(mid)]) / 2;
})(array2,array3 );

console.log(medianValues);
console.log("--------------------");
console.log("7.Remove Duplicates from an Array:")
let num = [1, 2, 3, 4, 4, 5, 6, 6, 19, 19, 30];
let uniqueArr = (function(arr) {
    let seen = {};
    let result = [];
    for (let i in arr) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
})(num);

console.log(uniqueArr); 
console.log("--------------------");
console.log("8.Rotate an Array by k Times")
const array4 = [1, 2, 3, 4, 5, 9, 6, 10];
const k = 4;
const rotateArrayByIIFE = (function(arr, k) {
    const rotatedArray = [];
    const len = arr.length;
    k = k % len;
    for (let i = 0; i < len; i++) {
        rotatedArray[(i + k) % len] = arr[i];
    }

    return rotatedArray;
})(array4, k);

console.log("Original array4:", array4);
console.log("Rotated array by k (IIFE):", rotateArrayByIIFE);
console.log("--------------------");
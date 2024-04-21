console.log("1.Print Odd Numbers in an Array:");
let array = [1, 4, 5, 7, 9, 10, 11]
const printOddNumbers = arr => {
    for(num of array){
        if(num % 2 !== 0)
        console.log(num)
    }
}
printOddNumbers(array);
console.log("--------------------");
console.log("2.Sum of all Numbers in an Array");
const stringsArray = ["hello world", "good morning", "how are you"];
const titleCapsArray = [];

const convertToTitleCaps = (arr) => {
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
};

convertToTitleCaps(stringsArray);
console.log(titleCapsArray);
console.log("--------------------"); 
console.log("3.Sum of all Numbers in an Array")
const array1 = [1, 2, 3, 40, 55];

const sum = (arr)=> {
    let total = 0;
    for (let num=0; num<array1.length; num++) {
        total += array1[num];
    }
    return total;
};

console.log(sum(array1));
console.log("--------------------");
console.log("4.Return all the Prime Numbers in an Array")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 19, 23];

const primeNumbers = numbers.filter((num)=> {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(primeNumbers);
console.log("--------------------");
console.log("5.Return all the Palindromes in an Array:");
const arr = ["level", "hello", "radar", "world", "civic", "moon"];

const palindromes = arr.filter((word)=> {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
});

console.log(palindromes);
console.log("--------------------");
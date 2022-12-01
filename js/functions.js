//difference
const diffence = (num1, num2) => {
    return num1 - num2
}
console.log(diffence(5,3));

//product
const product = (num1, num2) => {
    return num1 * num2;
}
console.log(product(5,5))

//printDay
function printDay(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return undefined;
  }
}
console.log(printDay(4));
console.log(printDay(8));

//lastElement
const lastElement = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
    }
console.log(lastElement([1, 2, 3, 4]));

//numberCompare
const numberCompare = (num1, num2) => {
    if (num1 > num2) {
        return "First is greater.";
    } else if (num2 > num1) {
        return "Second is greater.";
    } else {
        return "Numbers are equal.";
    }
}
console.log(numberCompare(1, 1));
console.log(numberCompare(2, 1));
console.log(numberCompare(1, 2));

//singleLetterCount
const singleLetterCount = (word, letter) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}
console.log(singleLetterCount("amazing", "A"));
console.log(singleLetterCount("Rithm School", "o"));

//multipleLetterCount
const multipleLetterCount = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (obj[letter]) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }
    return obj;
}
console.log(multipleLetterCount("hello"));
console.log(multipleLetterCount("person"));

//arrayManipulation
const arrayManipulation = (arr, command, location, value) => {
    if (command === "remove") {
        if (location === "end") {
            return arr.pop();
        } else if (location === "beginning") {
            return arr.shift();
        }
    } else if (command === "add") {
        if (location === "beginning") {
            arr.unshift(value);
            return arr;
        } else if (location === "end") {
            arr.push(value);
            return arr;
        }
    }
}

console.log(arrayManipulation([1, 2, 3], "remove", "end"));
console.log(arrayManipulation([1, 2, 3], "remove", "beginning"));
console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20));
console.log(arrayManipulation([1, 2, 3], "add", "end", 30));

//isPalindrome
const isPalindrome = (str) => {
let word = str.toLowerCase();
let reverse = word.split("").reverse().join("");
return word === reverse;

}
console.log(isPalindrome('testing')); 
console.log(isPalindrome('tacocat')); 
console.log(isPalindrome('hannah'));
console.log(isPalindrome('robert')); 

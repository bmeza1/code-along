// 1. In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.

function countNumbers (arrayOfNumbers){
    let counterArray = []
    arrayOfNumbers.forEach((numberFromArray) =>
        counterArray[numberFromArray] =
            counterArray[numberFromArray] ? counterArray[numberFromArray] + 1 : 1)
    return counterArray
}

console.log(countNumbers([3,2,3,5,4,3,5]))

// ternary operator
// like an IF, ELSE statement
// used when assigning values
// boolean expression ? value if true : value if false
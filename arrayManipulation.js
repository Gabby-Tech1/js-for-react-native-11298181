// Task 1
function processArray(number){
    let arr = []

    for (let i of number) {
        if (i % 2 === 0) {
            arr[arr.length] = i ** 2
        }
        else{
            arr[arr.length] = i * 3
        }
    }

    return arr
}

// Test the code
console.log(processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))



// Task 2
function formatArrayStrings(string, number) {
    let stringArr = []

    for (let i = 0; i < string.length; i++) {
        let str = string[i]
        let num = number[i]

        if (num % 2 === 0) {
            stringArr[stringArr.length] = str.toUpperCase()
        } else {
            stringArr[stringArr.length] = str.toLowerCase()
        }
        
    }

    return stringArr
}
// Test the code

console.log(formatArrayStrings(["hello", "world", "how", "are", "you"], processArray([1, 2, 3, 4, 5])))

module.exports = {
    processArray,
    formatArrayStrings
};
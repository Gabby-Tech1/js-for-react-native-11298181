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

// map
function map(array, callBack) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callBack(array[i], i, array))
    }
    return newArray  
}

// forEach
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}

// find 
function find(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return array[i]
        }
    }
    return undefined
}

// findIndex
function findIndex(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i
        }
    }
    return -1
}

// reduce
function reduce(array, callbackfn, initialValue) {
    let previous = initialValue
    for (let i = 0; i < array.length; i++) {
        previous = callbackfn(previous, array[i], i, array)
    }
    return previous
}

// filter
function filter(array, predicate) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}

// Give 2 arrays a and button. Merge a to b and print the new array.
function merge(a, b) {
    const newArray = b
    for (let i = 0; i < a.length; i++) {
        newArray.push(a[i])
    }
    return newArray
}

const a = ['a', 'b', 'c']
const b = [1, 2, 3]
console.log(merge(a, b))


// Give an array of number data. Print "Yes" if all elements of array is even number, otherwise print "No" 
function every(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        if (!callBack(array[i])) {
            return 'No'
        }
    }
    return 'Yes'
}

function isEven(number) {
    return number % 2 === 0
}

const data2 = [-2, -1, 1, 2, 4, 5, 6, 8, 10, 2]
console.log(every(data2, isEven))


// Give an array of number data. Print "Yes" if at some element of array is even number, otherwise print "No"
function some(array, callBack) {  
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i])) {
            return 'Yes'
        }
    }
    return 'No'
}

console.log(some(data2, isEven));


// Give an array of number data. Find all positive numbers in the array, print a new array of positive numbers.
function isPositive(number) {
    return number > 0
}

console.log(filter(data2, isPositive));


// Give an array of number data. Find the first positive number in the array, print the index of that number.
// and the number as format "{index} {value}". If there is no positive number, print "No result".
function findPositive(array) {
    if (findIndex(array, isPositive) === -1 || find(array, isPositive) === undefined) {
        return 'No result'
    }
    return findIndex(array, isPositive) + ' ' + find(array, isPositive)
}

console.log(findPositive(data2))


// Give an array of number data. Use forEach to print all elements of the array that are divisible by 5.
forEach(data2, function(value, index, array) {
    if (value % 5 === 0) {
        console.log(value)
    }
})


// Give an array of number data. Find and print first index of value 2 and last index of value 2 in the array.
function lastIndexOf(array, value) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

if (indexOf(data2, 2) !== -1) {
    console.log(indexOf(data2, 2), lastIndexOf(data2, 2))
}


// Give an array of number data. Join and print all elements in an array separated by a commas and space.
function join(array, separator) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        result += array[i]
        if (i !== array.length - 1) {
            result += separator
        }
    }
    return result
}

console.log(join(data2, ', '))


// Give an array of number data. Convert all of elements of array to absolute value of a number into new array and print this array.
const data3 = map(data2, function(value, index, array) {
    return Math.abs(value)
})
console.log(data3);

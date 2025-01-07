function bt1() {
    console.log(Date())
}
bt1()

function bt2(day = 1, month = 1, year = 1) {
    let current = new Date(year, month, day)
    console.log(current.getDate() + "/" + current.getMonth() + "/" + current.getFullYear())
    console.log(current.getDate() + "-" + current.getMonth() + "-" + current.getFullYear())
    console.log(current.getMonth() + "/" + current.getDate() + "/" + current.getFullYear())
    console.log(current.getMonth() + "-" + current.getDate() + "-" + current.getFullYear())
}
bt2(4, 3, 2020)

function bt3(num) {
    let str = num.toString()
    for (i = 1; i < str.length; i++) {
        if (str[i] < str[i - 1]) {
            return false
        }
    }
    return true
}

function bt4(str) {
    let newStr = str.split('')
    for (i = 0; i < str.length; i++) {
        newStr[i] = String.fromCharCode(str.charCodeAt(i) + 1)
    }
    console.log(newStr.join(''))
}
bt4("abc")

function bt5(str) {
    if (str.length < 3 || str.length % 2 === 0) {
        console.log("Chuoi khong hop le")
        return
    }
    let center = (str.length - 1) / 2
    return str[center - 1] + str[center] + str[center + 1]
}

function bt6(arr) {
    let countMap = new Map()
    for (i = 0; i < arr.length; i++) {
        if (!countMap.has(arr[i])) {
            countMap.set(arr[i], 0)
        }
        else {
            let temp = countMap.get(arr[i])
            countMap.delete(arr[i])
            countMap.set(arr[i], temp + 1)
        }
    }
    let text = ""
    for (const x of countMap.entries()) {
        text += x
        text += "\n"
    }
    console.log(text)
}
let arr = [2, 3, 4, 3]
bt6(arr)

function bt7(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'j') {
            if (str[i + 1] === 'a' && str[i + 2] === 'v' && str[i + 3] === 'a') {
                console.log(true)
                return true
            }
        }
    }
    console.log(false)
    return false
}
bt7("aj j java ja")

function bt8(num) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (num < 1 && num > 12) {
        console.log("Error input")
    }
    else {
        console.log(months[num - 1])
    }
}
bt8(2)

function bt9(str) {
    let subs = str.split(" ")
    let index = 0
    for (i = 1; i < subs.length; i++) {
        if(subs[i].length > subs[index].length) {
            index = i
        }
    }
    console.log(subs[index])
}
bt9("ahhah hahahha ahhah")

function bt10(left, right) {
    let isPrime = true
    for (i = left + 1; i < right; i++) {
        isPrime = true
        for (j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(i)
        }
    }
}
bt10(20, 50)

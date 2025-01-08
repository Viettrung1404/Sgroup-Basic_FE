// Bai 1
const user = {}
user.name = "David"
user.surname ="Xuan"
user.name = "CafeDev"
delete user.name

// Bai 2
function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

// Bai 3
let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}

// Bai 4
function multiplyNum(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2
        }
    }
}

// Bai 5
const computer = {
    read: function(x, y) {
        this.x = x
        this.y = y
    },
    sum: function() {
        return this.x + this.y
    },
    mul: function() {
        return this.x * this.y
    }
}


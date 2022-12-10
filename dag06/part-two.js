const fs = require('fs')

let text = fs.readFileSync("./input.txt", 'utf-8')

function getMarkerIndex() {
    let duplicateArray = []

    for (i = 0; i < text.length; i++) {
        if (duplicateArray.length < 14) {
            duplicateArray.push(text.slice(i, i + 1))
        } else {
            if (arrHasDuplicates(duplicateArray)) {
                duplicateArray.shift()
                duplicateArray.push(text.slice(i, i + 1))
            } else return i
        }
    }

}

function arrHasDuplicates(arr) {
    if (arr.length == new Set(arr).size) {
        return false
    } else return true
}

console.log("The message can be found at index " + getMarkerIndex())
const fs = require('fs')

let text = fs.readFileSync("./input.txt", 'utf-8')

let backpackArray = text.split("\n")

let sumOfPriorities = 0

for (i = 0; i < backpackArray.length; i += 3) {
    backpackArray[i] = backpackArray[i].replace("\r", "")

    //look for common items between the first and second backpacks
    firstCommonWithSecond = []
    for (j = 0; j < backpackArray[i].length; j++) {
        for (k = 0; k < backpackArray[i + 1].length; k++) {
            if (backpackArray[i].slice(j, j + 1) == backpackArray[i + 1].slice(k, k + 1)) {
                firstCommonWithSecond.push(backpackArray[i].slice(j, j + 1))
                backpackArray[i] = backpackArray[i].replaceAll(backpackArray[i].slice(j, j + 1), "")
                backpackArray[i + 1] = backpackArray[i + 1].replaceAll(backpackArray[i + 1].slice(k, k + 1), "")
                j--
            }
        }
    }
    //look for common items between firstCommonWithSecond[] and the third backpack
    for (j = 0; j < firstCommonWithSecond.length; j++) {
        for (k = 0; k < backpackArray[i + 2].length; k++) {
            if (firstCommonWithSecond[j] == backpackArray[i + 2].slice(k, k + 1)) {
                let charUnicode = backpackArray[i + 2].charCodeAt(k)
                if (charUnicode > 90) {
                    sumOfPriorities += charUnicode - 96
                } else sumOfPriorities += charUnicode - 38
                firstCommonWithSecond.splice(j, 1)
                j--
            }
        }
    }
}

console.log("The sum of the priorities of those items is " + sumOfPriorities)
const fs = require('fs')

let text = fs.readFileSync("./input.txt", 'utf-8')

let backpackArray = text.split("\n")

let sumOfPriorities = 0

for (i = 0; i < backpackArray.length; i++) {
    backpackArray[i].replace("\r", "")
    let firstCompartement = backpackArray[i].substr(0, backpackArray[i].length / 2)
    let secondCompartement = backpackArray[i].substr(backpackArray[i].length / 2, backpackArray[i].length / 2)
    
    for (j = 0; j < firstCompartement.length; j++) {
        for (k = 0; k < secondCompartement.length; k++) {
            if (firstCompartement.slice(j, j + 1) == secondCompartement.slice(k, k + 1)) {
                
                let charUnicode = firstCompartement.charCodeAt(j)
                if (charUnicode > 90) {
                    sumOfPriorities += charUnicode - 96
                } else sumOfPriorities += charUnicode - 38
                firstCompartement = firstCompartement.replaceAll(firstCompartement.slice(j, j + 1), "")
                secondCompartement = secondCompartement.replaceAll(secondCompartement.slice(k, k + 1), "")
                j--         
            }
        }
    }
    
}

console.log("The sum of the priorities of those items is " + sumOfPriorities)
const fs = require('fs')

let text = fs.readFileSync("./input.txt", 'utf-8')

const textArray = text.split(/\r?\n/)

let pileArray = [[], [], [], [], [], [], [], [], []]

for (i = 0; i < textArray.length; i++) {

    if (textArray[i].slice(0, 1) == "[") {

        for (j = 1; j < textArray[i].length; j += 4) {
            if (textArray[i].slice(j, j + 1) !== " ") {
                pileArray[(j - 1) / 4].unshift(textArray[i].slice(j, j + 1))
            }

        }
    } else if (textArray[i].slice(0, 1) == "m") {

        wordsArray = textArray[i].split(" ")

        let from = wordsArray[3] - 1
        let end = wordsArray[5] - 1
        let amountOfCrates = (wordsArray[1] > pileArray[from].length) ? pileArray[from].length : wordsArray[1]
        for (j = 0; j < amountOfCrates; j++) {
            pileArray[end].push(pileArray[from].pop())
        }

    }
}
let topBoxes = ""
for (i = 0; i < pileArray.length; i++) {
    topBoxes += pileArray[i][pileArray[i].length - 1]
}

console.log("The boxes on top are " + topBoxes)
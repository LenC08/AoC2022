const fs = require("fs")

let text = fs.readFileSync("./input.txt", "utf-8")

const textArray = text.split(/\r?\n/);

let highestScenicScore = 0

for (row = 0; row < textArray.length; row++) {
    for (col = 0; col < textArray[row].length; col++) {
        let temp = scenicScoreTop(row, col) * scenicScoreBottom(row, col) * scenicScoreRight(row, col) * scenicScoreLeft(row, col)
        highestScenicScore = (highestScenicScore > temp) ? highestScenicScore : temp
      }
}

function scenicScoreBottom(row, col) {

    let treeHeight = textArray[row][col]
    let scenicScore = 0
    row++
    while (row < textArray.length && treeHeight > textArray[row][col]) {
        scenicScore++
        row++
    }
    if (row > textArray.length - 1) return scenicScore
    else {
        scenicScore++
        return scenicScore
    }
}

function scenicScoreTop(row, col) {

    let treeHeight = textArray[row][col]
    let scenicScore = 0
    row--

    while (row > -1 && treeHeight > textArray[row][col]) {
        
        scenicScore++
        row--
    }
    if (row < 0) return scenicScore
    else {
        scenicScore++
        return scenicScore
    }
    
}

function scenicScoreLeft(row, col) {
    let treeHeight = textArray[row][col]
    let scenicScore = 0
    col--
    while (col > -1 && treeHeight > textArray[row][col]) {
        scenicScore++
        col--
    }
    if (col < 0) return scenicScore
    else {
        scenicScore++
        return scenicScore
    }
}

function scenicScoreRight(row, col) {
    let treeHeight = textArray[row][col]
    let scenicScore = 0
    col++
    while (col < textArray[row].length && treeHeight > textArray[row][col]) {
        scenicScore++
        col++
    }
    if (col > textArray[row].length - 1) return scenicScore
    else {
        scenicScore++
        return scenicScore
    }
}

console.log("The highest scenic score is " + highestScenicScore)
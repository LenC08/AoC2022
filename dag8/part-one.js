const fs = require("fs")

let text = fs.readFileSync("./input.txt", "utf-8")

const textArray = text.split(/\r?\n/);

let amountOfVisibleTrees = 0

for (row = 0; row < textArray.length; row++) {
    for (col = 0; col < textArray[row].length; col++) {
        if (!(row == 0 || row == textArray.length - 1 || col == 0 || col == textArray[row].length - 1 )) {
             if (isVisibleFromTop(row, col) || isVisibleFromRight(row, col) || isVisibleFromLeft(row, col) || isVisibleFromBottom(row, col)) {
                amountOfVisibleTrees++
             }
        } else {
            amountOfVisibleTrees++            
        }           
      }
}

function isVisibleFromTop(row, col) {
    let treeHeight = textArray[row][col]
    row--
    while (row > -1) {
        if (treeHeight <= textArray[row][col]) {
            return false
        }
        row--
    }
    return true
}

function isVisibleFromBottom(row, col) {
    let treeHeight = textArray[row][col]
    row++
    while (row < textArray.length) {
        if (treeHeight <= textArray[row][col]) {
            return false
        }
        row++
    }
    return true
}

function isVisibleFromLeft(row, col) {
    let treeHeight = textArray[row][col]
    col--
    while (col > -1) {
        if (treeHeight <= textArray[row][col]) {
            return false
        }
        col--
    }
    return true
}

function isVisibleFromRight(row, col) {
    let treeHeight = textArray[row][col]
    col++
    while (col < textArray[row].length) {
        if (treeHeight <= textArray[row][col]) {
            return false
        }
        col++
    }
    return true
}

console.log("There are " + amountOfVisibleTrees + " trees visible from outside the grid")
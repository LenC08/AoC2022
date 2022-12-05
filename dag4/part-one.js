const fs = require('fs')

let text = fs.readFileSync("./input.txt", 'utf-8')

const textArray = text.split(/\r?\n)

let amountOfPairs = 0

for (i = 0; i < pairArray.length; i++) {
    pairArray[i] = pairArray[i].replace("\r", "")
    
    let firstElfTask = pairArray[i].substr(0, pairArray[i].indexOf(","))
    let secondElfTask = pairArray[i].substr(pairArray[i].indexOf(",") + 1, pairArray[i].length)
    
    let firstElfStartNr = parseInt(firstElfTask.substr(0, firstElfTask.indexOf("-")))
    let firstElfEndNr = parseInt(firstElfTask.substr(firstElfTask.indexOf("-") + 1, firstElfTask.length))
    let secondElfStartNr = parseInt(secondElfTask.substr(0, secondElfTask.indexOf("-")))
    let secondElfEndNr = parseInt(secondElfTask.substr(secondElfTask.indexOf("-") + 1, secondElfTask.length))

    if (firstElfStartNr < secondElfStartNr) {
        if (firstElfEndNr >= secondElfEndNr) amountOfPairs++ 
    } else if (firstElfStartNr > secondElfStartNr) {
        if (secondElfEndNr >= firstElfEndNr) amountOfPairs++
    } else amountOfPairs++
        
}


console.log("The amount of pairs where one fully contains the other is " + amountOfPairs)
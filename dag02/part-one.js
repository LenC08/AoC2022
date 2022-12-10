const fs = require('fs')

let text = fs.readFileSync("./input.txt", 'utf-8')

let strategyArray = text.split("\n")

let score = 0

for (i = 0; i < strategyArray.length; i++) {
    strategyArray[i].replace("\r", "")

    score += shapeSelectedScore(strategyArray[i].slice(2, 3)) + gameResult(strategyArray[i].slice(0, 1), strategyArray[i].slice(2, 3))
    
}

function shapeSelectedScore(shape) {
    if (shape == "X") return 1
    else if (shape == "Y") return 2
    else if (shape == "Z") return 3
}

function gameResult(opponentShape, myShape) {
    if (opponentShape == "A") {
        if (myShape == "X") return 3
        else if (myShape == "Y") return 6
        else if (myShape == "Z") return 0
    } else if (opponentShape == "B") {
        if (myShape == "X") return 0
        else if (myShape == "Y") return 3
        else if (myShape == "Z") return 6
    } else if (opponentShape == "C") {
        if (myShape == "X") return 6
        else if (myShape == "Y") return 0
        else if (myShape == "Z") return 3
    }
}

console.log("the total score after following the strategy guide like this is " + score)
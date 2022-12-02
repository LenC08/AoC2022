const fs = require('fs')

let text = fs.readFileSync("./input.txt", 'utf-8')

let strategyArray = text.split("\n")

let score = 0

for (i = 0; i < strategyArray.length; i++) {
    strategyArray[i].replace("\r", "")

    score += pointsCalculator(strategyArray[i].slice(0, 1), strategyArray[i].slice(2, 3))    
}

function shapeSelectedScore(shape) {
    if (shape == "Rock") return 1
    else if (shape == "Paper") return 2
    else if (shape == "Scissors") return 3
}

function pointsCalculator(opponentShape, result) {
    let pointsScored
    let myShape =""
    if (result == "Z"){
        pointsScored = 6
        myShape = ""
        if (opponentShape == "A") myShape = "Paper"
        else if (opponentShape == "B") myShape = "Scissors" 
        else if (opponentShape == "C") myShape = "Rock"
    } else if (result == "Y"){
        pointsScored = 3
        if (opponentShape == "A") myShape = "Rock"
        else if (opponentShape == "B") myShape = "Paper" 
        else if (opponentShape == "C") myShape = "Scissors"
    }  else if (result == "X"){
        pointsScored = 0
        if (opponentShape == "A") myShape = "Scissors"
        else if (opponentShape == "B") myShape = "Rock" 
        else if (opponentShape == "C") myShape = "Paper"
    }
    return pointsScored + shapeSelectedScore(myShape)  
}

console.log("the total score after following the strategy guide as it was intended is " + score)
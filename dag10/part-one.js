const fs = require("fs")

let text = fs.readFileSync("./input.txt", "utf-8")

const textArray = text.split(/\r?\n/);

let cycle = 1
let X = 1

let sumOfStrengths = 0

for (i = 0; i < textArray.length; i++) {
    let [command, arg] = textArray[i].split(" ")
    if (command == "noop") {
        cycle++
        sumOfStrengths += checkIfCycleAdded(cycle, X)
    } else if (command == "addx") {
        cycle++
        sumOfStrengths += checkIfCycleAdded(cycle, X)
        cycle++
        X += parseInt(arg)
        sumOfStrengths += checkIfCycleAdded(cycle, X)        
    }
}

function checkIfCycleAdded(cycle, X) {
    if ([20, 60, 100, 140, 180, 220].includes(cycle)) {
        return cycle * X
    } else return 0
}

console.log("The sum of the six signal strengths is " + sumOfStrengths)
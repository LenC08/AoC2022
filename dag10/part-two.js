const fs = require("fs")

let text = fs.readFileSync("./input.txt", "utf-8")

const textArray = text.split(/\r?\n/);

let cycle = 0
let currentCrtRow = ""
let crt = []
let spritePosition = "..#"

for (i = 0; i < textArray.length; i++) {
    let [command, arg] = textArray[i].split(" ")
    if (command == "noop") {
        addPixel(cycle)
        cycle++
        cycle = checkCycleRowEnd(cycle)
    } else if (command == "addx") {
        addPixel(cycle)
        cycle++
        cycle = checkCycleRowEnd(cycle)
        addPixel(cycle)
        cycle++
        arg = parseInt(arg)
        let temp = ""
        if (arg > 0) {
            for (j = 0; j < arg; j++) {
                temp += "."
            }           
            spritePosition = temp + spritePosition
        } else {
            for (j = 0; j > arg; j--) {
                temp += "."
            }
            spritePosition = spritePosition.replace(temp, "")
        }
        cycle = checkCycleRowEnd(cycle)
               
    }
}

function addPixel(cycle) {
    if (spritePosition[cycle] == "#" || spritePosition[cycle + 1] == "#" || spritePosition[cycle + 2] == "#") {
        currentCrtRow += "#"
    } else {
        currentCrtRow += "."
    }
}

function checkCycleRowEnd(cycle) {
    if (cycle == 40) {
        crt.push(currentCrtRow)
        currentCrtRow = ""
        return 0
    } else return cycle
}

for (i = 0; i < crt.length; i++) {
    console.log(crt[i])
}
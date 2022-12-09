const fs = require("fs")

let text = fs.readFileSync("./input.txt", "utf-8")

const textArray = text.split(/\r?\n/);

let headCoordinates = [249, 249]
let tailCoordinates = [249, 249]

let coordinatesTailhasBeen = [[249, 249]]

let grid = []

for (i = 0; i < 500; i++) {
    grid.push([])
    for (j = 0; j < 500; j++) {
        grid[i][j] = "."
    }
}

for (i = 0; i < textArray.length; i++) {
    let [direction, amount] = textArray[i].split(" ")
    j = 0
    while(j < amount) {
        headCoordinates = moveHead(direction) 
        tailCoordinates = moveTail() 
        j++
    }  
}

function moveHead(direction) {
    if (direction == "U") {
        grid[headCoordinates[0]][headCoordinates[1] + 1] = "H"
        return [headCoordinates[0], headCoordinates[1] + 1]
    } else if (direction == "D") {
        grid[headCoordinates[0]][headCoordinates[1] - 1] = "H"
        return [headCoordinates[0], headCoordinates[1] - 1]
    } else if (direction == "L") {
        grid[headCoordinates[0] - 1][headCoordinates[1]] = "H"
        return [headCoordinates[0] - 1, headCoordinates[1]]
    } else if (direction == "R") {
        grid[headCoordinates[0] + 1][headCoordinates[1]] = "H"
        return [headCoordinates[0] + 1, headCoordinates[1]]
    }
}

function moveTail() {
    if (headAndTailAreTouching()) {
        return [tailCoordinates[0], tailCoordinates[1]]
    } else {
        if (headCoordinates[0] == tailCoordinates[0]) {
            if (headCoordinates[1] > tailCoordinates[1]) {
                tailCoordinates[1]++
            } else tailCoordinates[1]--
        } else if (headCoordinates[1] == tailCoordinates[1]) {
            if (headCoordinates[0] > tailCoordinates[0]) {
                tailCoordinates[0]++
            } else tailCoordinates[0]--
        } else {
            if (headCoordinates[0] > tailCoordinates[0]) {
                if (headCoordinates[1] > tailCoordinates[1]) {
                    tailCoordinates[0]++
                    tailCoordinates[1]++
                } else {
                    tailCoordinates[0]++
                    tailCoordinates[1]--
                }
            } else {
                if (headCoordinates[1] > tailCoordinates[1]) {
                    tailCoordinates[0]--
                    tailCoordinates[1]++
                } else {
                    tailCoordinates[0]--
                    tailCoordinates[1]--
                }
            }
        }
    }
    coordinatesTailhasBeen.push([tailCoordinates[0], tailCoordinates[1]])
    return [tailCoordinates[0], tailCoordinates[1]]
}

function headAndTailAreTouching() {
    if (tailCoordinates[0] - headCoordinates[0] >= -1 && tailCoordinates[0] - headCoordinates[0] <= 1 && tailCoordinates[1] - headCoordinates[1] >= -1 && tailCoordinates[1] - headCoordinates[1] <= 1) {
        return true
    } else return false
}

let amountOfUniqueCoords = Array.from(new Set(coordinatesTailhasBeen.map(JSON.stringify)), JSON.parse).length

console.log("The tail visits " + amountOfUniqueCoords + " unique tiles")
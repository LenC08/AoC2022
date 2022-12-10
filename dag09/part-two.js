const fs = require("fs")

let text = fs.readFileSync("./input.txt", "utf-8")

const textArray = text.split(/\r?\n/);

let headCoordinates = [249, 249]
let tail1Coordinates = [249, 249]
let tail2Coordinates = [249, 249]
let tail3Coordinates = [249, 249]
let tail4Coordinates = [249, 249]
let tail5Coordinates = [249, 249]
let tail6Coordinates = [249, 249]
let tail7Coordinates = [249, 249]
let tail8Coordinates = [249, 249]
let tail9Coordinates = [249, 249]

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
        tail1Coordinates = moveTail(tail1Coordinates, headCoordinates)
        tail2Coordinates = moveTail(tail2Coordinates, tail1Coordinates)
        tail3Coordinates = moveTail(tail3Coordinates, tail2Coordinates)
        tail4Coordinates = moveTail(tail4Coordinates, tail3Coordinates)
        tail5Coordinates = moveTail(tail5Coordinates, tail4Coordinates)
        tail6Coordinates = moveTail(tail6Coordinates, tail5Coordinates)
        tail7Coordinates = moveTail(tail7Coordinates, tail6Coordinates)
        tail8Coordinates = moveTail(tail8Coordinates, tail7Coordinates)
        tail9Coordinates = moveTail(tail9Coordinates, tail8Coordinates, "push")
        
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

function moveTail(tailCoordinates, previousTailCoordinates, push) {
    if (headAndTailAreTouching(tailCoordinates, previousTailCoordinates)) {
        return [tailCoordinates[0], tailCoordinates[1]]
    } else {
        if (previousTailCoordinates[0] == tailCoordinates[0]) {
            if (previousTailCoordinates[1] > tailCoordinates[1]) {
                tailCoordinates[1]++
            } else tailCoordinates[1]--
        } else if (previousTailCoordinates[1] == tailCoordinates[1]) {
            if (previousTailCoordinates[0] > tailCoordinates[0]) {
                tailCoordinates[0]++
            } else tailCoordinates[0]--
        } else {
            if (previousTailCoordinates[0] > tailCoordinates[0]) {
                if (previousTailCoordinates[1] > tailCoordinates[1]) {
                    tailCoordinates[0]++
                    tailCoordinates[1]++
                } else {
                    tailCoordinates[0]++
                    tailCoordinates[1]--
                }
            } else {
                if (previousTailCoordinates[1] > tailCoordinates[1]) {
                    tailCoordinates[0]--
                    tailCoordinates[1]++
                } else {
                    tailCoordinates[0]--
                    tailCoordinates[1]--
                }
            }
        }
    }
    if (push) coordinatesTailhasBeen.push([tailCoordinates[0], tailCoordinates[1]])
    return [tailCoordinates[0], tailCoordinates[1]]
}

function headAndTailAreTouching(tailCoordinates, previousTailCoordinates) {
    if (tailCoordinates[0] - previousTailCoordinates[0] >= -1 && tailCoordinates[0] - previousTailCoordinates[0] <= 1 && tailCoordinates[1] - previousTailCoordinates[1] >= -1 && tailCoordinates[1] - previousTailCoordinates[1] <= 1) {
        return true
    } else return false
}

let amountOfUniqueCoords = Array.from(new Set(coordinatesTailhasBeen.map(JSON.stringify)), JSON.parse).length

console.log("The tail visits " + amountOfUniqueCoords + " unique tiles")
const fs = require('fs')

let text = fs.readFileSync("./input.txt", 'utf-8')


let mealArray = text.split("\r")

let currentElfCalories = 0
let elfCalorieArray = []

for (i = 0; i < mealArray.length; i++) {
  mealArray[i].replace("\r", "")
  if (mealArray[i] == "\n" || i == mealArray.length - 1) {
    elfCalorieArray.push(currentElfCalories)
    currentElfCalories = 0
  }
  else currentElfCalories += parseInt(mealArray[i])
}

let highestAmountOfCal = Math.max(...elfCalorieArray)

console.log(highestAmountOfCal)




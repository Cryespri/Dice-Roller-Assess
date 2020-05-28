//Do step 1 first dieRolls variable should be outside.

const rollButton = document.querySelector('.roll-button')
const showRollsButton = document.querySelector('#show-all-rolls')
const dieRollsArray = []//empty array
let total = document.querySelector('#total-rolls')
let userInput = document.querySelector('#number-of-dice')
let newTotal = 0
const allRollsButton = document.querySelector('#all-rolls')

rollButton.addEventListener("click", function () {

    // 1. Get the value of the input text box and assign it

    // 2. Loop THAT number of times 

    let counter = 0
    while (counter < userInput.value) {

        let diceRoll = Math.ceil(Math.random() * 6);
        console.log(diceRoll);
        counter++
        dieRollsArray.push(diceRoll)
        newTotal += diceRoll

    }
    total.innerHTML = newTotal

})
// Shows all numbers that were rolled

showRollsButton.addEventListener("click", function () {
    let counter = 0
    while (counter < dieRollsArray.length) {
        allRollsButton.innerHTML += "<li>" + dieRollsArray[counter] + "</li>";
        counter++
    }
})

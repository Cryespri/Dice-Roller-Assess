//Do step 1 first dieRolls variable should be outside.

const rollButton = document.querySelector('.roll-button')
const showRollsButton = document.querySelector('.show-all-rolls')
const dieRollsArray = []//empty array
let total = document.querySelector('#total-rolls')
let userInput = document.querySelector('#number-of-dice')
let newTotal = 0


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
// 3. nd each time "roll" randomly from 1 to 6
// Loop a numner of times equal to the number-of-dice.


showRollsButton.addEventListener("click", function () {
    let counter = 0
    while (counter < dieRollsArray.length) {
        counter += 1
    }
})

/* function sumDiceRolls() {
    let total = 0
    let index = 0
    while (index < diceRolls.length) {
        total = total + diceRolls[index]

        index++
    }

    return total
*/
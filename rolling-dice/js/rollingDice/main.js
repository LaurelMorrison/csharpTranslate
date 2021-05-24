// Put your code here
function getRoll() {
    return Math.floor(Math.random() * 6) + 1
}

let dieRoll = () => {
    for (let i = 0; i < 10; i++) {
        let die1 = getRoll()
        let die2 = getRoll()
        let dieSum = die1 + die2
        if (die1 === die2) {
            console.log(`${die1} + ${die2} == ${dieSum} DOUBLES!`)
        }
        else {
            console.log(`${die1} + ${die2} == ${dieSum}`)
        };
    }
}
dieRoll();
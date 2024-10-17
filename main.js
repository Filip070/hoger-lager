document.addEventListener('DOMContentLoaded', () => {
    const currentNumberElement = document.querySelector('.number');
    const resultMessageElement = document.querySelector('.result');
    const higherButton = document.querySelector('.guess-button#higher');
    const lowerButton = document.querySelector('.guess-button#lower');
    const resetButton = document.querySelector('.reset-button');
 
    let currentNumber = Math.floor(Math.random() * 10) + 1; // random getal tussen de 1 en 10
    currentNumberElement.textContent = currentNumber;
 
    function generateNewNumber() {
        return Math.floor(Math.random() * 10) + 1; // genereert een nieuw getal
    }
 
    function checkGuess(guess) {
        const newNumber = generateNewNumber();
        if ((guess === 'higher' && newNumber > currentNumber) || 
            (guess === 'lower' && newNumber < currentNumber)) {
            resultMessageElement.textContent = `Correct! The new number is ${newNumber}.`;
        } else {
            resultMessageElement.textContent = `Wrong! The new number is ${newNumber}.`;
        }
        currentNumber = newNumber; // Update the current number
        currentNumberElement.textContent = currentNumber; // laat het nieuwe getal zien
    }
 
    higherButton.addEventListener('click', () => checkGuess('higher'));
    lowerButton.addEventListener('click', () => checkGuess('lower'));
    resetButton.addEventListener('click', () => {
        currentNumber = generateNewNumber();
        currentNumberElement.textContent = currentNumber;
        resultMessageElement.textContent = '';
    });
});
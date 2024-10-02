// let randomNumber = 8;

let randomNumber = Math.floor(Math.random() * 10) + 1; /* I used Math.random here to generate a random number. so that every time
 I run this code, a new random number is created and guessed by the user. This is just my preference. I just searched how to 
 generate numbers from 1-10, This line of code can be just replaced by the commented code above.*/

let guessNumber = null; /* It is important to make the guess number to be undefined so the while loop can start, if the prompt
goes first then the while loop might not start if the user guess it correctly at first try*/

while (guessNumber != randomNumber) {
    guessNumber = prompt("Guess a number between 1 and 10: "); /*Taking note that it isn't creating a new variable but assigning
     a new value, it's important that this is inside the loop so it can ask the user again if it guessed the number wrong.*/

    if (guessNumber < randomNumber) {
        console.log("Too Low!");
    } else if (guessNumber > randomNumber) {
        console.log(`Too High!`);
    } else if (guessNumber == randomNumber) {
        console.log('Correct!')
        break
    } else {
        console.log('Only input a number.'); // Somehow I need to add this if the user missed input
    }
}

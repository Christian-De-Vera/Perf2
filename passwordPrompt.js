let correctPassword = `tetoKasane`; // Password that is uniqued for the user and easy to remember
let userInput = undefined; // make the loop starts

do {
    userInput = prompt(`Enter your password: `); // re-assigned the undefined value of userInput
    if (userInput != correctPassword) {
        console.log('Incorrect Password'); // This is just to check if the code is right so it can output some feedback in the console
    }

} while (userInput != correctPassword); // keep looping until the password isn't right

console.log('Access Granted.') //This line is outside of the loop, To make this code run when the do-while is no longer true
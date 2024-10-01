let age = prompt("Enter your Age: "); //prompts the what's the user Age

if (age < 13) {
    console.log(`You are a Child.`); //Check if the user Age is less than 13 to determined if the user is a child
} else if (age <= 19) {
    console.log(`You are a Teenager.`); // same as the last one but check the range to 13-19, to check if user is a Teenager
} else if (age >= 20) {
    console.log(`You are probably an Adult.`); //Equals and aboved to 20 are determined as an Adult
} else {
    console.log(`Enter your Age properly!`); //This line can also be not included, but I just added this cause some user might enter a non-numeric value
}
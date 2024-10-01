let age = prompt("Enter your Age: ");

if (age < 13) {
    console.log(`You are a Child.`);
} else if (age <= 19) {
    console.log(`You are a Teenager.`)
} else if (age >= 20) {
    console.log(`You are probably an Adult or an Elder.`)
} else {
    console.log(`Enter your Age properly!`)
}
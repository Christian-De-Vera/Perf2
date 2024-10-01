let score = prompt("Enter your Score: "); //Ask the user for its score

if (score < 70) {
    console.log("Your grade is: Needs Improvement."); // The following code just compare if score is less than 70
} else if (score <= 79) {
    console.log("Your grade is: Fair."); // check for the range of 70-79
} else if (score <= 89){
    console.log("Your grade is: Good."); // check for the range of 80-89
} else if (score >= 90){
    console.log("Your grade is: Execellent."); // check if the score is above 90
} else {
    console.log("Please enter your proper Score."); //ask the user for its proper score, if the user enter a wrong input
}
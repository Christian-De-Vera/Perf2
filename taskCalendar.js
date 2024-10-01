let day = prompt("Enter the day of the Week: "); // Ask the user what day is it today, so the program can output the task to do

switch (day) {
    case `Monday`: // The following cases are just a scheduled for me to do somehow
        console.log('Monday: Somehow survived school.');
        break;
    case `Tuesday`:
        console.log('Tuesday: Bring an umbrella, It will rain.');
        break;
    case `Wednesday`:
        console.log(`Wednesday: Try to improved skills in every hobby that I'm mediocre at.`)
        break;
    case `Thursday`:
        console.log('Thursday: Do school work.');
        break;
    case `Friday`:
        console.log('Friday: Read a random book or continue what is left to the previous one.');
        break;
    case `Saturday`:
        console.log('Saturday: Draw or play video games.');
        break;
    case `Sunday`:
        console.log('Sunday: Make the last day count, cuz school is tommorow.');
        break;
    default: // This just check if the user properly enter the day of the week
        console.log(`Write the Input properly by checking the spelling, typing the full word of the day, and Capitalizing the first letter.`);
}
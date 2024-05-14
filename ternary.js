const dayNumber = 6;

let whatDay =
  dayNumber === 0
    ? "Sunday"
    : dayNumber === 1
    ? "Monday"
    : dayNumber === 2
    ? "Tuesday"
    : dayNumber === 3
    ? "Wednesday"
    : dayNumber === 4
    ? "Thursday"
    : dayNumber === 5
    ? "Friday"
    : dayNumber === 6
    ? "Saturday"
    : "Invalid day number";

console.log(whatDay);
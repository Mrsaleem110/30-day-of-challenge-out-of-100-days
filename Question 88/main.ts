// *Question 88:* Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

// *Explain & TIP:* The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.

// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num: number): number {
    return Math.round(num); // Rounds the number
}

// Example: Rounding a decimal
console.log(roundToNearestInteger(4.7)); 
console.log(roundToNearestInteger(4.4));
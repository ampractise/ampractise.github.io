/* Guess the number
    1. Get a random number between two int
    2. Get the input from user - guess
    3. If user guess incorect then show if guess in greater or smaller
    4. count the guess, score will be (100 - count)
    5. after success show number and score
*/

//// 1. random number between 1 to 100
const randomNo = Math.floor(Math.random() * 99);
let count = 0;
//// 2. get input from user

//// 3.  check if user guess is correct else ask user to gues again
let userInput;
let parsedInput;
let isEqual;
let greater = [];
let smaller = [];
while (!isEqual) {
  userInput = prompt(`    Greater: ${greater}
    Smaller: ${smaller}
    Guess the number`);
  parsedInput = Number.parseInt(userInput);
  if (parsedInput > 0 || parsedInput < 100) {
    count++;
    if (randomNo < parsedInput) {
      alert("Your guess is greater than number, Guess again!");
      greater.push(parsedInput);
    } else if (randomNo > parsedInput) {
      alert("Your guess is smaller than number, Guess again!");
      smaller.push(parsedInput);
    } else {
      alert(`
            YAY! Finally your guessed the number.
            You took ${count} attempts to guess ${randomNo}. 
            Your score is ${100 - count}`);
      isEqual = true;
    }
  }
}

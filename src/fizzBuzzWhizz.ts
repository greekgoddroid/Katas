
/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz.
Only worry about numbers up to 100.

  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
*/

const esPrimo = (numero: number): boolean => { // Check if a number is prime.
  if (numero < 2) { // Check if the number is less than 2.
    return false; // The number is not prime.
  }

  for (let divisor = 2; divisor * divisor <= numero; divisor++) { // Try numbers from 2 up to the square root.
    if (numero % divisor === 0) { // Check if the number divides with no remainder.
      return false; // The number is not prime.
    }
  }

  return true; // The number is prime.
};

export const game = (input: number): number | string => { // Start the game with a number.
  if (!Number.isSafeInteger(input) || input <= 0) { // Check if the number is a safe positive integer.
    throw new Error("Input must be a positive integer"); // Show an error if the number is not valid.
  }

  let resultado = ""; // Make an empty box to save words.

  if (input % 3 === 0) { // Check if the number can be divided by 3.
    resultado += "Fizz"; // Add Fizz to the box.
  }

  if (input % 5 === 0) { // Check if the number can be divided by 5.
    resultado += "Buzz"; // Add Buzz to the box.
  }

  if (esPrimo(input)) { // Check if the number is prime.
    resultado += "Whizz"; // Add Whizz to the box.
  }

  if (resultado === "") { // Check if the box is empty.
    return input; // Give back the same number.
  }

  return resultado; // Give back the words in the box.
};


/*
Engineer, in class you said that our code should work with all
possible numbers, from 1 to infinity. So I made my code work
with small and big numbers, not just numbers up to 100.
*/

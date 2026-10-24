import { game } from "./fizzBuzzWhizz"; // Get the game function.
describe('FizzBuzz Game', () => { // Start all the tests.

  test('should return 1 for number 1', () => { // Test number 1.
    const result = game(1); // Give the game number 1.
    expect(result).toEqual(1); // Check if the answer is 1.
  });

  test('should return Whizz for 2', () => { // Test number 2.
    const result = game(2); // Give the game number 2.
    expect(result).toEqual("Whizz"); // Check if the answer is Whizz.
  });

  test('should return FizzWhizz for 3', () => { // Test number 3.
    const result = game(3); // Give the game number 3.
    expect(result).toEqual("FizzWhizz"); // Check if the answer is FizzWhizz.
  });

  test('should return 4 for number 4', () => { // Test number 4.
    const result = game(4); // Give the game number 4.
    expect(result).toEqual(4); // Check if the answer is 4.
  });

  test('should return BuzzWhizz for 5', () => { // Test number 5.
    const result = game(5); // Give the game number 5.
    expect(result).toEqual("BuzzWhizz"); // Check if the answer is BuzzWhizz.
  });

  test('should return Fizz for 6', () => { // Test number 6.
    const result = game(6); // Give the game number 6.
    expect(result).toEqual("Fizz"); // Check if the answer is Fizz.
  });

  test('should return Fizz for 9', () => { // Test number 9.
    const result = game(9); // Give the game number 9.
    expect(result).toEqual("Fizz"); // Check if the answer is Fizz.
  });

  test('should return Buzz for 10', () => { // Test number 10.
    const result = game(10); // Give the game number 10.
    expect(result).toEqual("Buzz"); // Check if the answer is Buzz.
  });

  test('should return FizzBuzz for 15', () => { // Test number 15.
    const result = game(15); // Give the game number 15.
    expect(result).toEqual("FizzBuzz"); // Check if the answer is FizzBuzz.
  });

  test('should return Buzz for 20', () => { // Test number 20.
    const result = game(20); // Give the game number 20.
    expect(result).toEqual("Buzz"); // Check if the answer is Buzz.
  });

  test('should return FizzBuzz for 30', () => { // Test number 30.
    const result = game(30); // Give the game number 30.
    expect(result).toEqual("FizzBuzz"); // Check if the answer is FizzBuzz.
  });

  test('should return FizzBuzz for 75', () => { // Test number 75.
    const result = game(75); // Give the game number 75.
    expect(result).toEqual("FizzBuzz"); // Check if the answer is FizzBuzz.
  });

  test('should return Whizz for 7', () => { // Test number 7.
    const result = game(7); // Give the game number 7.
    expect(result).toEqual("Whizz"); // Check if the answer is Whizz.
  });

  test('should return Whizz for 11', () => { // Test number 11.
    const result = game(11); // Give the game number 11.
    expect(result).toEqual("Whizz"); // Check if the answer is Whizz.
  });

  test('should return Buzz for 100', () => { // Test number 100.
    const result = game(100); // Give the game number 100.
    expect(result).toEqual("Buzz"); // Check if the answer is Buzz.
  });

  test('should return Whizz for 101', () => { // Test number 101.
    const result = game(101); // Give the game number 101.
    expect(result).toEqual("Whizz"); // Check if the answer is Whizz.
  });

  test('should return 121 for number 121', () => { // Test number 121.
    const result = game(121); // Give the game number 121.
    expect(result).toEqual(121); // Check if the answer is 121.
  });

  test('should return FizzBuzz for 105', () => { // Test number 105.
    const result = game(105); // Give the game number 105.
    expect(result).toEqual("FizzBuzz"); // Check if the answer is FizzBuzz.
  });

  test('should return Whizz for 997', () => { // Test number 997.
    const result = game(997); // Give the game number 997.
    expect(result).toEqual("Whizz"); // Check if the answer is Whizz.
  });

  test('should return Fizz for 999', () => { // Test number 999.
    const result = game(999); // Give the game number 999.
    expect(result).toEqual("Fizz"); // Check if the answer is Fizz.
  });

  test('should return 49 for number 49', () => { // Test number 49.
    const result = game(49); // Give the game number 49.
    expect(result).toEqual(49); // Check if the answer is 49.
  });

  test('should return Buzz for 1000000', () => { // Test one million.
    const result = game(1000000); // Give the game one million.
    expect(result).toEqual("Buzz"); // Check if the answer is Buzz.
  });

  test('should reject zero', () => { // Test number zero.
    expect(() => game(0)).toThrow("Input must be a positive integer"); // Check if the game shows an error.
  });

}); // End all the tests.

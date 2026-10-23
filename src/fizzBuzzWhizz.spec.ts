import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should return 1 for number 1', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });

  test('should return Whizz for 2', () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });
  
  test('should return FizzWhizz for 3', () => {
    const result = game(3);
    expect(result).toEqual("FizzWhizz");
  });

  test('should return 4 for number 4', () => {
    const result = game(4);
    expect(result).toEqual(4);
  });

  test('should return BuzzWhizz for 5', () => {
    const result = game(5);
    expect(result).toEqual("BuzzWhizz");
  });

  test('should return Fizz for 6', () => {
    const result = game(6);
    expect(result).toEqual("Fizz");
  });

  test('should return Fizz for 9', () => {
    const result = game(9);
    expect(result).toEqual("Fizz");
  });

  test('should return Fizz for 10', () => {
    const result = game(10);
    expect(result).toEqual("Buzz");
  });

  test('should return Fizz for 15', () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  });

  test('should return Buzz for 20', () => {
    const result = game(20);
    expect(result).toEqual("Buzz");
  });

  test('should return Fizz for 30', () => {
    const result = game(30);
    expect(result).toEqual("FizzBuzz");
  });

  test('should return Fizz for 75', () => {
    const result = game(75);
    expect(result).toEqual("FizzBuzz");
  });

  test('should return Whizz for 7', () => {
    const result = game(7);
    expect(result).toEqual("Whizz");
  });

  test('should return Whizz for 11', () => {
    const result = game(11);
    expect(result).toEqual("Whizz");
  });

  test('should return Buzz for 100', () => {
    const result = game(100);
    expect(result).toEqual("Buzz");
  });

  test('should return Whizz for 101', () => {
    const result = game(101);
    expect(result).toEqual("Whizz");
  });

  test('should return 121 for number 121', () => {
    const result = game(121);
    expect(result).toEqual(121);
  });

  test('should return FizzBuzz for 105', () => {
    const result = game(105);
    expect(result).toEqual("FizzBuzz");
  });

  test('should return Whizz for 997', () => {
    const result = game(997);
    expect(result).toEqual("Whizz");
  });

  test('should return Fizz for 999', () => {
    const result = game(999);
    expect(result).toEqual("Fizz");
  });

  test('should return 49 for number 49', () => {
    const result = game(49);
    expect(result).toEqual(49);
  });

  test('should reject zero', () => {
   expect(() => game(0)).toThrow("Input must be a positive integer");
  });

});
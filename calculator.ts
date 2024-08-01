type Operation = 'multiply' | 'divide' | 'add';

const calculator = (a: number, b: number, operation: Operation): string | number => {
  switch (operation) {
    case ('multiply'):
      return a * b;
    case ('divide'):
      if (b === 0) {
        throw new Error('Can\'t divide by 0!');
      }
      return a / b;
    case ('add'):
      return a + b;
    default:
      throw new Error('Operation i snot multiply, add, or divide!');
  }
};

try {
  console.log(calculator(10, 5, 'multiply'));
  console.log(calculator(10, 5, 'divide'));
  console.log(calculator(10, 5, 'add'));
  console.log(calculator(10, 0, 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message
  }
  console.log(errorMessage);
}


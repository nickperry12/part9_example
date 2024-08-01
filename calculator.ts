export type Operation = 'multiply' | 'divide' | 'add';

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

export { calculator };
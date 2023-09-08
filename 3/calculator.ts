function calculator(str: string, ...numbers: number[]): number {
  let result;

  switch (str) {
    case "add":
      result = add(...numbers);
      break;
    case "subtract":
      result = subtract(...numbers);
      break;
    case "multiplication":
      result = multiplication(...numbers);
      break;
    case "division":
      result = division(...numbers);
      break;
    default:
      return 0;
  }

  if (isNaN(result)) return 0;
  else return result;
}

function add(...numbers: number[]) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

function subtract(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc - current);
}

function multiplication(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc * current, 1);
}

function division(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc / current);
}

module.exports = calculator;

interface Analyze {
  average: number;
  min: number;
  max: number;
  length: number;
}

function analyzeArray(...number: number[]): Analyze | string {
  let error = 0;
  number.forEach((el) => {
    if (isNaN(el)) error++;
  });
  if (error === 0) {
    let sum = number.reduce((acc, curr) => acc + curr);
    let len = number.length;
    const newObj = {
      average: sum / len,
      min: Math.min(...number),
      max: Math.max(...number),
      length: len,
    };
    return newObj;
  } else return "Error";
}

module.exports = analyzeArray;

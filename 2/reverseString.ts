function reverseString(str: string): string {
  let array = str.split("");
  let reverseArray = array.reverse();
  let joinArray = reverseArray.join("");

  return joinArray;
}

module.exports = reverseString;

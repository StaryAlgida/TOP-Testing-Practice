function capitalize(str: string): string {
  let index = 0;
  let cap = str.charAt(index);
  while (true) {
    if (index >= str.length) {
      return "";
    } else if (!isNaN(cap as any) || cap === " ") {
      index++;
      cap = str.charAt(index);
    } else {
      console.log(typeof cap);
      break;
    }
  }
  return str.replace(cap, cap.toUpperCase());
}

// console.log(capitalize("1test"));

module.exports = capitalize;

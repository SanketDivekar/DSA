// Leet code problem no - 344 - Reverse String

function reverseString(str) {
  let temp = "";
  for (let i = 0; i < str.length / 2; i++) {
    temp = str[i];
    str[i] = str[str.length - (i + 1)];
    str[str.length - (i + 1)] = temp;
  }
  return str;
}

const result = reverseString(["H", "a", "n", "n", "a", "g"]);
console.log(result);

// Example -
// input = ["H", "a", "n", "n", "a", "g"]
// output = ["g", "a", "n", "n", "a", "H" ]

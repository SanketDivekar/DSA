function printStarPattern(n) {
  if (n < 1) {
    console.log("-1");
  }
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
  //alternate code for same pattern
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 1; j <= i + 1; j++) {
//       row = row + j + " ";
//     }
//     console.log(row);
//   }
}

printStarPattern(5);

// above code will print below pattern

// n = 5

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

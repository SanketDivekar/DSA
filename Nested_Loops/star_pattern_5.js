function printStarPattern(n) {
  if (n < 1) {
    console.log("-1");
  }
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }

  //   alternate solution for this pattern
  //   for (let i = 0; i < n; i++) {
  //     let row = "";
  //     for (let j = 0; j < (n - i); j++) {
  //       row = row + (j + 1) + " ";
  //     }
  //     console.log(row);
  //   }
}

printStarPattern(7);

// above code will print below pattern

// n = 5

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
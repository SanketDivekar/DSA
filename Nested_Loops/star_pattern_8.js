function printStarPattern(n) {
  if (n < 0) {
    console.log("-1");
  }
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      if ((j + 1) % 2 == 0) {
        row = row + "0 ";
      } else {
        row = row + "1 ";
      }
    }
    console.log(row);
  }

  // alternate logic for this pattern
  //   for (let i = 0; i < n; i++) {
  //     let row = "";
  //     let toggle = 1;
  //     for (let j = 0; j <= i; j++) {
  //       row = row + toggle + " ";
  //       if (toggle == 1) {
  //         toggle = 0;
  //       } else {
  //         toggle = 1;
  //       }
  //     }
  //     console.log(row);
  //   }
}

printStarPattern(5);

// above code will print below pattern

// n = 5

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

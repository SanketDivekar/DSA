function printStarPattern(n) {
  if (n < 0) {
    console.log("-1");
  }
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j < n - (i + 1)) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }
    console.log(row);
  }

  // alternate logic for this pattern
  // for (let i = 0; i < n; i++) {
  //   let row = "";
  //   // Below loop will add all the empty spaces
  //   for (let j = 0; j < n - (i + 1); j++) {
  //     row = row + " ";
  //   }
  //   // Below loop will add all the stars
  //   for (let k = 0; k < i + 1; k++) {
  //     row = row + "*";
  //   }
  //   console.log(row);
  // }
}

printStarPattern(5);

// above code will print below pattern

// n = 5

//     *
//    **
//   ***
//  ****
// *****

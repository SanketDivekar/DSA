function printStarPattern(n) {
  if (n < 0) {
    console.log("-1");
  }
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

printStarPattern(4);

// above code will print below pattern

// n = 4

// *
// * *
// * * *
// * * * *

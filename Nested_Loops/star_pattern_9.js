function printStarPattern(n) {
  if (n < 0) {
    console.log("-1");
  }

  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + toggle + " ";

      //   below condition to switch toggle value
      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

printStarPattern(6);

// above code will print below pattern

// n = 6

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1 0 1

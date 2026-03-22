function printEvenNumbers(arr) {
    if (arr.length < 1) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}

printEvenNumbers([2]);
function removeDuplicates(arr) {

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[count]) {
            count = count + 1;
            arr[count] = arr[i];
        }
    }
    return count + 1;
}

const result = removeDuplicates([0,0,1,1,2,3,4,5,5,6]);
console.log(result);


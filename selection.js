let arr = [2, 4, 6, 7, 88]
// console.log(arr);
let min;

for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j <= arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = arr[j];
            console.log(min);
        }
    }
}
// console.log(arr);


// let arr = [13, 4, 8, 6, 2]
// let min;

// for (let i = 0; i < arr.length; i++) {
//     min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[min] > arr[j]) {
//             min = j;
//         }
//         if (min) {
//             let temp = arr[min];
//             arr[min] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }
// console.log(arr);

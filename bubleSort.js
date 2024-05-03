// let arr = [8, 54, 99, 67, 4, 2, 3, 55];

// for (let i = 0; i < arr.length; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//             let swap = true;
//         }
//     }
//     if (!swap) {
//         break;
//     }
// }
// console.log(arr);

let array = [4, 5, 7, 9, 11, 45, 2];

for (let i = 0; i < array.length; i++) {
    let swap = false;

    for (let j = 0; j < array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[j]

            array[j] = array[j + 1];
            array[j + 1] = temp;
             swap = true;
        }
    }
     if(!swap){
         break;
     }
}
console.log(array);



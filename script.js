function fibs(n) {
    let array = [0, 1];
    let x1 = 0;
    let x2 = 1;

    for (let i = 2; i < n; i++) {
        let x3 = x1 + x2;
        array.push(x3);
        x1 = x2;
        x2 = x3;
    }

    return array;
}
fibs(8);

function fibsRec(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const fibs = fibsRec(n - 1);
        const length = fibs.length;
        const nextFib = fibs[length - 1] + fibs[length - 2];
        return [...fibs, nextFib];
    }
}
// console.log(fibsRec(10));

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    } else {
        let midIndex = Math.floor(array.length / 2);
        let leftSubArray = mergeSort(array.slice(0, midIndex));
        let rightSubArray = mergeSort(array.slice(midIndex));

        let newArray = [];
        let indexIntoLeft = 0;
        let indexIntoRight = 0;
        for (let i = 0; i < array.length; i++) {
            if (leftSubArray[indexIntoLeft] > rightSubArray[indexIntoRight]) {
                if (rightSubArray[indexIntoRight] === undefined) {
                    newArray.push(leftSubArray[indexIntoLeft]);
                    indexIntoLeft++;
                } else {
                    newArray.push(rightSubArray[indexIntoRight]);
                    indexIntoRight++;
                }
            } else {
                if (leftSubArray[indexIntoLeft] === undefined) {
                    newArray.push(rightSubArray[indexIntoRight]);
                    indexIntoRight++;
                } else {
                    newArray.push(leftSubArray[indexIntoLeft]);
                    indexIntoLeft++;
                }
            }
        }
        return newArray;
    }
}

let arrayForMerge = [2, 4, 1, 3, 6, 5, 8, 6, 9, 9, 11, 10,];
console.log("arrayForMerge = " + arrayForMerge + "\n");
console.log(mergeSort(arrayForMerge));

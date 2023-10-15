/* The mergeSort function receieves an array then it breaks the arrays 
down by splitting them in half until they are individual values in an array
the values are then passed to the merge function 1 by one.  */

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    const mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr),mergeSort(rightArr));

}

/* The merge function takes a left and right array that is one value and compare them and
will do this until it gets sent no more values it takes each left and right array values 
and compares them and will push the lesser value to the array to organize it properly.

    A good way to express this one is merge takes in a left value and right
    then it compares it and pushes the smaller single value to the new array called
    sortedArr. The unused value wether be right or left is kept for the next comparison.
    It then sends more values in constantly comparing them until their are no more 
    values left to send. It then returns the array completed and sorted and we get a 
    nice sorted array.*/
    
function merge(left,right){
    const sortedArr = [];

    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArr.push(left.shift());
        }else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right]

}

const test = [12,67,2,14,55,5556,67876,23222,1123,55556,2134,3];

console.log(mergeSort(test)); 

/* The console should return the following array
[2,3,12,14,55,67,1123,2134,5556,23222,55556,67876] */


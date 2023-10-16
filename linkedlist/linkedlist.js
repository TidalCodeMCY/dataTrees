/* The Linked List to null
    This data structure is a list of data where each data value points to the next until 
    the last one that points to null.
    
        The methods that will be included are.
        - append(value) - accepts a value and adds it to list at the front
        - prepend(value) - accepts a value and adds it to list at the end
        - removeAt(index) - accepts and index value and will remove the data at that index.
        - remove(value) - accepts a value amount and will find and delete that data.
        - search(value) - accepts a value and will return the data
        - buildList(array) - accepts an array of data and will turn it into a linked list
        - isEmpty() - Checks if the list is empt if so will return true if not false
        - size() - Checks and returns the size of the list.
        - head() - Returns the head element.
        - tail() - Returns the tail element.
        - print() - prints the list to the console to see its visual representation.
        
Linked Lists Usage

- Image Viewers and more

This code was created by following the video lessons on youtube the address is below
https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy  
-This link takes you to the data structure video list by Codevolution.*/

class Node{
    constructor(value){
        this.value = value;
        this.node = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
        }else{
            node.node = this.head;
            this.head = node;
        }    
        this.size++;
    }

    append(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;

            while(prev.node){
                prev = prev.node;
            }
            prev.node = node;
        }
        this.size++;
    }

    insertAt(value, index){
        if(index < 0 || index > this.size){
            console.log('invalid index');
            return;
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let previous = this.head;

            if(index === null){
                for(let s=0; s < this.size -1; s++){
                    previous = previous.node;
                }
                this.size++;
            }else{
                for(let s=0; s<index-1; s++){
                    previous = previous.node;
                }
                this.size++;
            };

            node.node = previous.node;
            previous.node = node;
            
        }
    }
    
    removeAt(index){
        let previous = this.head;
        let target = this.head;

        if(index < 0 || index > this.size){
            console.log('Index is invalid for deletion.')
            return null;
        }

        if(index === null){
            for(let s=0; s<this.size -2; s++){
                previous = previous.node;
            }

            for(let s=0; s<this.size -1; s++){
                target = target.node;
            }
        }else if(index === 0){
            let head = this.head;

            for(let s=0; s<index+1; s++){
                head = head.node;
            }

            this.head = head;
        }else{
            for(let s=0; s<index -1; s++){
                previous = previous.node;
            }

            for(let s=0; s<index; s++){
                target = target.node;
            }

        }

        previous.node = target.node;
        this.size--;
    }

    remove(value){
        if(this.isEmpty()){
            console.log('list is empty');
            return null;
        }

        if(this.head.value === value){
            this.head = this.head.node;
            this.size--;
            return value;
        }else{
            let previous = this.head;
            while(previous.node && previous.node.value !== value){
                previous = previous.node;
            }

            if(previous.node){
                const removedNode = previous.node;
                previous.node = removedNode.node;
                this.size--;
                return value;
            }
            return null;
        }


    }

    search(value){
        if(this.isEmpty()){
            console.log('list is empty');
            return null;
        }

        if(this.head.value === value){
            return this.head;
        }else{
            let position = this.head;

            while(position && position.value !== value){
                position = position.node;
            }

            if(position.value === null){
                console.log('value doesnt exist');
                return;
            }else{
                return position;
            }
        }
    }

    getHead(){
        return this.head;
    }

    tail(){
        let tempHead = this.head;
        while(tempHead.node){
            tempHead = tempHead.node;
        }
        return tempHead;
    }

    buildList(arr){
        let sortedArr = mergeSort(arr);
        sortedArr = removeDups(sortedArr);

        sortedArr.forEach((element) => {
            this.prepend(element);
        })
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty.');
        }else{
            let value = this.head;
            let arrayData = [];
    
            while(value){
                arrayData.push(value.value);
                value = value.node;
            }
            
            arrayData = arrayData.toString();
            arrayData = arrayData.replaceAll(',',' -> ');
    
            console.log(`Head-> ${arrayData} -> null`);
        } 
    }
}

const list = new LinkedList();

console.log(list.isEmpty());
list.buildList([10,13,344,564,43,444,21,12,13,10,344]);
list.prepend(2345);
list.append(1);
list.print();
console.log(list.getSize());
console.log(list.getHead());
console.log(list.tail());
console.log(list.search(344));


//This is the mergesort data needed for the buildList method

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

//This function will take an array and remove any duplicates

function removeDups(arr){
    const newArray = [];

    if(Array.isArray(arr)){
        arr.forEach((element) => {
            if(!newArray.includes(element)){
                newArray.push(element);
            }
        });
        return newArray;
    }else{
        console.log('needs to pass an array');
        return null;
    }
}
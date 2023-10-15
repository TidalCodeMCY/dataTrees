/* The Queue
    This will be an implementation of queue a data structure that is a fifo structure.
    Fifo is first in first out so the first element inserted will always be the first out
    its kind if like a line of people.
    
        This implementation will include
        -enqueue(element)- this will add an element to the queue
        -dequeue() - this will remove the oldest element from the queue
        -peek() - gets the element from the front without removing it
        -isEmpty() - checks if it is empty or not returns a true or false value
        -size() - returns the size value of the queue
        -print() - prints the queue in a string to help visualize it.
        
When is a queue useful

-printers use
-cpu task scheduling
-callback queue in js runtime 

This code was created by following the video lessons on youtube the address is below
https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy  
-This link takes you to the data structure video list by Codevolution.*/

class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        return this.items.shift();
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }

        return null;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){    
        console.log(this.items.toString());
    }
}

const queue = new Queue();

queue.enqueue(45);
queue.enqueue(63);
console.log(queue.peek());
queue.enqueue(134);
queue.enqueue(65);


console.log(queue.dequeue());
console.log(queue.peek());

queue.dequeue();
queue.print();

queue.enqueue(456);
queue.print();

console.log(queue.size(),queue.isEmpty());
queue.dequeue();
queue.print();
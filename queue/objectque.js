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

Why use this over the array queue.
-the dequeue method is more efficient so this is a better optimized queue for performance.

This code was created by following the video lessons on youtube the address is below
https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy  
-This link takes you to the data structure video list by Codevolution.*/

class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front =0;
    }

    enqueue(value){
        this.items[this.rear] = value;
        this.rear++;
    }

    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items);
    }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(45);
queue.enqueue(64);
queue.enqueue(877);
queue.enqueue(4500);

console.log(queue.dequeue());
queue.print();
console.log(queue.size());

queue.enqueue(45987);
queue.enqueue(12);

queue.dequeue();
console.log(queue.size());

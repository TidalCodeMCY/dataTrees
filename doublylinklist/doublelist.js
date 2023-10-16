/* The double linked list
    This data structure has both a next and previous pointer so you can 
    traverse the data structure from the tail or from the head. 
    
    This list includes the following methods
    -isEmpty() - returns true if empty false if not
    -getSize() - returns the size of the list
    -getHead() - returns the head value
    -getTail() - returns the tail value
    -append(value) - adds value to the tail end of the list
    -prepend(value) - adds the value to the head of the list
    -removeFromFront() - removes the element at the head
    -removeFromEnd() -  removes the element at the tail
    -print() - prints the list in the console

    This code was created by following the video lessons on youtube the address is below
https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy  
-This link takes you to the data structure video list by Codevolution.

This project was coded by Mason Yates on 10/16/2023 I used the video series to help me learn 
this and create this. */

class Node{
    constructor(value){
        this.previous = null;
        this.value = value;
        this.next = null;
    }
}

export class DoubleList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    getHead(){
        return this.head.value;
    }

    getTail(){
        return this.tail.value;
    }

    append(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
            this.size++;
        }else{
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
            this.size++;
        }
    }

    prepend(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
            this.size++;
        }else{
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
            this.size++;
        }

    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log('list is empty');
            return null;
        }else{
            this.head = this.head.next;
            this.size--;
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log('list is empty');
            return null;
        }
        
        if(this.size === 1){
            this.head = null;
            this.tail = null;
            this.size--;
        }else{
           const previous = this.tail.previous;
           previous.next = null;
           this.size--;
        }
    }

    print(){
        let head = this.head;

        let string = 'null/head <:';

        while(head){
            const stringAdd = `:${head.value}:`;
            string = string+stringAdd;
            head = head.next;
        }
        string = string + ':> tail/null';
        console.log(string);
    }
}

const list = new DoubleList();

list.prepend(31);
list.prepend(65);
list.append(32);
list.append(765);
list.removeFromEnd();
list.print();
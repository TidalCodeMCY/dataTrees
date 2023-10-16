/* The Linked list with head and tail
    This code creates a linked list with a head and tail pointer to help keep track of 
    the head and tail nodes.
    
    Methods included in this one so far are.
    -isEmpty() - Checks if the list is empty or not returns true or false.
    -getSize() - returns the size of the list.
    -getHead() - returns the current head.
    -getTail() - returns the current tail.
    -append(value)- adds the value passed to the tail end
    -prepend(value)- adds the value passed to the front end of the head
    -removeFromFront()- removes the element from the head or the front
    -removeFromEnd()- removes the element from the end
    -print()- this is a method I created to print the list into the console in an 
    easier to read manner.
    
   Linked Lists Usage

- Image Viewers and more

This code was created by following the video lessons on youtube the address is below
https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy  
-This link takes you to the data structure video list by Codevolution. */


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList{
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
        }else{
            this.tail.next = node;
            this.tail = node;  
        }
        this.size++;
        return node;
    }

    prepend(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return node;
    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log('list is empty');
            return null;
        }else{
            let nextVal = this.head;
            const value = this.head.value;

            for(let s=0; s < 1; s++){
                nextVal = nextVal.next;
            }

            this.head = nextVal;
            this.size--;
            return value;
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log('list is empty')
            return null;
        }
        
        const value = this.tail.value;

        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let previous = this.head;

            while(previous.next !== this.tail){
                previous = previous.next;
            }
            previous.next = null
            this.tail = previous;
        }
        this.size--;
        return value;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty.');
        }else{
            let value = this.head;
            let arrayData = [];
    
            while(value){
                arrayData.push(value.value);
                value = value.next;
            }
            
            arrayData = arrayData.toString();
            arrayData = arrayData.replaceAll(',',' -> ');
    
            console.log(`Head-> ${arrayData} -> null`);
        } 
    }
}


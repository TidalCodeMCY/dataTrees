/* The Stack
    The code below will create a stack which is a Last in first out type of data structure.
A good mental image is a stack of plates you pull from the top of the last one you placed on 
the stack. a code stack is a similar idea.  

    This implementation of stack will have the following capabilities
        -push(element)-add an element to the top of the stack.
        -pop()-remove the topmost element from the stack.
        -peek()-see the top element of the stack without removing it.
        -isEmpty()-check if the stack is empty or not this returns true or false.
        -size()-check the size of the stack(how many things are stored  inside of the stack.)
        -print()-let us visualize the elements in the stack.
    
Good Uses for Stack
-Browser History Tracking
-Undo operation when typing
-Expression Coversion
-Call stack in java runtime

This code was created by following the video lessons on youtube the address is below
https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy  
-This link takes you to the data structure video list by Codevolution.*/

class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
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

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(55);
stack.push(43);
stack.push(44);
stack.print();
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());

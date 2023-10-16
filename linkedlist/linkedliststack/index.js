import LinkedList from "./stacklist.js";

class LinkedListStack{
    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.list.getHead();
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    print(){
       return this.list.print(); 
    }
}

const stack = new LinkedListStack;

stack.push(31);
stack.push(433);
stack.print();
stack.pop();
stack.print();
import LinkedList from "./quelist.js";


class LinkedListQueue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.list.getHead();
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    size(){
       return this.list.getSize(); 
    }

    print(){    
       this.list.print(); 
    }
}

const queue = new LinkedListQueue();

queue.enqueue(31);
queue.enqueue(43);
queue.enqueue(544);
queue.dequeue();
queue.print();
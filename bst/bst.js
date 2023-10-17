import mergeSort from "./mergesort.js";
import Queue from "./queue.js";

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class Tree {
    constructor(array){
        this.root = this.build(array);
    }

    insert(value){
        const node = new Node(value);
        //console.log(node);
        if(!this.isEmpty()){
            this.insertNode(this.root, node);   
        }else{
            this.root = node;
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value){
        if(root === null){
            return root;
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    getHeight(root){
        let left; 
        let right;

        if(root === null){
            return 0;
        }

        if(!root.left){
            
        }else if(!root.right){
            
        }

        
        return 1 + Math.max(this.getHeight(root.left),this.getHeight(root.right));  
    }

    inOrder(root, array){
        let value = array || [];

        if(root){
            this.inOrder(root.left,value);
            value.push(root.value);
            this.inOrder(root.right,value);
        }   

        return value;
    }

    preOrder(root,array){
        let value = array || [];

        if(root){
            value.push(root.value);
            this.preOrder(root.left, value);
            this.preOrder(root.right, value);   
        }

        return value;
    }

    postOrder(root,array){
        let value = array || [];

        if(root){
            this.inOrder(root.left,value);
            this.inOrder(root.right,value);
            value.push(root.value);
        }   

        return value;
    }

    levelOrder(root){
        let queTarget = root || this.root;

        if(this.isEmpty()){
            console.log('tree is empty');
            return null;
        }else{
            const queue = new Queue();
            queue.enqueue(queTarget);
            let levels = [];

            while(!queue.isEmpty()){
                const dequeued = queue.dequeue();
                const newtext = `- ${dequeued.value} `;
                levels.push(dequeued.value);  
                queue.enqueue(dequeued.left);
                queue.enqueue(dequeued.right);
            }
            return levels;
        }
    }

    find(val){
        if(this.isEmpty()){
            console.log('tree is empty');
            return null;
        }else{
            return this.findPos(val, this.root);
        }
    }

    search(root, value){
        if(!root){
            return false;
        }else{
           if(root.value === value){
                return true;
           }else if(value < root.value){
            return this.search(root.left, value);
           }else{
            return this.search(root.right, value);
           } 
        }
    }

    isEmpty(){
        return this.root === null;
    }

    print(){
        return prettyPrint(this.root);
    }
    
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right);
        }
    }

    build(array){
        if(Array.isArray(array)){
            const sorted = mergeSort(array);
            const middle = Math.floor(sorted.length/2);
            const mid = sorted.splice(middle,1);

            if(this.root === undefined){
                this.root = null;
                this.insert(mid[0]);
                this.build(sorted);
            }else{
                if(sorted.length < 1){
                    return;
                }
                this.insert(mid[0]);
                this.build(sorted);
            }
        }else{
            return null;
        }
        return this.root;
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left  = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else if(newNode.value > root.value){
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    findPos(val, node){

        if(val === node.value){
            return node;
        }else if(val < node.value){
            return this.findPos(val, node.left);
        }else if(val > node.value){
            return this.findPos(val, node.right);
        }
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const tree = new Tree();
console.log(tree.isEmpty());

tree.build([35,36,43,22,5555,34]);
tree.insert(33);
tree.insert(44);
tree.insert(22);
console.log(tree.find(5555, tree.root));
console.log(tree.search(tree.root, 33));
tree.print();
console.log(tree.postOrder(tree.root));
console.log(tree.getHeight(find(34)));
tree.delete(33);
tree.print();
console.log(tree.getHeight(tree.root));
//[12,33,5555,44,32,1,78,3,45,5,6666,12,33,5,6666]


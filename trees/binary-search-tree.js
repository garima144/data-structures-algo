class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(val < current.value){
                    if(current.left){
                        current = current.left;
                        continue;
                    }else{
                        current.left = newNode;
                        return this;
                    }
                }else if(val > current.value){
                    if(current.right){
                        current = current.right;
                        continue
                    }else{
                        current.right = newNode;
                        return this;
                    }
                }
            }
        }
    }
    /*
        1. See if root exist. If not return false
        2. set root to current, if current is equal to val return true
        3. If val is greated then current then set current to current.right
        4. If val is less then current then set current to current.left
        5. if current is null break the loop & return 
    */
    find(val){
        let current = this.root;
        let found = false;
        if(!this.root) return false;
        while(!found && current){
            if(current.value == val) found = true;
            else if (val > current.value) current = current.right;
            else current = current.left;
        }
        return found;
    }   
    /*BFS traversal 
        1. create a queue
        2. Add root to the queue
        3. Pop node from queue
        4. if node has left child push into queue
        5. if node has right child push into queue
        6. repeat steps from 3-5
    */

    bfsTraverse(){
        let data = [],
            queue = [],
            node = this.root;
            queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left){queue.push(node.left)}
            if(node.right){queue.push(node.right)}
        }
        return data
    }

    dfsPreOrderTraverse(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node);
            if(data.left) traverse(data.left);
            if(data.right) traverse(data.right);
        }
        traverse(current);
        return data;
    }
    dfsPostOrderTraverse(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    dfsInOrderTraverse(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}
//        10
//      5    13
//    2   6     14
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(13);
binaryTree.insert(2);
binaryTree.insert(14);
binaryTree.insert(6);
console.log(binaryTree);
binaryTree.bfsTraverse()
binaryTree.dfsPostOrderTraverse(); //[2,6,5,14,13,10]
binaryTree.dfsInOrderTraverse(); //[2,5,6,10,13,14]
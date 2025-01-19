class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglylinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length ==0){
            newNode.next = null;
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    traverse(){
        var current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }

    pop(){
        if(!this.head) return "nothing to remove";
        var current = this.head;
        var newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length==0){
            this.head = null;
            this.tail = null;
        }
    }
    
    shift(){
        if(!this.head) return undefined;
        const newHead = this.head.next;
        this.head.next = null;
        this.head = newHead;
        this.length--;
        if(this.length==0){
            this.tail = null;
        }
    }
    unshift(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    getNode(index){
        if(index<0 || index > this.length) return null;
        let current = this.head;
        let counter = 0;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;
    }
    
    setNode(index,val){
        if(index<0 || index > this.length) return null;
        let current = this.head;
        let counter = 0;
        while(counter !== index){
            current = current.next;
            counter++
        }
        current.value = val;
    }
    inserNode(val, i){
        if(i== this.length) return this.push(val);
        if(i==0) return this.unshift(val);
        let prevNode = this.getNode(i-1);
        let newnode = new Node(val);
        newnode.next = prevNode.next;
        prevNode.next = newnode;
        this.length++;
    }
    removeNode(i){
        if(i>= this.length) return null;
        if(i == this.length-1) return this.pop();
        if(i==0) return this.shift();
        let prevNode = this.getNode(i-1);
        let node = this.getNode(i);
        prevNode.next =  node.next;
        node.next = null;
        this.length--;
        if(this.length==0){
            this.head = null;
            this.tail = null;
        }
    }

    reverse(){
        // var node = this.head;
        // this.head = this.tail;
        // this.tail = node;
        // var next; 
        // var prev = null;
        // for(let i=0; i< this.length; i++){
        //     next = node.next; // 3 
        //     node.next = prev; // 2 -> null 
        //     node = next;  // node = 3
        //     prev = next; // prev = 
        // }
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
    }
    
      rotate(n){
        let currentHead = this.head;
        let current = this.head;
        let prev; 
        let next; 
        for(let i=0; i< n-1; i++){
            current = current.next;
        }
        prev = current;
        next = current.next;
        prev.next = null;
        this.tail.next = this.head;
        this.tail = prev;
        this.head = next;
    }
}


const newSinglylinkedlist = new SinglylinkedList();
newSinglylinkedlist.push(22);
newSinglylinkedlist.push(34);
newSinglylinkedlist.push(44);
newSinglylinkedlist.push(78);
newSinglylinkedlist.push(49);
newSinglylinkedlist.traverse();
// console.log("before");
// newSinglylinkedlist.pop();
// newSinglylinkedlist.traverse();
// console.log("before shift");
// newSinglylinkedlist.shift();
// newSinglylinkedlist.traverse();
// newSinglylinkedlist.unshift(99);
// console.log("before unshift");
// newSinglylinkedlist.traverse();
// console.log(newSinglylinkedlist.getNode(2))
// newSinglylinkedlist.setNode(2, 87);
console.log("after pop");
newSinglylinkedlist.traverse();
// newSinglylinkedlist.inserNode(34, 4);
newSinglylinkedlist.reverse();
console.log("After reverse");
newSinglylinkedlist.traverse();
console.log("rotate");
newSinglylinkedlist.rotate(2);
newSinglylinkedlist.traverse();

function mergeLinkList(l1,l2){
    let newList = new SinglylinkedList();
    let j=0;
    let current = l1.head;
    let l2current = l2.head;
    while(current !== l1.tail){
        if(current.value > l2current.value){
            newList.push(l2current.value);
        }else{
            newList.push(current.value)
        }
    }
}
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    pop(){
        if(this.length==0) return undefined;
        if(this.length==1){
            this.head = null;
            this.tail = null;
        }else {
            let prev = this.tail.prev;
            prev.next = null;
            this.tail.prev = null;
            this.tail = prev;
        }
        this.length--;
    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}
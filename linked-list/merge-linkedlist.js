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
}
const l1 = new SinglylinkedList();
l1.push(2);
l1.push(4);
l1.push(10);
l1.push(15);

const l2 = new SinglylinkedList();
l2.push(1);
l2.push(3);
l2.push(20);
l2.push(22);
function mergeLinkList(l1, l2) {
    let newList = new SinglylinkedList();
    let current = l1.head;
    let l2current = l2.head;

    while (current !== null && l2current !== null) {
        if (current.value < l2current.value) {
            newList.push(current.value);
            current = current.next;
        } else {
            newList.push(l2current.value);
            l2current = l2current.next;
        }
    }

    // Add remaining nodes from l1 or l2
    while (current !== null) {
        newList.push(current.value);
        current = current.next;
    }

    while (l2current !== null) {
        newList.push(l2current.value);
        l2current = l2current.next;
    }

    return newList;
}

const mergedList = mergeLinkList(l1, l2);
mergedList.traverse();
// console.log(mergedList);

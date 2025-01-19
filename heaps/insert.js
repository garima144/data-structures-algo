class heap{
    //         55
    //     45      33
    //  12    10 5    20
    //15
    // [55, 45, 33, 12, 10, 5, 20]
    /**
     * leftchild = 2n+1, 
     * right child = 2n+2
     *  */ 
    // 55 => 2(0) +1 = 1:45, 2(0)+2 = 2:33
    // 33 => 2(2) +1 = 5:5, 2(2)+2 = 6:20 
    /**
     * parent = n/2 -1 
    **/ 
    // 20 => 6/2-1 = 2
    //10 => 4/2-1 = 1
    //[55, 45, 33, 12, 10, 5, 20, 15]
    heap = [55, 45, 33, 12, 10, 5];

    insert(val){
       this.heap.push(val);
       let lastIndex = this.heap.length-1;
       let parentIndex = Math.floor((lastIndex-1)/2);
       while(this.heap[parentIndex] < this.heap[lastIndex]){
            let temp = this.heap[lastIndex];
            this.heap[lastIndex] = this.heap[parentIndex];
            this.heap[parentIndex] = temp;
            lastIndex = parentIndex;
            parentIndex = Math.floor((lastIndex-1)/2)
       }
    }

    extractMax(){
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        let current = 0;
        while(true){
            let leftchildIndex = 2*current+1;
            let rightChildIndex = 2*current+2
            let leftchild = this.heap[leftchildIndex];
            let rightChild = this.heap[rightChildIndex];
            if(leftchild > rightChild && leftchild > this.heap[current]){
                let temp = this.heap[current];
                this.heap[current] = leftchild;
                this.heap[leftchildIndex] = temp;
                current = leftchildIndex;
            }else if(rightChild > this.heap[current]){
                let temp = this.heap[current];
                this.heap[current] = rightChild;
                this.heap[rightChildIndex] = temp;
                current = rightChildIndex;
            }else break;
        }
        console.log(this.heap);
    }
}

let newheap = new heap();
// newheap.insert(20);
// newheap.insert(15)
console.log(newheap)
newheap.extractMax();
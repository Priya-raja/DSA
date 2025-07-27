class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    add(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }
        else {
            this.tail.next= newNode
            this.tail= newNode
            }
            this.length++
            return this

            }

            


    pop(){

        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = this.head.next;
        }
        this.tail = pre;
        temp.next= null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
       

       
    }
}

const l1 = new LinkedList(4);// Should return the last node
console.log(l1.add(8));
console.log(l1.add(7)); // Should return the last node after adding 8
console.log(l1.pop());
console.log(l1.pop) // Should return the last node after adding 7 and 8
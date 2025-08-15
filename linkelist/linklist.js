class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0

    }

    getLength(){
        return this.size;
    }

    add(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        
        current.next = newNode;
    }
//at the start
    addAtStart(value){
        const temp = new Node(value);
        temp.next = this.head;
        this.head = temp;
        return temp
    }

    addAtEnd(value){
        const newNode = new Node(value);
        let temp = this.head;
        while(temp.next){
            temp = temp.next
        }
        temp.next = newNode;
        return temp
    }
//delete
    remove(value){
        let pos = 0
        if(this.head === null) return;
        if(this.head.value === value){
            this.head = this.head.next;
            pos = 1;
            return pos;
            
        }
        let current = this.head;
        while(current.next){
            if(current.next.value === value){
                current.next = current.next.next;
                pos++;
                return pos;
            }
            current = current.next;
            pos++;
        }
    }
    printList(){
        let result = '';
        
            let current = this.head;
        while(current){
            result+= current.value + ' -> '
            current = current.next;
        }
        console.log(result + 'null');
    }
}

let list = new LinkedList();
list.add(1);
list.add(5);
list.add(6);
list.addAtStart(90);
list.remove(90);
list.addAtStart(80);
list.addAtEnd(100);
list.add(10);
list.printList(); 

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;

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
list.printList(); // Output: 1 -> 5 -> 6 -> null

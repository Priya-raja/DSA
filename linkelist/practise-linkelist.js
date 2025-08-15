class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.length = 1
    }
}

class Linklist {
    constructor(){
        this.head = null
         this.size = 0
    }

    getLength(){
        return this.size;
    }
    addValue(value){
        const newNode = new Node (value)
        if (!this.head){
            this.head = newNode
            
        }else {
        let current = this.head
        while(current.next){
            current = current.next
        }
       
        current.next = newNode
    }
      this.size++
    }

    reverse(){

        let previous = null
        let current = this.head

        while(current !== null){
            let nextNode = current.next
            current.next = previous
            previous= current
            current = nextNode
        }
        this.head = previous
    }

    printList(){
        let result = ''
        let current = this.head
        while(current){
            result+= current.value + '->'
            current = current.next
        }
        console.log(result + 'null')
    }

}

const l1 = new Linklist()
l1.addValue(10)
l1.addValue(20)
l1.addValue(30)
l1.printList()
console.log(l1.getLength())
l1.reverse()
l1.printList()
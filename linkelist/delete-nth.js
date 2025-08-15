// Nth node from the end of a Linked List using two pointers:
// As Nth node from the end equals to (Length – N + 1)th node from the start, so the idea is to Maintain two pointers starting from
// the head of the Linked-List and move one pointer to the Nth node from the start and then move both the pointers together until
// the pointer at the Nth position reaches the last node. Now the pointer which was moved later points at the Nth node from the 
// end of the Linked-List
//NAive approach.. calculate length then use (len-n+1) loop and remove.
//Smart Two pointer

class Node{
    constructor(value){
        this.head = value
        this.next = null

    }
}



function nthNodefromLast(head, N){
    let temp = new Node(0)
    temp.next = head;

    let first = temp;
    let refPtr = temp.next;

    for (i =1; i< N; i++)
    {
        refPtr = refPtr.next
        if(refPtr === null) return -1
    }
    

    while(refPtr.next !== null){
        first = first.next;
        refPtr = refPtr.next
    }
    first.next = first.next.next
    return temp.next

}

function PrintList (head){
    let result = ''
    let current = head;
    while (current){
        result+= current.head + '->'
        current = current.next
    }
    console.log("result", result + 'null')

}
const head = new Node(35);
console.log(head)
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

PrintList(head)
// Function call to find the 4th node from end
const res = nthNodefromLast(head, 2);
PrintList(res)


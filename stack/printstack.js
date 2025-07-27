// Solution 1: Using JavaScript Array as Stack
function insertIntoStack(N, arr) {
    const stack = [];
    
    // Insert elements from left to right (index 0 to N-1)
    for (let i = 0; i < N; i++) {
        stack.push(arr[i]);
    }
    
    return stack;
}

// Solution 2: More concise using spread operator
function insertIntoStackConcise(N, arr) {
    return [...arr];
}

// Solution 3: Using slice if you want to be explicit about using first N elements
function insertIntoStackSlice(N, arr) {
    return arr.slice(0, N);
}

// Test cases
console.log("Test Case 1:");
const arr1 = [1, 2, 3, 4, 5];
const stack1 = insertIntoStack(5, arr1);
console.log("Input:", arr1);
console.log("Stack:", stack1);
console.log("Stack top to bottom:", stack1.slice().reverse().join(' '));

console.log("\nTest Case 2:");
const arr2 = [1];
const stack2 = insertIntoStack(1, arr2);
console.log("Input:", arr2);
console.log("Stack:", stack2);
console.log("Stack top to bottom:", stack2.slice().reverse().join(' '));

// Helper function to display stack from top to bottom (as shown in examples)
function displayStack(stack) {
    return stack.slice().reverse().join(' ');
}

console.log("\nUsing display helper:");
console.log("Stack 1 display:", displayStack(stack1)); // Should output: 5 4 3 2 1
console.log("Stack 2 display:", displayStack(stack2)); // Should output: 1

// If you need actual stack operations (push, pop, peek)
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    display() {
        return this.items.slice().reverse().join(' ');
    }
}

// Using the Stack class
function insertIntoStackClass(N, arr) {
    const stack = new Stack();
    
    for (let i = 0; i < N; i++) {
        stack.push(arr[i]);
    }
    
    return stack;
}

console.log("\nUsing Stack class:");
const stackClass = insertIntoStackClass(5, [1, 2, 3, 4, 5]);
console.log("Stack display:", stackClass.display()); // 5 4 3 2 1   
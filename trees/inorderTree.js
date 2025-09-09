let input = [1,null,2,3]

function InorderTraversal(arr) {
    let result = []
    let stack = []

    let currentNode = arr

    while (currentNode || stack.length) {
        while (currentNode) {
            stack.push(currentNode)
            currentNode = arr.left
        }
        currentNode = stack.pop()
        result.push(currentNode)
        currentNode = arr.right
    }
    return result
}
console.log(InorderTraversal(input))
# Find the Kth smallest node in a BST
# iterative solution using stack DFS

class TreeNode:
    def __init__(self, val = 0, left = None, right= None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def Kth_smallestNode(self, root:TreeNode, k:int) -> int:
        stack = []
        node = root

        while stack or node:
            while node:
                stack.append(node)
                node = node.left
            node = stack.pop()
            k -= 1
            if k == 0:
                return node.val
            node = node.right
# Example usage:
# Constructing a BST
root = TreeNode(5)
root.left = TreeNode(3)
root.right = TreeNode(7)
root.left.left = TreeNode(2)
root.left.right = TreeNode(4)       

sol = Solution()
print(sol.Kth_smallestNode(root, 3))
 # Output: 4 ( 
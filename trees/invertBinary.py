from typing import Optional
class TreeNode:
    def __init__(self,val=0,left=None,right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def helper(self,root):
        if root is None:
            return None
        #Swap the left and right subtree of the current node
        root.left, root.right = root.right, root.left
        # Recursively invert the left and right subtrees.
        self.helper(root.left)
        self.helper(root.right)
        return root
    def invertBinaryTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        self.helper(root)
        return root
    
# ----------- TESTING ------------
# Create a binary tree:
#        1          
#       / \
#      2   3
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)            
sol = Solution()
inverted_root = sol.invertBinaryTree(root)
# The inverted tree should be:
#        1
#       / \
#      3   2
print(inverted_root.val)  # Output: 1
print(inverted_root.left.val)  # Output: 3
print(inverted_root.right.val)  # Output: 2
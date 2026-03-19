from typing import Optional, List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:

    def helper(self, root,res):
        if not root:
            return
        res.append(root.val)
        self.helper(root.left,res)
        self.helper(root.right,res)

    def preOrderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        self.helper(root,res)
        return res
    

# ----------- TESTING ------------

# Create a binary tree:
#        1
#         \
#          2
#         /
#        3

root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

sol = Solution()
print(sol.preOrderTraversal(root))
        
 
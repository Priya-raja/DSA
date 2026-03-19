from typing import Optional, List

class TreeNode:
    def __init__(self,val=0,left=None,right=None):
        self.val=val
        self.left=left
        self.right=right
class Solution:

    def helper(self, root,res):
        if not root:
            return
        
        self.helper(root.left,res)
        self.helper(root.right,res)
        res.append(root.val)

    def postOrderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        self.helper(root,res)
        return res
    
    # ----------- TESTING ------------

# Create a binary tree:
#        1
#         \
cv
#          2
#         /
#        3

root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

sol = Solution()
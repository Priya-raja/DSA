""" #Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values 
in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children. 
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
"""

from typing import List, Optional

class TreeNode :
    def __init__(self,val = 0, left = None, right = None):
        self.val= val
        self.left = left
        self.right = right
class Solution:
    def helper(self, root: Optional[TreeNode], targetSum: int,
               res: List[List[int]], curr: List[int]) -> None:
        if root is None:
            return

        # choose
        curr.append(root.val)

        # check if it's a leaf and sum matches
        if root.left is None and root.right is None and targetSum == root.val:
            res.append(curr[:])   # append a copy

        # explore
        self.helper(root.left, targetSum - root.val, res, curr)
        self.helper(root.right, targetSum - root.val, res, curr)

        # un-choose (backtrack)
        curr.pop()

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res: List[List[int]] = []
        curr: List[int] = []
        self.helper(root, targetSum, res, curr)
        return res
        
# ----------- TESTING ------------
# Create a binary tree:
#        5
#       / \
#      4   8
#     /   / \
#    11  13  4
#   /  \    / \
#  7    2  5   1        
root = TreeNode(5)
root.left = TreeNode(4)
root.right = TreeNode(8)
root.left.left = TreeNode(11)
root.left.left.left = TreeNode(7)
root.left.left.right = TreeNode(2)
root.right.left = TreeNode(13)
root.right.right = TreeNode(4)
root.right.right.left = TreeNode(5) 
root.right.right.right = TreeNode(1)
targetSum = 22
sol = Solution()
print(sol.pathSum(root,targetSum))

            
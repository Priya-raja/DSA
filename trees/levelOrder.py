# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


from typing import List, Optional
from collections import deque

class TreeNode:
    def __init__(self,val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def  leveorder(self,root: TreeNode) -> List[List[int]]:
        res = []

        if root is None:
            return res

       
        queue = deque() 
        queue.append(root)

        while queue:
            level_size = len(queue)
            level_nodes = []

            for _ in range(level_size):
                front_node = queue.popleft()
                print(front_node.val)
                level_nodes.append(front_node.val)

                if front_node.left:
                    queue.append(front_node.left)
                if front_node.right:
                    queue.append(front_node.right)
            res.append(level_nodes)
        return res
    
# ----------- TESTING ------------
# Create a binary tree:
#        3
#       / \
#      9   20   
#          / \
#        15  7   
#
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.right = TreeNode(7)
root.right.left = TreeNode(15)

sol = Solution()
print(sol.leveorder(root))  # Output: [[3], [9, 20], [15, 7]]
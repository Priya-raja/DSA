# Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
# (i.e., from left to right, level by level from leaf to root).

from typing import List, Optional
from collections import deque

class TreeNode:
    def __init__(self, val =0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right  


class Solution:
    def levelorder(self, root: TreeNode)-> List[List[int]]:
         res = []

         if root == None:
             return res
         
         q = deque()
         q.append(root)
        
         while q:
            level_size = len(q)
            level_nodes = []

            for _ in range(level_size):
                front_node = q.popleft()
                print(front_node.val)
                level_nodes.append(front_node.val)

                if front_node.left:
                    q.append(front_node.left)
                if front_node.right:
                    q.append(front_node.right)
            res.append(level_nodes)

         res.reverse()
         return res 

# ----------- TESTING ------------  
# Create a binary tree:
#       3
#     / \
#   9   20
#       / \
#     15  7
#   

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.right = TreeNode(7)
root.right.left = TreeNode(15)  
sol = Solution()
print(sol.levelorder(root))  # Output: [[15, 7], [9, 20], [3]]

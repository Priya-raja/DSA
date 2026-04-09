# Definition for a binary tree node.
from typing import List, Optional
from collections import deque

class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def zigzagLevelOrder(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: List[List[int]]
        """
        res = []

        if root is None:
            return res

        q = deque()
        q.append(root)
        
        while q:
            level_size = len(q)
            level_nodes = deque()

            for _ in range(level_size):
                front_node = q.popleft()
                print(front_node.val)
                level_nodes.append(front_node.val)

                if front_node.left:
                    q.append(front_node.left)
                if front_node.right:
                    q.append(front_node.right)
            if len(res) % 2 == 1:
                level_nodes.reverse()        
            res.append(level_nodes)
        return res
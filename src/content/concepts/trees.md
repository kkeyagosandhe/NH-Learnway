---
order: 10
chapter: structures
title: Trees
cues:
  - hierarchy
  - parent and child
  - traversal
  - root to leaf
  - level order
  - ancestor
why: >-
  Tests whether you can turn a recursive definition into a clean traversal.
picture:
  - >-
    A family tree or an org chart, upside down. One root at the top, each node
    branching into children below. Or a folder with subfolders inside subfolders.
origin:
  - Reality is full of hierarchies and branching decisions.
  - >-
    A tree captures "one thing owns several sub-things," and a binary search tree
    adds a rule (smaller left, bigger right) so you can search it like binary search.
purpose:
  - >-
    You use trees for hierarchy (file systems, org charts, a web page's structure)
    and for keeping data sorted with fast search, insert, and delete.
good:
  - A balanced search tree does search, insert, and delete in O(log n).
  - A natural fit for nested or hierarchical data.
bad:
  - An unbalanced tree degrades into a slow linked list.
  - More complex to handle than flat structures.
click:
  - >-
    A tree is just recursion made visible: to process a tree, handle the root, then
    recurse on each child.
  - >-
    The three traversals differ only in when you "visit" the node. Trees lead
    straight into graphs.
prereqs:
  - Recursion — the engine of almost every tree solution.
  - Stack, since recursion runs on the call stack.
  - A node with .val, .left, .right; and a deque for level-order.
toolkit:
  - code: "node.val, node.left, node.right"
    does: a node's value and its two children (either can be None).
  - code: "if not node: return 0"
    does: the base case — an empty node ends this branch.
  - code: "dfs(node.left); dfs(node.right)"
    does: recurse into each child — the whole depth-first traversal.
  - code: "return 1 + max(left, right)"
    does: combine children's answers into this node's answer (here, height).
  - code: "from collections import deque"
    does: a queue for breadth-first, level-order traversal.
solve:
  lead: >-
    A tree solution is recursion wearing a picture: you solve the whole tree by
    handling one node and trusting the same function to handle each child, so the
    shape of the code mirrors the shape of the tree.
  steps:
    - do: >-
        Make the empty child, a null node, your base case, and return the obvious
        answer for it: usually 0, empty, or true.
      why: >-
        Every branch ends in nothing, so handling null cleanly is what lets the
        recursion stop at the leaves without special-casing them.
    - do: Assume the function already returns the correct answer for each child subtree.
      why: >-
        Same leap of faith as plain recursion: reason about one node and its
        child-answers, never the whole tree at once.
    - do: >-
        Decide when to visit the current node relative to recursing on its children:
        before (pre-order), between (in-order), or after (post-order).
      why: >-
        That timing is the only difference between the traversals. In-order on a
        search tree yields sorted values; post-order lets a node use its children's
        results.
    - do: >-
        Combine the children's answers with the current node to produce this node's
        answer.
      why: >-
        This is the real work and it is tiny: a depth is one plus the deeper child, a
        sum is the node plus both child sums. Correct here means correct everywhere.
  keep: >-
    Each call returns the right answer for its own subtree, assuming its children did
    the same. Because the leaves are handled and every call recurses on strictly
    smaller subtrees, that holds from the leaves up to the root.
code: |
  # Maximum depth of a binary tree — recursion in four lines
  def max_depth(node):
      if not node:                  # empty branch: no depth
          return 0
      left = max_depth(node.left)
      right = max_depth(node.right)
      return 1 + max(left, right)   # this node + its taller side
ai:
  - Ask "which traversal gives me sorted order from a search tree, and why?"
  - Ask it to walk one small tree with you.
  - Do not have it write the traversal.
build:
  blurb: A file explorer that prints a folder tree with indentation.
  skills:
    - Trees
    - Recursion
    - Traversal
  out: A CLI directory-tree printer.
video:
  label: "NeetCode: Invert Binary Tree (free video + walkthrough)"
  url: https://neetcode.io/solutions/invert-binary-tree
practice:
  - label: Invert Binary Tree
    url: https://leetcode.com/problems/invert-binary-tree/
    star: true
  - label: Maximum Depth of Binary Tree
    url: https://leetcode.com/problems/maximum-depth-of-binary-tree/
    star: true
  - label: Binary Tree Level Order Traversal
    url: https://leetcode.com/problems/binary-tree-level-order-traversal/
    star: true
  - label: Validate Binary Search Tree
    url: https://leetcode.com/problems/validate-binary-search-tree/
    star: true
  - label: Lowest Common Ancestor of a BST
    url: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
    star: true
complexity:
  - op: Access
    val: O(log n)
    note: by value, not index
  - op: Search
    val: O(log n)
  - op: Insert
    val: O(log n)
  - op: Delete
    val: O(log n)
  - op: Space
    val: O(n)
complexityNote: Balanced tree. An unbalanced one degrades to O(n), a slow linked list.
---

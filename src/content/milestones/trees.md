---
order: 13
chapter: c3
title: Clear Trees
do: Finish the Trees topic. Take your time; it is a big one.
why: Traversals and recursion you will reuse constantly.
links:
  - label: Roadmap
    url: https://neetcode.io/roadmap
meta:
  interview: 5
  realWorld: 5
  time: a big one — take your time
  unlocks: Tries, Graphs, recursion mastery
  confidence: >-
    a tree problem no longer scares you because your reflex is "write a recursive
    helper, handle the empty node, combine the left and right answers."
problem: >-
  So much data branches: folders inside folders, a comment with replies that have
  their own replies, an org chart, the HTML on this page. It has no natural line to
  walk end to end. How do you visit every piece exactly once, or search it without
  wandering forever?
analogy: >-
  A family tree. One ancestor at the top; each person has children; each child has
  their own children. To describe the whole family you describe a person, then ask
  the same question of each of their children — and it is questions all the way
  down until you reach someone with none. That "ask the same question of the
  children" is recursion, and it is the whole game.
intuition: >-
  A tree is nodes, each holding a value and links to its children (for a binary
  tree, a left and a right). Because the shape repeats — every child is itself the
  root of a smaller tree — recursion fits like a glove: do something with the
  current node, then call yourself on each child, and stop when the node is empty.
  A binary search tree adds a rule (smaller left, larger right) that makes lookups
  O(log n). "Go as deep as possible first" is depth-first; "one whole level at a
  time" is breadth-first.
real:
  - Your file system is a tree of folders and files.
  - The DOM — the page you are reading — is a tree of HTML elements.
  - Databases index rows with B-trees so lookups stay fast as data grows.
  - Compilers parse your code into a syntax tree before running it.
  - JSON and XML are trees; so are decision trees in machine learning.
prereqs:
  - Stack — recursion runs on the call stack, so that intuition pays off here.
  - Comfort writing a function that calls itself, with a base case that stops it.
  - A node class with .val, .left, .right.
  - For level-order, a queue — from collections import deque.
toolkit:
  - code: "node.val, node.left, node.right"
    does: a node's value and its two children (either can be None).
  - code: "if not node: return"
    does: the base case — an empty node ends this branch of the recursion.
  - code: "dfs(node.left); dfs(node.right)"
    does: recurse into each child — this is the whole depth-first traversal.
  - code: "return 1 + max(left, right)"
    does: combine children's answers into this node's answer (here, height).
  - code: "from collections import deque"
    does: a fast double-ended queue for breadth-first (level-order) traversal.
  - code: "q.append(child); q.popleft()"
    does: enqueue children, dequeue from the front — visiting level by level.
walkthrough:
  - For almost any tree problem, write a small recursive helper that takes a node.
  - First line of the helper handles the empty node (return 0, or None, or nothing) — that is your base case and it prevents infinite descent.
  - Recurse on the left child and the right child to get their answers.
  - Combine those two answers into the answer for the current node, and return it.
  - When the question is about levels or shortest paths, switch from recursion to a breadth-first queue instead.
code: |
  # Maximum depth of a binary tree — recursion in four lines
  def max_depth(node):
      if not node:              # empty branch contributes no depth
          return 0
      left = max_depth(node.left)
      right = max_depth(node.right)
      return 1 + max(left, right)   # this node + its taller side
build: >-
  Model a small file system as a tree of folders and files, then write one
  function that prints it indented and another that adds up every file's size.
  Both are the same recursive shape you just learned, wearing everyday clothes.
interview: >-
  Trees are where recursion becomes second nature, which is why interviewers lean
  on them so hard — and why the payoff carries straight into graphs and dynamic
  programming. Learn the three depth-first orders (pre-, in-, post-order) and
  breadth-first level-order, and know that in-order on a binary search tree spits
  the values out sorted. Take this milestone slowly; it is load-bearing for
  everything after it.
practice:
  - label: Invert Binary Tree
    url: https://leetcode.com/problems/invert-binary-tree/
  - label: Maximum Depth of Binary Tree
    url: https://leetcode.com/problems/maximum-depth-of-binary-tree/
  - label: Same Tree
    url: https://leetcode.com/problems/same-tree/
  - label: Binary Tree Level Order Traversal
    url: https://leetcode.com/problems/binary-tree-level-order-traversal/
  - label: Validate Binary Search Tree
    url: https://leetcode.com/problems/validate-binary-search-tree/
connects:
  - label: Stack
    slug: stack
  - label: Autocomplete (Trie)
    slug: build-autocomplete-trie
  - label: Graph project
    slug: build-a-graph-project
check:
  q: >-
    You need to print a tree's values one level at a time, top to bottom. Do you
    reach for recursion or something else?
  a: >-
    Breadth-first with a queue. Start with the root in the queue; repeatedly pop a
    node, record it, and push its children. Recursion naturally goes deep, so for
    level-by-level order a queue is the clean fit.
reflect: "Why does recursion feel so natural on a tree specifically?"
---

---
order: 8
chapter: c2
title: Clear Stack
do: Finish the Stack topic on the roadmap.
why: Last in, first out. The undo-button pattern.
links:
  - label: Roadmap
    url: https://neetcode.io/roadmap
meta:
  interview: 4
  realWorld: 5
  time: a few days
  unlocks: Recursion intuition, DFS, undo/redo
  confidence: >-
    you see nesting — brackets, tags, function calls — and reach for a stack
    because you know the thing you need is always the most recent one still open.
problem: >-
  You are checking whether "([]{})" is balanced. When you hit a closing bracket,
  which opening one does it belong to? Always the most recent one that has not been
  closed yet. You need a structure that always hands you back the last thing you
  put in, before anything older.
analogy: >-
  A stack of plates. You add to the top and you take from the top. The plate you
  set down last is the first one you pick up — last in, first out. You cannot pull
  a plate from the middle without lifting the ones above it first, and that
  constraint is exactly what makes it useful for tracking "what is still open."
intuition: >-
  A stack has two moves: push (put something on top) and pop (take the top off).
  That is it. Both are O(1). When you are processing something nested, you push
  each time you go one level deeper and pop each time you come back out. The top of
  the stack is always your current, innermost context — the most recent unfinished
  thing.
real:
  - The call stack — every function call your program makes is pushed on a stack, and returning pops it. Recursion is just this.
  - Undo/redo — the last action you did is the first one undone.
  - The browser back button — pages you visited, popped one at a time.
  - Compilers and calculators — evaluating "3 + 4 × 2" with operator and operand stacks.
  - Depth-first search — the iterative version uses a stack instead of recursion.
prereqs:
  - A Python list, and the methods .append() and .pop().
  - Arrays and Hashing — matching problems pair a stack with a small lookup dict.
  - Comfort with the idea that a list has an "end" you keep adding to and removing from.
toolkit:
  - code: "stack = []"
    does: a plain list is a perfectly good stack in Python.
  - code: "stack.append(x)"
    does: push — put x on top.
  - code: "stack.pop()"
    does: pop — remove and return the top item.
  - code: "stack[-1]"
    does: peek — look at the top without removing it.
  - code: "if not stack:"
    does: check whether the stack is empty (nothing left to match).
  - code: "pairs = {')': '(', ']': '['}"
    does: a lookup so each closer knows which opener it expects.
walkthrough:
  - Make an empty stack.
  - Walk the input. When you meet an "opening" thing, push it.
  - When you meet a "closing" thing, pop the top and check it matches. If it does not (or the stack was empty), it is invalid.
  - At the very end, a truly balanced input leaves the stack empty. Leftovers mean something never got closed.
code: |
  # Valid parentheses — the canonical stack problem
  def is_valid(s):
      stack = []
      pairs = {')': '(', ']': '[', '}': '{'}
      for ch in s:
          if ch in pairs:                     # a closing bracket
              if not stack or stack.pop() != pairs[ch]:
                  return False                # nothing to match, or mismatch
          else:
              stack.append(ch)                # an opening bracket -> push
      return not stack                        # balanced iff nothing left over
build: >-
  Build the skeleton of undo/redo with two stacks: every action pushes onto the
  "undo" stack; undo pops from it and pushes onto the "redo" stack; redo does the
  reverse. You will flesh this out fully in First Builds — this is the seed.
interview: >-
  Reach for a stack whenever the problem involves matching, nesting, or "the most
  recent unresolved thing." Balanced brackets, evaluating expressions, and the
  "monotonic stack" trick behind Daily Temperatures and Next Greater Element all
  live here. If you ever write recursion, you are already using the call stack —
  the stack just makes that machinery visible.
practice:
  - label: Valid Parentheses
    url: https://leetcode.com/problems/valid-parentheses/
  - label: Min Stack
    url: https://leetcode.com/problems/min-stack/
  - label: Evaluate Reverse Polish Notation
    url: https://leetcode.com/problems/evaluate-reverse-polish-notation/
  - label: Generate Parentheses
    url: https://leetcode.com/problems/generate-parentheses/
  - label: Daily Temperatures
    url: https://leetcode.com/problems/daily-temperatures/
connects:
  - label: Undo/redo or LRU cache
    slug: build-undo-redo-or-lru-cache
  - label: Trees
    slug: trees
  - label: Heap / Priority Queue
    slug: heap-priority-queue
check:
  q: >-
    You are validating an HTML-like string of nested open and close tags. What
    structure tracks which tag still needs closing, and how do you know the whole
    thing is well-formed?
  a: >-
    A stack: push every open tag, and on each close tag pop and check it matches
    the top. The string is well-formed only if every close matched and the stack
    is empty at the end.
reflect: "In your own words: what kind of problem is a stack the natural fit for?"
---

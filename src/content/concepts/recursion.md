---
order: 8
chapter: foundations
title: Recursion
cues:
  - self-similar
  - subproblem
  - tree or nested
  - try all options
  - divide and conquer
why: >-
  Tests whether you can trust a smaller copy of a problem to solve itself.
picture:
  - >-
    Russian nesting dolls, or standing between two mirrors. A thing defined in terms
    of a smaller copy of itself, until you reach the smallest doll that cannot open,
    the base case.
origin:
  - >-
    Many problems are naturally self-similar: a tree is trees inside trees, a
    factorial is a smaller factorial times n.
  - >-
    Recursion lets you describe a problem the way it is actually shaped, instead of
    forcing it into a loop.
purpose:
  - >-
    You use it when a problem breaks into smaller versions of itself: trees, nested
    structures, "try all options," and divide-and-conquer.
good:
  - Clean, short code for self-similar problems.
  - Matches trees and backtracking naturally.
bad:
  - Uses call-stack memory, so too deep and it overflows.
  - Can redo the same work, which is exactly what memoization fixes.
click:
  - >-
    Every recursion needs two things: a base case (when to stop) and a step that
    shrinks the problem toward it.
  - >-
    It runs on the call stack, so recursion is the stack concept in disguise, and it
    is the backbone of trees, backtracking, and DP.
prereqs:
  - Writing a function and calling it.
  - Stack — recursion runs on the call stack.
  - The idea that a function can call itself on a smaller input.
toolkit:
  - code: "def f(n):"
    does: a function that will call itself.
  - code: "if n <= 1: return n"
    does: the base case — stop shrinking here.
  - code: "return f(n - 1) + f(n - 2)"
    does: the recursive step, on smaller inputs.
  - code: "return n * f(n - 1)"
    does: combine the smaller answer into this one.
solve:
  lead: >-
    You solve a recursive problem by trusting a smaller copy of it to solve itself:
    handle the tiniest case directly, and for everything else assume the function
    already works on a smaller input and just combine that result.
  steps:
    - do: >-
        Name the smallest input with an obvious answer and no more shrinking, the
        base case, and return it directly.
      why: >-
        That is the smallest doll that will not open. Without it the calls never stop
        and the stack overflows; it is the floor the whole recursion stands on.
    - do: >-
        Assume, on faith, that calling the function on a smaller input returns the
        correct answer for that smaller input.
      why: >-
        This leap is the heart of recursion. Trace every level in your head and you
        drown; trusting the smaller call lets you reason about a single layer.
    - do: >-
        Write the one step that turns that smaller answer into the answer for the
        current input.
      why: >-
        This is the only real work: factorial is n times the smaller factorial, a
        tree's height is one plus its taller child. Get this combine right and every
        size works.
    - do: Check that each call moves strictly toward the base case.
      why: >-
        If the input does not actually shrink, the faith is misplaced and you recurse
        forever. Shrinking is what guarantees you reach the floor.
  keep: >-
    Each call correctly solves its own size, provided the calls beneath it solve
    theirs. Because the base case is solid and every step shrinks toward it, that
    assumption holds all the way down, so the whole tower stands.
code: |
  # Factorial — the smallest honest recursion
  def factorial(n):
      if n <= 1:                      # base case: 0! and 1! are 1
          return 1
      return n * factorial(n - 1)     # trust the smaller call, then combine
ai:
  - Ask "what is my base case, and is it reachable?" — the most common bug.
  - Ask it to trace one small input by hand with you.
  - Do not let it write the recursive step.
build:
  blurb: A function that lists every file in a folder and all its subfolders.
  skills:
    - Recursion
    - Base cases
  out: A CLI recursive folder walker.
video:
  label: "NeetCode: Pow(x, n) (recursion, divide & conquer)"
  url: https://neetcode.io/solutions/powx-n
practice:
  - label: Fibonacci Number
    url: https://leetcode.com/problems/fibonacci-number/
    star: true
  - label: Pow(x, n)
    url: https://leetcode.com/problems/powx-n/
    star: true
  - label: Reverse Linked List
    url: https://leetcode.com/problems/reverse-linked-list/
  - label: Merge Two Sorted Lists
    url: https://leetcode.com/problems/merge-two-sorted-lists/
  - label: Sort an Array
    url: https://leetcode.com/problems/sort-an-array/
complexity:
  - op: Time
    val: varies
    note: set by the recurrence
  - op: Space
    val: O(depth)
    note: the call stack
complexityNote: Each unreturned call sits on the stack. Too deep and it overflows.
---

---
order: 24
chapter: c6
title: Finish NeetCode 150
do: >-
  Clear the hard topics — Backtracking, Graphs, Dynamic Programming, Greedy,
  Intervals. Reach 150 total.
why: This is solid interview-DSA fundamentals. A genuine milestone.
links:
  - label: NeetCode 150
    url: https://neetcode.io/practice
meta:
  interview: 5
  realWorld: 4
  time: months, no rush
  unlocks: Genuinely solid interview fundamentals
  confidence: >-
    a "hard" tag no longer means "give up" — it means "which of my tools, combined,
    does this need?"
problem: >-
  This is the summit push. Backtracking, graphs, dynamic programming, greedy,
  intervals — these are the topics where most people stall and quietly stop. They
  feel like a different, harder species of problem. They are not. Every one of them
  is a combination of tools you already own, with one new twist. Finishing all 150
  means you have solid interview fundamentals, full stop.
analogy: >-
  The final ascent, where the air thins and every step costs more — but the peak is
  finally in view and each step is the same walking you have done all along. You are
  not learning to walk again up here. You are walking the same way, uphill.
intuition: >-
  Reframe each hard topic as something you have already met. Dynamic programming is
  recursion plus the hash-map trick — remember answers so you never recompute them
  (that is memoization). Graphs are trees that are allowed to have cycles, so you
  add one thing: a visited set. Backtracking is depth-first search where you make a
  choice, recurse, then undo the choice. Greedy is "take the best local option and
  prove it is safe." Intervals are almost always "sort them first, then sweep."
  None of these is new magic; each is a remix.
real:
  - Dynamic programming powers diff tools, spell-check distance, and resource optimisation.
  - Graph algorithms run maps, social networks, and dependency resolvers.
  - Interval logic schedules meetings and allocates resources.
prereqs:
  - Trees — recursion is the engine of DP, backtracking, and graph traversal.
  - Arrays and Hashing — memoization and visited sets are just hash maps and sets.
  - Stack and Heap — the machinery underneath DFS and shortest paths.
toolkit:
  - code: "from functools import lru_cache"
    does: a decorator that memoizes a recursive function — turning it into DP for free.
  - code: "if n in memo: return memo[n]"
    does: hand-rolled memoization — the DP idea in one line.
  - code: "visited = set()"
    does: the single line that turns tree traversal into graph traversal — never revisit a node.
  - code: "choose; backtrack(...); un-choose"
    does: the backtracking skeleton — try an option, recurse, then undo it.
  - code: "intervals.sort(key=lambda x: x[0])"
    does: the first move of nearly every interval problem — sort, then sweep left to right.
walkthrough:
  - Name the topic. Ask which tool you already know it is built from — DP from recursion + memo, graphs from trees + visited, and so on.
  - Write the plain recursive or brute-force version first. Get it correct before you get it fast.
  - Add the one twist the topic needs — a memo dict, a visited set, an undo step, a sort.
  - Test on the examples, then reach for the topic's practice problems only once the idea has clicked.
  - Go slowly. This chapter is worth three of the earlier ones; there is no prize for rushing the summit.
code: |
  # Dynamic programming = recursion + memory. Fibonacci makes it obvious.
  from functools import lru_cache

  @lru_cache(maxsize=None)      # remember every result -> no recomputation
  def fib(n):
      if n < 2:                  # base cases
          return n
      return fib(n - 1) + fib(n - 2)
  # Without the memo: exponential, unusable. With it: linear. Same recursion.
interview: >-
  Reaching 150 is the point where you can walk into most interviews and recognise
  the shape of what you are handed. Dynamic programming is the topic people fear
  most and the one that most rewards the "recursion first, then add a memo" habit.
  Do not rush this chapter — the depth you build here is exactly what separates a
  confident interview from a shaky one.
practice:
  - label: NeetCode 150 — Backtracking
    url: https://neetcode.io/practice
  - label: NeetCode 150 — Graphs
    url: https://neetcode.io/practice
  - label: NeetCode 150 — 1-D Dynamic Programming
    url: https://neetcode.io/practice
connects:
  - label: Trees
    slug: trees
  - label: Build a graph project
    slug: build-a-graph-project
  - label: Arrays and Hashing
    slug: arrays-and-hashing
check:
  q: >-
    A recursive solution is correct but times out because it recomputes the same
    subproblems over and over. What is the one change that fixes it?
  a: >-
    Memoize — cache each subproblem's answer in a dict (or slap on @lru_cache) and
    return the stored value on a repeat. That single change is what turns slow
    recursion into dynamic programming.
reflect: "Which 'hard' topic turned out to be a tool you already knew, in disguise?"
---

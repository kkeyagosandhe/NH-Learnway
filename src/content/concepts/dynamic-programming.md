---
order: 15
chapter: techniques
title: Dynamic Programming
cues:
  - count the ways
  - min or max cost
  - is it possible
  - overlapping subproblems
  - can you reach
why: >-
  Tests whether you can spot the overlapping subproblem hiding inside a slow brute
  force.
picture:
  - >-
    Climbing stairs while keeping a sticky note of answers you have already worked
    out. When a sub-question comes up again, you read the note instead of redoing the
    whole climb.
origin:
  - >-
    Recursion often solves the same sub-problem over and over. Naive Fibonacci
    recomputes the same values thousands of times.
  - >-
    DP is the fix: solve each sub-problem once, store the answer, reuse it. A little
    memory for a huge speed win.
purpose:
  - >-
    You use it for "count the ways," "min or max cost," or "is it possible" problems
    where big answers are built from smaller overlapping ones.
good:
  - Turns exponential brute force into polynomial time.
  - Once you see the sub-problem, the code is short.
bad:
  - The hard part is spotting the sub-problem and the recurrence, and that takes practice.
  - Uses extra memory for the table.
click:
  - >-
    DP is just recursion plus a memory (a cache). Two flavors: top-down (recursion
    plus a memo) and bottom-up (fill a table).
  - >-
    The trigger is "overlapping sub-problems" plus "count or optimize." Memoization is
    literally a hash map storing results by input.
prereqs:
  - Recursion — DP is recursion that remembers its answers.
  - Hash Maps — the memo is a cache keyed by the subproblem.
  - The idea of a subproblem and a recurrence.
toolkit:
  - code: "from functools import lru_cache"
    does: a decorator that memoizes a recursive function for you.
  - code: "@lru_cache(maxsize=None)"
    does: cache every result — no recomputation, turning recursion into DP.
  - code: "memo = {}"
    does: a hand-rolled cache, keyed by the subproblem.
  - code: "if n in memo: return memo[n]"
    does: read the stored answer on a repeat — the DP idea in one line.
  - code: "memo[n] = result"
    does: store a freshly computed answer for next time.
  - code: "dp = [0] * (n + 1)"
    does: a table for the bottom-up version.
solve:
  lead: >-
    DP is recursion that refuses to redo work: you find the smaller overlapping
    sub-question hiding inside the problem, solve each distinct one only once, and
    write its answer on a sticky note so the next time it comes up you just read it.
  steps:
    - do: >-
        Define the sub-problem in words as a function of some state: the best answer
        using the first i items, or the number of ways to reach step n.
      why: >-
        Everything rests on making this sharp. The state is what goes on the sticky
        note; if it does not capture enough, the notes will not add up.
    - do: "Write the recurrence: how one state's answer is built from smaller states."
      why: >-
        This is the real insight, the same combine step as recursion: ways to reach
        step n is ways to n minus 1 plus ways to n minus 2. Find it once and the table
        follows.
    - do: Pin down the base cases, the smallest states whose answers you know outright.
      why: >-
        They anchor the recurrence just as a base case anchors recursion; without them
        the smaller states have nothing solid to build on.
    - do: >-
        Solve each state once and store it, either top-down (recurse, but read the note
        first) or bottom-up (fill a table up from the base cases).
      why: >-
        Storing is what collapses the repetition into one computation per state.
        Top-down follows the natural recursion; bottom-up drops the call stack.
  keep: >-
    Each distinct sub-problem is computed once and never changes afterward. Because
    every state is built only from smaller, already-final states, reading a stored
    answer is always safe, which is what turns an exponential brute force into a
    polynomial one.
code: |
  # DP = recursion + memory. Fibonacci makes it obvious.
  from functools import lru_cache

  @lru_cache(maxsize=None)      # remember every result -> no recomputation
  def fib(n):
      if n < 2:                  # base cases
          return n
      return fib(n - 1) + fib(n - 2)
  # without the memo: exponential, unusable. with it: linear. same recursion.
ai:
  - Ask "what is the sub-problem and the recurrence here?" — the part worth understanding.
  - Ask it to show the naive recursion first, then point at the repeated work.
  - Do not let it hand you the final table.
build:
  blurb: >-
    A memoized Fibonacci that caches results, sitting next to the slow version, and
    time both.
  skills:
    - DP
    - Memoization
    - Recurrence
  out: A CLI that shows the speed difference.
video:
  label: "NeetCode: Climbing Stairs (the gateway DP problem)"
  url: https://neetcode.io/solutions/climbing-stairs
practice:
  - label: Climbing Stairs
    url: https://leetcode.com/problems/climbing-stairs/
    star: true
  - label: House Robber
    url: https://leetcode.com/problems/house-robber/
    star: true
  - label: Coin Change
    url: https://leetcode.com/problems/coin-change/
    star: true
  - label: Longest Increasing Subsequence
    url: https://leetcode.com/problems/longest-increasing-subsequence/
    star: true
  - label: Word Break
    url: https://leetcode.com/problems/word-break/
    star: true
complexity:
  - op: Time
    val: O(states × work)
    note: per subproblem
  - op: Space
    val: O(states)
    note: often reducible
complexityNote: "Fibonacci: O(n) states × O(1) work = O(n), and space drops to O(1)."
---

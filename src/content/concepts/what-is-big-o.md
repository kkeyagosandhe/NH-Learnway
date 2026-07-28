---
order: 8
chapter: basics
title: What is Big-O?
gist: >-
  Big-O is shorthand for how a program's work grows as the input grows. Not a
  formula to memorize — a picture to understand.
picture:
  - >-
    Three ways to find a book. Grab number 147 straight off the shelf by its
    number. Or read every book until you find it. Or, worse, compare every book to
    every other book to check for a duplicate.
origin:
  - >-
    As inputs grow, "does it work?" stops being enough. The real question becomes
    "does it still work when the data is huge?"
  - >-
    Big-O is the language for that. It ignores the small stuff and keeps only the
    shape of how the work grows.
purpose:
  - >-
    You use it to compare approaches by how they scale, so you can pick one that
    survives big inputs instead of discovering it is too slow after you run it.
  - Every single concept after this one quietly leans on Big-O.
good:
  - Comparing how two solutions scale — spotting the slow one before you ever run it.
  - Reasoning about huge inputs without needing to test them.
bad:
  - >-
    It is about big inputs: on tiny data a "worse" Big-O can be perfectly fine.
  - It ignores constant factors, so it is a rough shape, not a stopwatch.
click:
  - >-
    Big-O keeps the shape of the growth and throws away the rest: drop the
    constants, keep the term that dominates as things get big.
  - >-
    O(1) is flat, O(log n) barely rises, O(n) is a straight line, O(n squared) is a
    curve that explodes. That mental graph is the whole idea.
prereqs:
  - Loops — you will read Big-O by counting how the loops stack.
toolkit:
  - code: "O(1)"
    does: constant — same work at any size, like a dict lookup.
  - code: "O(log n)"
    does: barely grows — halving the problem each step, like binary search.
  - code: "O(n)"
    does: linear — one pass over the data, like a single loop.
  - code: "O(n log n)"
    does: the good speed for sorting a list.
  - code: "O(n^2)"
    does: a loop inside a loop — avoid it on big inputs.
solve:
  lead: >-
    You can eyeball the Big-O of most code by counting how the loops stack up over
    the input.
  steps:
    - do: No loops, just a handful of steps? That is O(1), constant.
      why: The work does not depend on how big the input is, so the size cannot slow it down.
    - do: One loop over the input? That is O(n), linear.
      why: You touch each of the n items once, so the work grows in step with n.
    - do: A loop nested inside another loop over the same input? That is O(n squared).
      why: For each of the n items you do n more work, and n times n is n squared.
    - do: Halving the problem every step? That is O(log n).
      why: Cutting the work in half repeatedly reaches the end in very few steps, even for huge n.
code: |
  # O(n): one loop over n items -> work grows with n
  def has_zero(nums):
      for x in nums:        # touches each item once
          if x == 0:
              return True
      return False

  # O(n^2): a loop inside a loop -> work grows with n squared
  def any_duplicate(nums):
      for i in range(len(nums)):
          for j in range(i + 1, len(nums)):   # for each i, scan the rest
              if nums[i] == nums[j]:
                  return True
      return False
build:
  blurb: >-
    Take the two functions above and say each one's Big-O out loud, then explain
    why in a single sentence. Then do it for a function you wrote yesterday.
  skills:
    - Reading complexity
    - Counting loops
  out: You can name the Big-O of simple code on sight.
---

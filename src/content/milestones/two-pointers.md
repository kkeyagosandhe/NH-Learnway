---
order: 6
chapter: c2
title: Clear Two Pointers
do: Finish the Two Pointers topic on the NeetCode roadmap.
why: Turns many slow brute forces into a single clean pass.
links:
  - label: Roadmap
    url: https://neetcode.io/roadmap
meta:
  interview: 4
  realWorld: 3
  time: a few days
  unlocks: Sliding Window
  confidence: >-
    you see a sorted array or a "find the pair / reverse it in place" ask and
    your hands reach for two indices instead of two nested loops.
problem: >-
  You have a sorted list and you need the two numbers that add up to a target.
  The lazy answer checks every pair — that is n × n work. On a big list that is
  the difference between instant and frozen. Can you do it in one pass?
analogy: >-
  Two people reading the same shelf of books from opposite ends, walking toward
  each other. One starts at the far left, one at the far right. At each step they
  compare, then whichever one can help close the gap takes a step inward. They
  meet in the middle having covered the whole shelf exactly once — never
  backtracking, never re-reading.
intuition: >-
  Because the list is sorted, the ends tell you which way to move. If the pair
  sums too high, the only way down is to pull the right pointer left. Too low,
  push the left pointer right. Each move throws away a whole slice of
  possibilities you never have to check. Two pointers, one pass, O(n) instead of
  O(n²).
real:
  - Merging two already-sorted lists (the heart of merge sort and of database joins).
  - Removing duplicates from a sorted array in place, without a second array.
  - Reversing a string or list by swapping the ends inward.
  - Detecting a cycle in a linked list with a slow and a fast pointer (you will meet this again in Linked Lists).
prereqs:
  - Everything from Arrays and Hashing.
  - Reading and comparing list items by index.
  - A while loop, and knowing when its condition stops being true.
  - Swapping two variables — in Python, a, b = b, a.
toolkit:
  - code: "l, r = 0, len(arr) - 1"
    does: two indices — one at the start, one at the end.
  - code: "while l < r:"
    does: keep going until the pointers meet in the middle.
  - code: "arr[l] + arr[r]"
    does: read both ends at once to compare against your target.
  - code: "l += 1"
    does: need a bigger sum? step the left pointer right (values are larger there).
  - code: "r -= 1"
    does: need a smaller sum? step the right pointer left.
  - code: "arr[l], arr[r] = arr[r], arr[l]"
    does: swap the two ends in place — the reverse-it pattern.
walkthrough:
  - Confirm the input is sorted (or that order does not matter). Two pointers leans on that.
  - Put one pointer at each end.
  - Compare the two ends against what you want.
  - Move the pointer that brings you closer to the goal, and only that one.
  - Stop when the pointers cross. You have covered every real possibility in one pass.
code: |
  # Two-sum on a SORTED array, in one pass
  def two_sum_sorted(nums, target):
      l, r = 0, len(nums) - 1
      while l < r:
          s = nums[l] + nums[r]
          if s == target:
              return [l, r]      # found the pair
          elif s < target:
              l += 1             # too small — grow the sum
          else:
              r -= 1             # too big — shrink the sum
      return []                  # no pair
  # O(n) time, O(1) extra space.
build: >-
  Write a function that checks if a word is a palindrome using two pointers from
  the ends inward — no slicing, no reversing. Twelve lines, and it is the same
  shape as half the "in place" interview questions.
interview: >-
  The tell is a sorted array, or an ask about pairs, or "do it in place / without
  extra space." When you hear any of those, try two pointers before a hash map —
  it often wins on space (O(1) instead of O(n)). The fast-and-slow variant also
  shows up constantly in linked-list problems.
practice:
  - label: Valid Palindrome
    url: https://leetcode.com/problems/valid-palindrome/
  - label: Two Sum II (sorted)
    url: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
  - label: 3Sum
    url: https://leetcode.com/problems/3sum/
  - label: Container With Most Water
    url: https://leetcode.com/problems/container-with-most-water/
connects:
  - label: Arrays and Hashing
    slug: arrays-and-hashing
  - label: Sliding Window
    slug: sliding-window
  - label: Linked Lists
    slug: linked-lists
check:
  q: >-
    You are given a sorted array and asked whether any two numbers sum to a
    target, using no extra memory. What is your move?
  a: >-
    One pointer at each end. If the sum is too big, step the right pointer left;
    too small, step the left pointer right; equal, you found it. One pass, O(n)
    time and O(1) space — the hash-map version would cost O(n) memory you do not
    need here.
reflect: "What signal in a problem tells you 'two pointers' instead of 'hash map'?"
---

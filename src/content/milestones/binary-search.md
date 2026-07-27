---
order: 11
chapter: c3
title: Clear Binary Search
do: Finish the Binary Search topic on the roadmap.
why: Halve the search space with every step.
links:
  - label: Roadmap
    url: https://neetcode.io/roadmap
meta:
  interview: 4
  realWorld: 4
  time: a few days
  unlocks: Search on the answer, git bisect
  confidence: >-
    you see "sorted" or "find the smallest X that works" and instinctively think
    "throw away half," and you can write the loop without an off-by-one bug.
problem: >-
  A friend picks a number between 1 and a billion. Each guess, they tell you
  "higher" or "lower." Guessing 1, 2, 3... could take a billion tries. But if the
  numbers are in order, you have far more information than that — and you can find
  the answer in about 30 guesses. How?
analogy: >-
  Looking up a word in a paper dictionary. You do not start at page one. You flop
  it open in the middle, see whether your word comes before or after, and throw
  away the half it cannot be in. Then you do it again with what is left. Every
  look cuts the problem in half.
intuition: >-
  Binary search works on anything sorted, or anything monotonic — where once a
  condition becomes true it stays true. Track a range with a left and right bound.
  Look at the middle. If it is not your target, the ordering tells you which half
  to discard entirely. Halving each step means a billion items take about
  log₂(1,000,000,000) ≈ 30 steps. The whole difficulty is getting the bounds and
  the stop condition exactly right.
real:
  - git bisect finds the exact commit that introduced a bug by binary-searching your history.
  - Databases use B-tree indexes, which are binary search generalised, to find a row without scanning the table.
  - Search on the answer — deciding the smallest capacity or speed that satisfies a constraint.
  - Autocomplete and dictionaries jump to a word without reading every entry.
prereqs:
  - Reading a list by index.
  - Integer (floor) division — mid = (l + r) // 2.
  - A while loop and a rock-solid stop condition.
  - The input must be sorted. If it is not, sorting first may still be worth it.
toolkit:
  - code: "l, r = 0, len(arr) - 1"
    does: the current search range, inclusive on both ends.
  - code: "while l <= r:"
    does: keep going while the range still contains something.
  - code: "mid = (l + r) // 2"
    does: the middle index — floor division avoids fractions.
  - code: "if arr[mid] == target:"
    does: found it — return mid.
  - code: "l = mid + 1"
    does: target is bigger; discard the left half, including mid.
  - code: "r = mid - 1"
    does: target is smaller; discard the right half, including mid.
  - code: "import bisect"
    does: Python's built-in binary search, once you can write it by hand.
walkthrough:
  - Set left and right to the two ends of the range you are searching.
  - While the range is non-empty, compute the middle index.
  - If the middle is your target, you are done.
  - If the target is larger, move left past mid; if smaller, move right below mid. You just deleted half the range.
  - If the loop ends without a hit, the target is not there.
code: |
  # Classic binary search on a sorted list
  def binary_search(arr, target):
      l, r = 0, len(arr) - 1
      while l <= r:
          mid = (l + r) // 2
          if arr[mid] == target:
              return mid            # found
          elif arr[mid] < target:
              l = mid + 1           # answer is to the right
          else:
              r = mid - 1           # answer is to the left
      return -1                     # not present
build: >-
  Flip the guessing game: you think of a number 1–100, and write a program that
  guesses it, using your "higher / lower" answers, in at most 7 tries. Watching it
  corner your number in seven guesses makes the halving click for good.
interview: >-
  Two tells. The obvious one: the array is sorted. The subtle, higher-value one:
  the problem asks for the smallest or largest value that satisfies some condition
  ("minimum speed to finish in time", "smallest capacity that fits"). That is
  "binary search on the answer" — you binary-search the range of possible answers,
  not an array. Interviewers love it because most people miss it.
practice:
  - label: Binary Search
    url: https://leetcode.com/problems/binary-search/
  - label: Search a 2D Matrix
    url: https://leetcode.com/problems/search-a-2d-matrix/
  - label: Koko Eating Bananas
    url: https://leetcode.com/problems/koko-eating-bananas/
  - label: Find Minimum in Rotated Sorted Array
    url: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
  - label: Search in Rotated Sorted Array
    url: https://leetcode.com/problems/search-in-rotated-sorted-array/
connects:
  - label: Two Pointers
    slug: two-pointers
  - label: Trees
    slug: trees
check:
  q: >-
    You must check whether a value exists in a sorted array of one billion numbers,
    fast. Roughly how many comparisons, and why?
  a: >-
    About 30. Each comparison halves what is left, and log₂(1,000,000,000) ≈ 30.
    That is the whole superpower of binary search: astronomically fewer steps than
    scanning.
reflect: "Beyond a sorted array, what other kind of question can binary search answer?"
---

---
order: 7
chapter: foundations
title: Binary Search
cues:
  - sorted
  - find target
  - find the boundary
  - minimize or maximize such that
  - monotonic
why: >-
  Tests your reasoning about monotonic conditions, where a yes flips to a no
  exactly once.
picture:
  - >-
    Finding a word in a dictionary. You open the middle, decide left or right, and
    throw away half the book. Repeat.
origin:
  - >-
    It is born from the power of sorted data. If things are in order, one comparison
    tells you which half to ignore.
  - Halving each step means a million items take only about twenty checks.
purpose:
  - >-
    You use it to find something, or the boundary where a condition flips, inside a
    sorted range, fast, in O(log n).
good:
  - Blazing fast on sorted data.
  - No extra memory.
bad:
  - Needs sorted input.
  - Off-by-one bugs at the boundaries are the classic trap.
click:
  - The trigger is "sorted" plus "find" or "find the threshold."
  - >-
    The deeper version: binary-search the answer itself when you can ask "is X good
    enough?" and the yes flips to no at some point.
prereqs:
  - Arrays, and reading by index.
  - Integer floor division — mid = (lo + hi) // 2.
  - A while loop with a rock-solid stop condition, on sorted input.
toolkit:
  - code: "lo, hi = 0, len(arr) - 1"
    does: the current search range, inclusive on both ends.
  - code: "while lo <= hi:"
    does: keep going while the range still contains something.
  - code: "mid = (lo + hi) // 2"
    does: the middle index, via floor division.
  - code: "if arr[mid] < target:"
    does: the answer is to the right of mid.
  - code: "lo = mid + 1"
    does: discard the left half, including mid.
  - code: "hi = mid - 1"
    does: discard the right half, including mid.
solve:
  lead: >-
    Every binary search keeps a shrinking range that is guaranteed to still contain
    the answer, and each step throws away the half that provably cannot, so a
    million possibilities collapse in about twenty checks.
  steps:
    - do: Set a low and a high bound around a range you are certain contains the answer.
      why: >-
        The whole method rests on one promise: the answer lies inside low to high.
        Start with a range that might exclude it and no halving will find it.
    - do: >-
        Look at the middle and ask one yes or no question: is the answer here, or to
        one side?
      why: >-
        Because the data or the condition is ordered, the middle alone reveals which
        half is hopeless, and that single check is what earns the throw-away.
    - do: >-
        Discard the half that cannot hold the answer by moving low or high past the
        middle.
      why: >-
        This is the halving: each step cuts the range in two, which is why the cost
        is log n. One comparison buys the elimination of half of everything.
    - do: >-
        Repeat until one spot remains, and be exact about whether you keep or skip
        the middle each time.
      why: >-
        The classic bug lives here. Whether you use < or <=, and move to mid or mid
        plus one, decides if you land on the first, last, or exact match.
  keep: >-
    The answer is always inside the current low-to-high range. Because that promise
    is preserved on every step, the moment the range narrows to one, that one must
    be the answer.
code: |
  # Classic binary search on a sorted list
  def binary_search(arr, target):
      lo, hi = 0, len(arr) - 1
      while lo <= hi:
          mid = (lo + hi) // 2
          if arr[mid] == target:
              return mid            # found
          elif arr[mid] < target:
              lo = mid + 1          # answer is to the right
          else:
              hi = mid - 1          # answer is to the left
      return -1                     # not present
ai:
  - Ask "what is the loop invariant that keeps this search correct?"
  - Ask it to explain why your boundary uses < versus <=.
  - Do not let it write the mid calculation for you.
build:
  blurb: A number-guessing game that finds your secret number by halving the range.
  skills:
    - Binary search
    - Boundaries
  out: A CLI guess-the-number solver.
video:
  label: "NeetCode: Binary Search (free video + walkthrough)"
  url: https://neetcode.io/solutions/binary-search
practice:
  - label: Binary Search
    url: https://leetcode.com/problems/binary-search/
    star: true
  - label: Search a 2D Matrix
    url: https://leetcode.com/problems/search-a-2d-matrix/
    star: true
  - label: Koko Eating Bananas
    url: https://leetcode.com/problems/koko-eating-bananas/
    star: true
  - label: Find Minimum in Rotated Sorted Array
    url: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
    star: true
  - label: Search in Rotated Sorted Array
    url: https://leetcode.com/problems/search-in-rotated-sorted-array/
    star: true
complexity:
  - op: Time
    val: O(log n)
    note: halves each step
  - op: Space
    val: O(1)
    note: iterative
complexityNote: A recursive version costs O(log n) call-stack space.
---

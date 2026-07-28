---
order: 3
chapter: foundations
title: Two Pointers
cues:
  - sorted
  - pair
  - opposite ends
  - converge
  - in-place
  - reverse
why: >-
  Tests whether you can exploit order to avoid checking every pair.
picture:
  - >-
    Two fingers on a sorted list, one at each end, walking toward each other until
    they meet in the middle.
origin:
  - >-
    It is born from a waste: checking every pair with nested loops is O(n squared).
  - >-
    If the data is sorted or has some order, you do not need every pair. Two
    markers that move based on what they see can sweep the whole thing in one pass.
purpose:
  - You use it to find pairs, reverse things in place, or shrink and grow a range.
  - It turns many O(n squared) brute forces into a single O(n) pass.
good:
  - One clean pass, no extra memory.
  - Great on sorted arrays and on strings.
bad:
  - Usually needs sorted or otherwise structured input.
  - Not every pair problem fits the shape.
click:
  - The trigger is "sorted array, looking for a pair or a range."
  - >-
    Two pointers and sliding window are cousins: both replace nested loops with
    moving markers.
prereqs:
  - Arrays, and reading items by index.
  - A while loop, and knowing when its condition stops.
  - Swapping two variables — in Python, a, b = b, a.
toolkit:
  - code: "l, r = 0, len(arr) - 1"
    does: two indices, one at each end.
  - code: "while l < r:"
    does: keep going until the pointers meet.
  - code: "arr[l] + arr[r]"
    does: read both ends at once to compare against a target.
  - code: "l += 1"
    does: too small? step the left pointer right, toward larger values.
  - code: "r -= 1"
    does: too big? step the right pointer left, toward smaller values.
  - code: "arr[l], arr[r] = arr[r], arr[l]"
    does: swap the two ends in place — the reverse-it move.
solve:
  lead: >-
    The whole idea is to let the order of the data tell you which end to move, so
    two markers sweeping inward do the work a double loop would, in a single pass.
  steps:
    - do: >-
        Place one pointer at each end of the sorted data, or a slow and a fast one
        at the start, depending on the shape.
      why: >-
        Two ends suits finding a pair; a slow and fast pair suits filtering in
        place or detecting a cycle. The setup encodes which problem you are in.
    - do: >-
        Look at what the two pointers point to, and compare it against your target
        or rule.
      why: >-
        This comparison is the only decision you make, and because the data is
        sorted, it alone tells you which direction holds any improvement.
    - do: >-
        Move the pointer that can only help: too small, raise the left one; too
        big, lower the right one.
      why: >-
        Sortedness guarantees that moving the correct end never skips a valid
        answer. This is exactly the wasted work the brute force did.
    - do: Stop when the pointers meet or cross.
      why: >-
        Every step moves one pointer inward by one, so they meet only once, which
        is why the whole sweep is a single O(n) pass with no backtracking.
  keep: >-
    Everything outside the two pointers has already been considered and ruled out.
    Because that stays true, you never revisit it, so the markers only ever move
    inward and the search cannot loop.
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
      return []
ai:
  - Ask "why does two pointers need the array sorted here?" to test yourself.
  - Ask for the invariant — what stays true on every step of this loop?
  - Do not have it write the pointer movement.
build:
  blurb: A palindrome checker that reads a word from both ends inward.
  skills:
    - Two pointers
    - In-place logic
  out: A CLI palindrome checker.
practice:
  - label: Valid Palindrome
    url: https://leetcode.com/problems/valid-palindrome/
  - label: Two Sum II - Input Array Is Sorted
    url: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
complexity:
  - op: Time
    val: O(n)
    note: one pass
  - op: Space
    val: O(1)
complexityNote: Add O(n log n) if you have to sort the input first.
---

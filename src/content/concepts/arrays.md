---
order: 1
chapter: foundations
title: Arrays
cues:
  - by index
  - by position
  - in order
  - fixed list
  - iterate over all
why: >-
  Tests whether you know the hidden cost of what looks free. Indexing is instant,
  but inserting in the middle shifts everything.
picture:
  - >-
    A row of identical, equal-sized boxes numbered from 0, sitting right next to
    each other. Think of lockers, or an egg carton.
origin:
  - >-
    Computer memory is itself a giant numbered strip of slots, so an array is
    almost the rawest reflection of how memory works.
  - >-
    Because the boxes are equal-sized and touching, the computer finds box 7 by
    pure arithmetic (start, plus 7 times the box size) and jumps straight there.
    That single fact is the whole reason arrays are fast.
purpose:
  - >-
    You reach for an array when you have many things of the same kind, want them
    in order, and want any one of them instantly by its position.
  - >-
    In one line: ordered, indexed, instant-access storage.
good:
  - Reading or writing at a position you know is instant.
  - Walking through everything in order is fast.
bad:
  - >-
    Inserting or deleting in the middle is slow: everything after has to shift to
    stay contiguous, like chairs bolted in a row.
  - >-
    Finding a value when you do not know its position means checking boxes one by
    one.
click:
  - >-
    Most other structures are arrays in disguise. Strings are arrays of
    characters, hash maps use an array underneath, heaps are arrays, and Python
    lists are arrays that quietly resize themselves.
  - >-
    Learn this one properly and you have learned the floor the whole building
    stands on.
prereqs:
  - Running a Python file and printing output.
  - A for loop and an if statement.
  - Storing a value in a variable and returning it.
toolkit:
  - code: "arr = [3, 1, 2]"
    does: make a list — Python's resizable array.
  - code: "arr[0], arr[-1]"
    does: read the first and last item instantly, by position.
  - code: "arr[i] = x"
    does: overwrite the item at position i (also instant).
  - code: "for x in arr:"
    does: walk every item in order.
  - code: "for i, x in enumerate(arr):"
    does: walk with the index and the value together.
  - code: "arr.append(x)"
    does: add to the end — the cheap O(1) insert.
  - code: "len(arr)"
    does: how many items are in the array.
solve:
  lead: >-
    Almost every array solution leans on the one superpower, instant access by
    index, while dodging the one weakness, the costly shift when you insert or
    delete in the middle.
  steps:
    - do: >-
        Ask first what a single walk through the boxes, front to back, could
        collect: a running total, a max so far, the position of something.
      why: >-
        Walking in order is the array's cheap operation, so the first question is
        always whether one pass is enough before you reach for anything fancier.
    - do: >-
        Use the index itself as a tool, not just a loop counter: a box number, a
        distance from the end, or a second pointer into the same row.
      why: >-
        Because any box is reachable instantly by its number, the index is free
        information; many problems are really about relating one position to
        another, not about the values.
    - do: >-
        When you must remove or overwrite items, keep a separate write position
        and copy the keepers forward instead of deleting in place.
      why: >-
        Deleting mid-row forces everything after it to shift down by one, the
        array's slow O(n) move. A write pointer turns that into a single clean pass.
    - do: >-
        Guard the two ends: the empty array, and reads at index 0 and at the last
        index.
      why: >-
        The boxes are numbered from 0 with a hard edge at each end, so stepping one
        past either end is the array's most common crash and off-by-one.
  keep: >-
    Reading and writing at a known index is free, but the boxes must stay
    contiguous, so anything that opens or closes a gap in the middle costs a full
    shift. Every fast array solution is an effort to touch each box a constant
    number of times and never pay that shift.
code: |
  # The array's own trick: a write pointer removes items in one pass, no shifting
  def drop_zeros(nums):
      w = 0                    # next slot to write a keeper into
      for x in nums:           # read every box once, in order
          if x != 0:
              nums[w] = x      # copy the keeper forward
              w += 1
      del nums[w:]             # trim the leftovers off the end
      return nums
  # one clean O(n) pass, instead of deleting mid-array over and over
ai:
  - >-
    After you think you get it, spar: "I think inserting mid-array is slow because
    everything shifts to stay contiguous. Where would my reasoning break?"
  - >-
    Ask for decisions, not code: "one case where I'd pick an array, one for a hash
    map, one for a linked list."
  - Never ask it to write the solution before you have tried.
build:
  blurb: >-
    A command-line to-do list stored in a plain list: add items, remove by
    position, print in order.
  skills:
    - Indexing
    - Iteration
    - Insert and remove costs
  out: A working CLI to-do list.
practice:
  - label: Contains Duplicate
    url: https://leetcode.com/problems/contains-duplicate/
  - label: Best Time to Buy and Sell Stock
    url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
complexity:
  - op: Access
    val: O(1)
  - op: Search
    val: O(n)
  - op: Insert
    val: O(n)
    note: O(1) at the end
  - op: Delete
    val: O(n)
    note: O(1) at the end
  - op: Space
    val: O(n)
---

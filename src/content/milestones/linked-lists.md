---
order: 12
chapter: c3
title: Clear Linked Lists
do: Finish the Linked List topic on the roadmap.
why: Pointers, reversal, and cycle detection.
links:
  - label: Roadmap
    url: https://neetcode.io/roadmap
meta:
  interview: 4
  realWorld: 4
  time: a few days
  unlocks: LRU cache, fast/slow pointer
  confidence: >-
    you can walk a list with a pointer without losing your place, and reversing
    one by re-pointing arrows feels mechanical instead of scary.
problem: >-
  You are building a playlist and songs get inserted and removed from the middle
  constantly. In a plain array, inserting near the front means shifting every
  element after it — expensive, over and over. What if each item just knew where
  the next one lived, so adding or removing was only a matter of re-pointing one
  arrow?
analogy: >-
  A scavenger hunt. Each clue does not contain the whole route — it just tells you
  where to find the next clue. To insert a new stop, you only rewrite two clues:
  the one before points to your new clue, and your new clue points to what came
  next. Nothing else on the hunt has to move.
intuition: >-
  A linked list is a chain of little nodes. Each node holds a value and a pointer
  (.next) to the following node; the last one points at None. There are no indices,
  so you cannot jump to the middle — you walk from the head, following arrows. The
  three moves you will reuse forever: traverse (follow .next to the end), reverse
  (flip every arrow to point backward), and the fast/slow two-pointer trick for
  finding the middle or detecting a loop.
real:
  - An LRU cache pairs a hash map with a doubly linked list to evict the least-recently-used item in O(1).
  - Media players use next/previous pointers for playlists.
  - Git history is a linked list — each commit points back to its parent.
  - Many memory allocators keep free blocks on a linked list.
prereqs:
  - A class or object with fields — a Node holding .val and .next.
  - None as the "end of the chain" sentinel, and checking while node is not None.
  - Two Pointers — the fast/slow trick lives here.
toolkit:
  - code: "node.val, node.next"
    does: a node's value, and the pointer to the next node (or None at the end).
  - code: "while node:"
    does: keep walking while there is still a node (None is falsy — the end).
  - code: "node = node.next"
    does: step forward one link.
  - code: "prev, curr = None, head"
    does: the two pointers you carry while reversing.
  - code: "curr.next = prev"
    does: the heart of reversal — flip this node's arrow to point backward.
  - code: "slow, fast = head, head"
    does: fast/slow pointers; fast moves twice per step to find the middle or a cycle.
  - code: "dummy = ListNode(0, head)"
    does: a fake node before the head so edge cases at the front need no special code.
walkthrough:
  - To visit everything, start at head and follow .next until you hit None.
  - To reverse, walk once carrying prev and curr; each step, remember curr.next, point curr.next back at prev, then shuffle both pointers forward.
  - To find the middle (or a cycle), move slow one step and fast two; when fast reaches the end, slow is at the middle. If they ever meet, there is a loop.
  - When the front of the list is a special case, add a dummy node before the head so you never write "if this is the first node" logic.
code: |
  # Reverse a singly linked list
  def reverse(head):
      prev, curr = None, head
      while curr:
          nxt = curr.next    # remember where we were going
          curr.next = prev   # flip the arrow backward
          prev = curr        # advance prev
          curr = nxt         # advance curr
      return prev            # prev is the new head
build: >-
  Write your own Node class and a tiny linked list with add(value) and a print
  that walks the chain. Then add reverse(). Building the thing whose arrows you are
  flipping makes every reversal problem stop being abstract.
interview: >-
  Linked-list questions reward calm pointer bookkeeping, not cleverness. Draw the
  nodes and arrows on paper first. The recurring tools are reversal, the fast/slow
  pointer (middle, cycle, "nth from the end"), and the dummy head for clean edge
  cases. Almost every problem is a remix of those three.
practice:
  - label: Reverse Linked List
    url: https://leetcode.com/problems/reverse-linked-list/
  - label: Merge Two Sorted Lists
    url: https://leetcode.com/problems/merge-two-sorted-lists/
  - label: Linked List Cycle
    url: https://leetcode.com/problems/linked-list-cycle/
  - label: Remove Nth Node From End of List
    url: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
  - label: Reorder List
    url: https://leetcode.com/problems/reorder-list/
connects:
  - label: Two Pointers
    slug: two-pointers
  - label: Undo/redo or LRU cache
    slug: build-undo-redo-or-lru-cache
  - label: Trees
    slug: trees
check:
  q: >-
    You must decide whether a linked list loops back on itself, using no extra
    memory. What is the trick?
  a: >-
    Fast and slow pointers. Slow steps one node at a time, fast steps two. If there
    is a cycle, fast eventually laps slow and they meet; if fast reaches None,
    there is no loop. O(n) time, O(1) space.
reflect: "Why is inserting in the middle cheap for a linked list but costly for an array?"
---

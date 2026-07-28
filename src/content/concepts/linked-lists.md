---
order: 9
chapter: structures
title: Linked Lists
cues:
  - reverse the list
  - cycle or loop
  - insert or remove at ends
  - nth from end
  - no random access
why: >-
  Tests whether you can rewire pointers without losing the rest of the chain.
picture:
  - >-
    A scavenger hunt. Each clue holds a value and a pointer to where the next clue
    is. The items are scattered, not in a neat row; each just knows who comes next.
origin:
  - >-
    It is the answer to the array's weakness. Arrays are slow to insert in the
    middle because everything shifts.
  - >-
    A linked list gives up instant position-access to gain instant insert and
    delete: to add someone, you just rewire two pointers.
purpose:
  - >-
    You use it when you insert and remove a lot, especially at the ends or middle,
    and do not need to jump to "item number 500."
good:
  - Instant insert and delete once you are at the spot, with no shifting.
bad:
  - No jumping by index; you must walk from the front.
  - Extra memory for the pointers, and poor cache behavior.
click:
  - >-
    It is the mirror image of an array: the array trades insert-speed for
    lookup-speed, the linked list trades the reverse.
  - >-
    The reusable tricks are the runner (two pointers at different speeds) and
    careful pointer rewiring. A hash map plus a linked list is how an LRU cache works.
prereqs:
  - A class with fields — a Node holding .val and .next.
  - None as the end-of-chain marker, and checking while node is not None.
  - Two Pointers — the fast and slow trick lives here.
toolkit:
  - code: "node.val, node.next"
    does: a node's value, and the pointer to the next node (None at the end).
  - code: "while node:"
    does: keep walking while there is still a node (None ends it).
  - code: "node = node.next"
    does: step forward one link.
  - code: "prev, curr = None, head"
    does: the two pointers you carry while reversing.
  - code: "curr.next = prev"
    does: the heart of reversal — flip this node's arrow backward.
  - code: "slow, fast = head, head"
    does: fast and slow pointers, for the middle or a cycle.
  - code: "dummy = ListNode(0, head)"
    does: a fake node before the head, so front edge cases need no special code.
solve:
  lead: >-
    Linked-list solutions are about pointer discipline: since you can only follow
    next-arrows forward, you solve problems by walking with one or more pointers and
    rewiring the arrows carefully, never losing your grip on the rest of the chain.
  steps:
    - do: >-
        Decide how many pointers you need and what each means: a current, perhaps a
        previous, perhaps a fast one moving two steps.
      why: >-
        You cannot jump to node 500; you can only hold nodes you currently point at.
        Naming each pointer's job keeps a scattered chain under control.
    - do: Before overwriting any next-arrow, save a reference to the node it points at.
      why: >-
        The instant you change a node's next, the rest of the list can become
        unreachable. Grabbing next first stops you dropping the tail on the floor.
    - do: Consider adding a dummy node before the head.
      why: >-
        It gives every real node, even the first, a predecessor to rewire, which
        removes the special case for the head and a whole class of edge bugs.
    - do: For nth-from-end or cycle questions, run two pointers at different speeds.
      why: >-
        A fast pointer taking two steps per slow step either keeps a fixed gap from
        the end or laps the slow one inside a loop; the speed difference exposes
        structure you cannot index into.
  keep: >-
    At every moment you hold a pointer to each part of the list you still need, and
    no arrow is overwritten before its target is saved. Because that stays true, the
    chain never breaks mid-operation and nothing is lost.
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
ai:
  - Ask "why can't I index into a linked list in O(1)?"
  - Ask it to draw the pointer changes for one reversal step.
  - Do not let it write the rewiring.
build:
  blurb: "A music playlist: add, remove, and play the next song by rewiring pointers."
  skills:
    - Linked list
    - Pointers
  out: A CLI playlist.
video:
  label: "NeetCode: Reverse Linked List (free video + walkthrough)"
  url: https://neetcode.io/solutions/reverse-linked-list
practice:
  - label: Reverse Linked List
    url: https://leetcode.com/problems/reverse-linked-list/
    star: true
  - label: Merge Two Sorted Lists
    url: https://leetcode.com/problems/merge-two-sorted-lists/
    star: true
  - label: Linked List Cycle
    url: https://leetcode.com/problems/linked-list-cycle/
    star: true
  - label: Remove Nth Node From End of List
    url: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
    star: true
  - label: Reorder List
    url: https://leetcode.com/problems/reorder-list/
complexity:
  - op: Access
    val: O(n)
  - op: Search
    val: O(n)
  - op: Insert
    val: O(1)
    note: once you are at the node
  - op: Delete
    val: O(1)
    note: once you are at the node
  - op: Space
    val: O(n)
complexityNote: Finding the spot is still O(n). The O(1) is only the rewiring itself.
---

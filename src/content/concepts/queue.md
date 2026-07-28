---
order: 6
chapter: foundations
title: Queue
cues:
  - order of arrival
  - first in first out
  - level by level
  - process in order
  - BFS
why: >-
  Tests whether you can preserve order of arrival while things are still arriving.
picture:
  - >-
    A line at a shop. You join the back, and you are served from the front. First
    in, first out.
origin:
  - >-
    The opposite order from a stack, and just as natural: fairness and order of
    arrival.
  - >-
    Whenever things should be handled in the order they showed up, you want a queue.
purpose:
  - >-
    You use it for order-of-arrival processing: task queues, print jobs, and
    exploring a graph level by level (BFS).
good:
  - Instant add to the back and remove from the front, using a deque.
bad:
  - Like a stack, no middle access.
  - A queue built naively on a plain array is slow at the front.
click:
  - The trigger is "in the order they arrived" or "level by level."
  - >-
    BFS, the flood-outward graph search, is really just a queue driving the
    exploration.
prereqs:
  - collections.deque — a plain list is slow at the front.
  - The idea of a front and a back.
  - Arrays, and later Graphs (BFS runs on a queue).
toolkit:
  - code: "from collections import deque"
    does: a fast double-ended queue.
  - code: "q = deque()"
    does: an empty queue.
  - code: "q.append(x)"
    does: enqueue — add to the back.
  - code: "q.popleft()"
    does: dequeue — remove from the front.
  - code: "if q:"
    does: is there anything left to process?
  - code: "len(q)"
    does: how many are waiting — useful for level-by-level BFS.
solve:
  lead: >-
    A queue solution honors arrival order: you add new work to the back as you
    discover it and always take the next job from the front, so nothing is handled
    out of turn and whatever you reached first is finished first.
  steps:
    - do: >-
        Seed the queue with your starting point: the first job, or the first node
        of a graph.
      why: >-
        The front of the line is wherever you begin; in a graph search that single
        seed is the level zero everything else radiates out from.
    - do: "Loop: take one item from the front and do its work."
      why: >-
        Serving from the front preserves fairness and, in BFS, guarantees you finish
        everything one step away before anything two steps away.
    - do: >-
        As that work reveals new items (neighbors, follow-up tasks), add them to the
        back.
      why: >-
        Adding to the back makes new discoveries wait behind everything already in
        line, which keeps the search expanding in even rings instead of diving deep.
    - do: >-
        In a graph, mark each item the moment you enqueue it, and skip anything
        already marked.
      why: >-
        Without the mark you would enqueue the same node again and again and loop
        forever; marking on enqueue, not on removal, stops double-adding.
  keep: >-
    Everything in the queue is the same distance, give or take one, from where you
    started, and always in arrival order. Because that stays true, the first time
    you reach a target you have reached it in the fewest steps.
code: |
  # BFS that processes the queue one whole level at a time
  from collections import deque

  def levels(start, neighbors):
      q, seen, out = deque([start]), {start}, []
      while q:
          level = []
          for _ in range(len(q)):        # snapshot this level's size
              node = q.popleft()          # serve from the front
              level.append(node)
              for nb in neighbors(node):
                  if nb not in seen:
                      seen.add(nb)
                      q.append(nb)        # new work waits at the back
          out.append(level)
      return out
ai:
  - Ask "why does BFS need a queue and not a stack?"
  - Ask for the difference between a list and a deque in Python and why it matters.
  - Do not have it write the loop.
build:
  blurb: A print-job queue where jobs are handled strictly in arrival order.
  skills:
    - Queue
    - FIFO logic
    - deque
  out: A CLI print queue simulator.
video:
  label: "NeetCode: Binary Tree Level Order Traversal (BFS with a queue)"
  url: https://neetcode.io/solutions/binary-tree-level-order-traversal
practice:
  - label: Implement Queue using Stacks
    url: https://leetcode.com/problems/implement-queue-using-stacks/
  - label: Number of Recent Calls
    url: https://leetcode.com/problems/number-of-recent-calls/
  - label: Binary Tree Level Order Traversal
    url: https://leetcode.com/problems/binary-tree-level-order-traversal/
    star: true
  - label: Rotting Oranges
    url: https://leetcode.com/problems/rotting-oranges/
    star: true
  - label: Design Circular Queue
    url: https://leetcode.com/problems/design-circular-queue/
complexity:
  - op: Access
    val: O(n)
    note: front and back are O(1)
  - op: Search
    val: O(n)
  - op: Insert
    val: O(1)
    note: enqueue, at back
  - op: Delete
    val: O(1)
    note: dequeue, from front
  - op: Space
    val: O(n)
complexityNote: The O(1) ends assume a deque or linked queue, not a plain array.
---

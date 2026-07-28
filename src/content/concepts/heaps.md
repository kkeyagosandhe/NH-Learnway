---
order: 12
chapter: structures
title: Heaps
cues:
  - top K
  - Kth largest
  - Kth smallest
  - most or least urgent
  - running median
  - merge sorted
why: >-
  Tests whether you know when partial order beats fully sorting.
picture:
  - >-
    A hospital triage desk. It does not matter who arrived first; the most urgent
    patient is always handed to you next.
origin:
  - Sometimes you do not want first-in-first-out, you want most-important-out.
  - >-
    Sorting everything after each change is wasteful. A heap keeps just enough order
    to always hand back the top item cheaply.
purpose:
  - >-
    You use it whenever you repeatedly need the current smallest or largest:
    schedulers, "top K" problems, merging sorted streams.
good:
  - Instant peek at the min or max.
  - Insert and remove-top in O(log n), far cheaper than re-sorting.
bad:
  - Not fully sorted; you only get the top efficiently.
  - Cannot quickly find an arbitrary item inside it.
click:
  - >-
    A heap is secretly stored in a plain array (parent and children found by
    arithmetic on indices), so it is arrays again.
  - >-
    The trigger is "top K," "smallest or largest so far," or "always take the most
    urgent." In Python it is heapq.
prereqs:
  - Arrays — a heap is an array underneath.
  - The heapq module, and that it is a min-heap.
  - Tuples, to store (priority, item) pairs.
toolkit:
  - code: "import heapq"
    does: Python's heap lives here; it operates on a plain list.
  - code: "heap = []"
    does: an empty heap is just an empty list.
  - code: "heapq.heappush(heap, x)"
    does: add a value, keeping the smallest at the root — O(log n).
  - code: "heapq.heappop(heap)"
    does: remove and return the smallest — O(log n).
  - code: "heap[0]"
    does: peek at the smallest without removing it — O(1).
  - code: "heapq.heappush(heap, -x)"
    does: the max-heap trick — negate on the way in, negate back on the way out.
solve:
  lead: >-
    A heap solution keeps only enough order to hand you the single most extreme item
    cheaply, so instead of fully sorting after every change you let the heap surface
    the min or max on demand.
  steps:
    - do: Choose a min-heap or a max-heap based on which end you must pull from repeatedly.
      why: >-
        The heap is fast at only one end, so picking the wrong one forces you to
        negate every value; decide first whether you want the smallest or the largest.
    - do: Push items in as they arrive; each push settles into place in log n.
      why: >-
        You never sort the whole collection. The heap rebalances a little per insert,
        far cheaper than re-sorting every time the data changes.
    - do: Peek or pop the top whenever you need the current extreme.
      why: >-
        The top is always the min or max for free, and removing it costs only log n.
        That is the payoff: repeated give-me-the-most-urgent without ordering the rest.
    - do: For top-K, keep a heap of just K items and evict the weakest as stronger ones arrive.
      why: >-
        Holding only K rather than all n means each item costs log K and you use O(K)
        memory; the heap's cheap remove-the-worst-so-far is exactly what top-K needs.
  keep: >-
    The top of the heap is always the most extreme item among everything currently
    inside. Because that holds after every push and pop, a single peek can be trusted
    without inspecting the rest.
code: |
  # The K largest numbers, using a size-K min-heap
  import heapq

  def k_largest(nums, k):
      heap = []
      for x in nums:
          heapq.heappush(heap, x)   # add it
          if len(heap) > k:
              heapq.heappop(heap)   # drop the smallest; keep only the top k
      return sorted(heap, reverse=True)
  # O(n log k) time, O(k) memory — never sorts all n
ai:
  - Ask "why is a heap better than sorting for a top-K problem?"
  - Ask when a min-heap versus a max-heap fits.
  - Do not have it write the heap operations.
build:
  blurb: A task scheduler that always runs the highest-priority task next.
  skills:
    - Heap
    - Priority queue
    - heapq
  out: A CLI priority task runner.
practice:
  - label: Kth Largest Element in a Stream
    url: https://leetcode.com/problems/kth-largest-element-in-a-stream/
  - label: Last Stone Weight
    url: https://leetcode.com/problems/last-stone-weight/
complexity:
  - op: Access
    val: O(1)
    note: peek top only
  - op: Search
    val: O(n)
    note: arbitrary element
  - op: Insert
    val: O(log n)
  - op: Delete
    val: O(log n)
    note: extract top
  - op: Space
    val: O(n)
---

---
order: 14
chapter: c3
title: Clear Heap / Priority Queue
do: Finish the Heap topic. This is your task-scheduler project pattern.
why: Always hand back the most urgent item first.
links:
  - label: Roadmap
    url: https://neetcode.io/roadmap
meta:
  interview: 4
  realWorld: 5
  time: a few days
  unlocks: Dijkstra, top-K, streaming median
  confidence: >-
    you hear "top K", "most urgent", or "smallest so far in a stream" and reach
    for a heap instead of sorting the whole thing every time.
problem: >-
  An emergency room keeps taking new patients, and you must always treat the most
  urgent one next — not the one who arrived first. New arrivals never stop. Keeping
  the whole waiting room perfectly sorted after every arrival is wasted effort; you
  only ever need the single most urgent person right now. What structure gives you
  that, cheaply, forever?
analogy: >-
  Triage. The nurse does not rank all forty people in the waiting room top to
  bottom. They just keep the most urgent case bubbled to the front, and when
  someone new checks in, they slot into roughly the right place. Pulling the next
  patient is instant; adding one is quick. Full ordering of everyone else never
  matters.
intuition: >-
  A heap is a tree that keeps only one promise: the smallest value (a min-heap) is
  always at the root. It does not fully sort — it just maintains that top. Both
  pushing a new value and popping the smallest are O(log n), and peeking the
  smallest is instant. That is exactly enough for "always give me the most urgent
  next," and it is far cheaper than re-sorting. The classic moves it unlocks:
  top-K, merge-K-sorted-lists, and running median.
real:
  - Operating systems pick which process runs next from a priority queue.
  - Dijkstra's and A* shortest-path algorithms use a heap to always expand the nearest node — this powers game pathfinding and maps.
  - Top trending and most-liked feeds keep the leaders in a heap.
  - Event-driven simulations pop the next event by time.
prereqs:
  - Arrays and Hashing.
  - Python's heapq module — import heapq.
  - Tuples, so you can store (priority, item) pairs.
  - Knowing heapq is a min-heap; for a max-heap you push negated values.
toolkit:
  - code: "import heapq"
    does: Python's heap lives here; it operates on a plain list.
  - code: "heap = []"
    does: an empty heap is just an empty list.
  - code: "heapq.heappush(heap, x)"
    does: add a value, keeping the smallest at the root — O(log n).
  - code: "heapq.heappop(heap)"
    does: remove and return the smallest value — O(log n).
  - code: "heap[0]"
    does: peek at the smallest without removing it — O(1).
  - code: "heapq.heappush(heap, (priority, item))"
    does: store pairs; the heap orders by the first element, the priority.
  - code: "heapq.heappush(heap, -x)"
    does: the max-heap trick — negate on the way in, negate back on the way out.
walkthrough:
  - Decide what "most urgent" means and put that quantity first in each item.
  - Push items onto the heap as they arrive.
  - Pop whenever you need the current smallest / most urgent — it comes out in O(log n).
  - "Top K largest? Keep a min-heap capped at size K: push each number, and if the heap grows past K, pop the smallest. What survives is the K biggest."
  - Need a max-heap but only have a min-heap? Push negatives and flip the sign coming out.
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
  # O(n log k) time, O(k) memory — never sorts all n.
build: >-
  Build a task scheduler: add(task, priority) and get_next() that always returns
  the most urgent task waiting. That is a priority queue with a friendly face —
  and the exact shape behind real job queues.
interview: >-
  The tells are "top K", "K closest", "K most frequent", "merge K sorted lists",
  and anything about the most or least urgent item in a stream. The pattern that
  trips people up but pays off: to keep the K largest, use a min-heap of size K
  (not a max-heap of everything). Median-of-a-stream with two heaps is the
  showpiece problem here.
practice:
  - label: Kth Largest Element in a Stream
    url: https://leetcode.com/problems/kth-largest-element-in-a-stream/
  - label: Last Stone Weight
    url: https://leetcode.com/problems/last-stone-weight/
  - label: K Closest Points to Origin
    url: https://leetcode.com/problems/k-closest-points-to-origin/
  - label: Task Scheduler
    url: https://leetcode.com/problems/task-scheduler/
  - label: Find Median from Data Stream
    url: https://leetcode.com/problems/find-median-from-data-stream/
connects:
  - label: Trees
    slug: trees
  - label: Graph project
    slug: build-a-graph-project
  - label: Arrays and Hashing
    slug: arrays-and-hashing
check:
  q: >-
    A billion numbers stream past and you must keep only the 10 largest, with tiny
    memory. What do you hold, and what do you do on each new number?
  a: >-
    Hold a min-heap of size 10. Push each new number; whenever the heap exceeds 10,
    pop the smallest. The smallest of your ten is always at the root, so you know
    instantly whether a newcomer deserves to be kept. O(n log 10) time, O(10) space.
reflect: "Why keep a size-K MIN-heap to track the K LARGEST items?"
---

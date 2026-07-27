---
order: 17
chapter: c4
title: Build undo/redo or an LRU cache
do: Pick one. Undo/redo uses two stacks. An LRU cache uses a hash map plus a linked list.
why: The same patterns as your DSA topics, now inside a real thing.
meta:
  interview: 4
  realWorld: 5
  time: a weekend
  unlocks: Combining data structures
  confidence: >-
    you can explain why the LRU cache needs BOTH a hash map and a linked list, and
    what each one is buying you.
problem: >-
  Two everyday features, two classic structure combos. Undo/redo: every editor
  lets you step backward through your actions and forward again. An LRU cache: a
  fixed-size store that, when full, throws out whichever item was used least
  recently — the beating heart of every cache from your browser to Redis. Neither
  is solved by one data structure. The skill here is combining two.
analogy: >-
  Undo/redo is two piles of cards: a "done" pile you keep stacking actions onto,
  and an "undone" pile. Undo moves the top card from done to undone; redo moves it
  back. The LRU cache is a wall of sticky notes with room for only N: every time
  you touch a note you move it to the front, and when a new one arrives with no
  room, the note at the very back — the one nobody has touched longest — falls off.
intuition: >-
  Undo/redo is two stacks, because "the most recent action" is exactly what a stack
  hands back. The LRU cache is the sharper lesson: you need O(1) "is this key
  cached?" (a hash map) AND O(1) "move this to most-recent" and "drop the
  least-recent" (a doubly linked list). Neither structure alone does both, so you
  wire them together — the hash map points at nodes living in the linked list. That
  pairing is the whole insight.
real:
  - Every text editor, IDE, and design tool ships undo/redo built on two stacks.
  - Browsers, CDNs, and CPUs cache with eviction policies; LRU is the most common.
  - Redis and Memcached evict least-recently-used keys when memory fills.
  - The browser back/forward buttons are the two-stack pattern exactly.
prereqs:
  - Stack — undo/redo is two of them.
  - Linked Lists — the LRU cache's move-to-front and evict-from-back.
  - Arrays and Hashing — the LRU cache's O(1) lookup.
toolkit:
  - code: "undo, redo = [], []"
    does: two stacks — the done pile and the undone pile.
  - code: "undo.append(action)"
    does: record an action so it can be reversed later.
  - code: "redo.append(undo.pop())"
    does: undo — move the latest action from the done pile to the undone pile.
  - code: "from collections import OrderedDict"
    does: a dict that also remembers insertion order — a shortcut to an LRU cache.
  - code: "cache.move_to_end(key)"
    does: mark a key as most-recently-used by moving it to the back.
  - code: "cache.popitem(last=False)"
    does: evict the least-recently-used item — the one at the front.
walkthrough:
  - "For the LRU cache, on get: if the key is missing it is a miss; if present, move it to most-recently-used and return its value."
  - "On put: insert or update the key, mark it most-recently-used."
  - After a put, if the cache is over capacity, evict the least-recently-used item.
  - Every one of those operations must be O(1) — that constraint is exactly why you pair a hash map with a linked list (or lean on OrderedDict, which is that pairing prebuilt).
code: |
  # LRU cache, using OrderedDict (a hash map + linked list in one)
  from collections import OrderedDict

  class LRUCache:
      def __init__(self, capacity):
          self.cache = OrderedDict()
          self.cap = capacity

      def get(self, key):
          if key not in self.cache:
              return -1
          self.cache.move_to_end(key)      # now most-recently-used
          return self.cache[key]

      def put(self, key, value):
          if key in self.cache:
              self.cache.move_to_end(key)
          self.cache[key] = value
          if len(self.cache) > self.cap:
              self.cache.popitem(last=False)  # evict least-recently-used
build: >-
  Pick one and build it end to end. If undo/redo, wrap a little text buffer so you
  can type, undo, and redo. If the LRU cache, build it once with OrderedDict, then
  — for the real lesson — again from scratch with your own hash map plus a doubly
  linked list, so you feel why both are needed.
interview: >-
  LRU Cache is one of the most-asked design questions, precisely because it forces
  you to combine structures and defend the O(1) requirement. If you can say "hash
  map for lookup, doubly linked list for recency, and here's how they point at each
  other," you are demonstrating exactly the judgment interviewers are probing for.
practice:
  - label: LRU Cache
    url: https://leetcode.com/problems/lru-cache/
  - label: Design Browser History
    url: https://leetcode.com/problems/design-browser-history/
  - label: Min Stack
    url: https://leetcode.com/problems/min-stack/
connects:
  - label: Stack
    slug: stack
  - label: Linked Lists
    slug: linked-lists
  - label: Arrays and Hashing
    slug: arrays-and-hashing
check:
  q: >-
    Why can't an LRU cache be built from a hash map alone, or a linked list alone?
  a: >-
    A hash map gives O(1) lookup but no notion of recency order; a linked list
    gives O(1) reordering and eviction but O(n) lookup. You need both at once, so
    you combine them — the map finds the node instantly, the list keeps it in
    recency order.
reflect: "Which did you build, and what did combining two structures teach you?"
---

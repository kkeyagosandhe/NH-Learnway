---
order: 2
chapter: foundations
title: Hash Maps
cues:
  - duplicates
  - frequency
  - count
  - seen before
  - lookup
  - group by
  - have I seen this
why: >-
  Tests whether you can trade memory for speed.
picture:
  - >-
    A coat check at a packed event. You hand over ticket 147, and the attendant
    walks straight to hook 147. The ticket tells them exactly where to look.
origin:
  - A plain array is only fast if you already know the index number.
  - >-
    A hash map lets you use anything as the key (a name, an email) by running it
    through a hash function that turns it into a slot number. Store at that slot,
    look up at that slot. When two keys land on the same slot, a collision, you
    keep a small list there.
purpose:
  - >-
    You reach for it to answer "have I seen this before?" or "what is linked to
    this key?" instantly, no matter how much data.
  - >-
    Average lookup is O(1): the same speed at 10 items or 10 million.
good:
  - Instant lookup, insert, and delete by key.
  - Instant "does this exist?" using a set.
bad:
  - No order, so you cannot ask for "the third item."
  - >-
    Uses extra memory, and worst-case slows down if hashing is poor (rare in
    practice).
click:
  - >-
    This is the tool you will reach for most. A huge share of easy and medium
    problems are just "use a hash map to trade a little memory for a lot of speed."
  - It powers caching, Redis, database indexes, and memoization.
prereqs:
  - Arrays — a hash map uses one underneath.
  - A for loop over a list.
  - The idea of a key paired with a value.
toolkit:
  - code: "count = {}"
    does: an empty dict — the hash map itself.
  - code: "count[k] = v"
    does: store value v at key k.
  - code: "count.get(k, 0)"
    does: read key k, but hand back 0 if it was never stored — no crash.
  - code: "if k in count:"
    does: check whether a key is already present, in O(1).
  - code: "seen = set()"
    does: a dict with keys only — use it for pure "seen it?" checks.
  - code: "from collections import Counter"
    does: the one-line counter, once you trust the manual version.
viz: hashmap
solve:
  lead: >-
    Nearly every hash-map solution is the same trade: as you walk the data once,
    you jot down what you have already seen, so that any later question — have I
    seen this, how many times, what was it paired with — is answered instantly
    instead of searched for.
  steps:
    - do: >-
        Choose the key: the exact thing you will later want to ask about — a value,
        a remainder, a sorted-letters signature, a coordinate.
      why: >-
        The coat check works only because the ticket number is what you look up by.
        Choosing the right key is the whole design, and everything else follows.
    - do: >-
        Choose what to store against that key: a count, a position, a list of
        items, or just its presence in a set.
      why: >-
        The value is your answer-in-waiting: if the question is how often, store a
        count; if it is where, store the index; if only whether you saw it, a set.
    - do: >-
        Walk the data once. For each item, first ask the map your question, then
        record the item for those that come after.
      why: >-
        Asking before inserting is what lets an item find a match with something
        earlier without comparing every pair, and keeps it from matching itself.
    - do: >-
        Trust that lookup and insert are O(1), so one pass over n items stays O(n).
      why: >-
        That is the payoff for the extra memory: the map does not care whether it
        holds ten keys or ten million, each question is still a single step.
  keep: >-
    The map always holds exactly what you have seen so far and nothing you have
    not. Because that stays true at every step, any question you ask it is answered
    against the correct history, which is what collapses an all-pairs O(n squared)
    search into one O(n) pass.
code: |
  # The frequency counter — the hash-map idiom you'll use everywhere
  def first_unique(s):
      count = {}
      for ch in s:
          count[ch] = count.get(ch, 0) + 1   # tally each character
      for ch in s:
          if count[ch] == 1:
              return ch                       # first seen exactly once
      return None
  # one pass to count, one pass to find. O(n).
ai:
  - Ask it to name the pattern behind your working code and its time complexity.
  - Ask for three problem phrasings that secretly mean "use a hash map."
  - Do not let it write the counting logic for you.
build:
  blurb: >-
    A phonebook: add a name to a number, then look up any name instantly.
  skills:
    - Hashing
    - Key lookup
    - Frequency counting
  out: A CLI phonebook.
practice:
  - label: Two Sum
    url: https://leetcode.com/problems/two-sum/
  - label: Valid Anagram
    url: https://leetcode.com/problems/valid-anagram/
complexity:
  - op: Access
    val: O(1)
    note: by key
  - op: Search
    val: O(1)
  - op: Insert
    val: O(1)
  - op: Delete
    val: O(1)
  - op: Space
    val: O(n)
complexityNote: >-
  Average case. Worst case is O(n) with heavy collisions, which is rare in practice.
---

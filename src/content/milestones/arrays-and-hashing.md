---
order: 5
chapter: c2
title: Clear Arrays and Hashing
do: Finish this topic on the NeetCode roadmap. Watch the free video for anything that does not click.
why: The most common pattern family in interviews.
links:
  - label: Roadmap
    url: https://neetcode.io/roadmap
meta:
  interview: 5
  realWorld: 5
  time: about a week to feel solid
  unlocks: Sliding Window, Tries, LRU Cache
  confidence: >-
    you instantly read "have I seen this before?" and "how many times does X
    appear?" as hash-map problems.
problem: >-
  You have a million users. Someone types their email to log in. You need their
  account right now, not after checking a million rows one at a time. How do you
  find one thing instantly, no matter how big the pile gets?
analogy: >-
  Picture the coat check at a packed event. Nobody searches every hook for your
  coat. You hand over ticket 147, and the attendant walks straight to hook 147.
  The ticket tells them exactly where to look. A hash map is that attendant: it
  turns your key into a location and goes straight there, instead of searching.
viz: hashmap
intuition: >-
  A plain array is only fast if you already know the index number. A hash map
  lets you use anything as the key — a name, an email, a word — by running it
  through a hash function that spits out a slot number. Store at that slot, look
  up at that slot, no scanning. On average that lookup is O(1): the same speed
  whether you hold 10 items or 10 million. When two keys land on the same slot (a
  collision), you just keep a small list in that slot.
real:
  - Python dictionaries and JavaScript objects and Maps are hash maps underneath.
  - Redis is basically one giant hash map living in memory, which is why it answers in microseconds.
  - Databases use hash indexes to jump straight to a row instead of scanning the whole table.
  - Compilers keep a symbol table (a hash map) to track every variable in your code.
  - Caching and memoization store results keyed by their input so the work never repeats.
prereqs:
  - Writing and running a for loop over a list.
  - Reading a list by position — arr[0], arr[-1].
  - Writing a function and using return.
  - "New here, and that's fine: the idea of a key → value pair."
toolkit:
  - code: "count = {}"
    does: an empty dict — the hash map itself, mapping keys to values.
  - code: "count[ch] = 1"
    does: store (or overwrite) the value stored at key ch.
  - code: "count.get(ch, 0)"
    does: read key ch, but hand back 0 if it was never stored — no crash.
  - code: "if ch in count:"
    does: '"have I seen this key before?" answered in O(1).'
  - code: "seen = set()"
    does: a dict with keys only — use it when you just need "seen it, yes/no?".
  - code: "for i, x in enumerate(arr):"
    does: loop with the index and the value together.
  - code: "from collections import Counter"
    does: the one-line shortcut for counting — once you trust the manual version.
walkthrough:
  - Read the ask. If it is "have I seen this?" or "how many times does X appear?", that is your hash-map tell.
  - Make an empty dict (or a set, if you only need yes/no).
  - Walk the input once. For each item, either record it or check it against what you have already stored.
  - Every store and lookup is O(1), so a single pass is O(n) — no nested loop, no re-scanning.
  - "Return whatever you accumulated: the count, the first match, the pair of indices."
code: |
  # The frequency counter: the hash-map idiom you will use everywhere
  def first_unique(s):
      count = {}
      for ch in s:
          count[ch] = count.get(ch, 0) + 1   # tally each character
      for ch in s:
          if count[ch] == 1:
              return ch                       # first one seen exactly once
      return None
  # one pass to count, one pass to find. O(n).
build: >-
  Build a phonebook in about 30 lines: add a name → number, then look up any name
  instantly. That is a hash map wearing a friendly face.
interview: >-
  This is the single most common tool in the interview. A huge share of easy and
  medium problems are really just "use a hash map to trade a little memory for a
  lot of speed." The tell is almost always "have I seen this before?" or "how many
  times does X appear?" When you hear that, reach for a hash map or a set before
  anything else.
practice:
  - label: Two Sum
    url: https://leetcode.com/problems/two-sum/
  - label: Contains Duplicate
    url: https://leetcode.com/problems/contains-duplicate/
  - label: Valid Anagram
    url: https://leetcode.com/problems/valid-anagram/
  - label: Group Anagrams
    url: https://leetcode.com/problems/group-anagrams/
  - label: Top K Frequent Elements
    url: https://leetcode.com/problems/top-k-frequent-elements/
connects:
  - label: Sliding Window
    slug: sliding-window
  - label: Tries / Autocomplete
    slug: build-autocomplete-trie
  - label: LRU Cache
    slug: build-undo-redo-or-lru-cache
check:
  q: >-
    You are asked to find the first character in a string that never repeats.
    What is your first instinct, before writing any code?
  a: >-
    Count every character's frequency with a hash map in one pass, then scan the
    string once more and return the first character whose count is 1. Two passes,
    O(n). If you reached for nested loops, that is the slow trap this pattern
    exists to kill.
reflect: "In one sentence: when will you reach for a hash map?"
---

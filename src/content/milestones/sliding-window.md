---
order: 7
chapter: c2
title: Clear Sliding Window
do: Finish Sliding Window on the roadmap. This is also your rate-limiter project pattern.
why: A window sliding along a line, counting what is inside it.
links:
  - label: Roadmap
    url: https://neetcode.io/roadmap
meta:
  interview: 4
  realWorld: 4
  time: a few days
  unlocks: Rate limiters, streaming stats
  confidence: >-
    you see "longest / shortest / max sum of a contiguous run" and immediately
    think "grow the right edge, shrink the left edge," not "check every run."
problem: >-
  You want the longest stretch of a string with no repeated letters, or the
  biggest sum of any 5 neighbours in a list. The obvious way re-checks every
  possible stretch from scratch — that is n × k work and it crawls on big inputs.
  But each stretch overlaps the last one almost entirely. Why recompute what did
  not change?
analogy: >-
  Picture a train window gliding along a mural. As the window moves one step
  right, one new slice of painting appears on the right and one old slice leaves
  on the left. You do not re-describe the whole mural each step — you just add
  what entered and subtract what left. That bookkeeping is the entire trick.
intuition: >-
  Keep two edges, left and right, marking a window over the array. Push the right
  edge out to grow the window and fold the new element into a running total (or a
  set of what is inside). The moment the window breaks its rule — a repeat
  appeared, the sum got too big — pull the left edge in, undoing elements until
  the rule holds again. Each index enters once and leaves once, so the whole thing
  is O(n).
real:
  - Rate limiting — "no more than 100 requests from this user in the last 60 seconds" is a window sliding over time.
  - Streaming analytics — a moving average or rolling max over the last N data points.
  - Network protocols — TCP's congestion window is literally a sliding window.
  - Bioinformatics — scanning a DNA string for a fixed-length pattern.
prereqs:
  - Arrays and Hashing — you track what is in the window with a set or dict.
  - Two Pointers — this is that idea, with both pointers moving the same direction.
  - A while loop nested inside a for loop, and being unafraid of it.
toolkit:
  - code: "l = 0"
    does: the left edge of the window; it only ever moves right.
  - code: "for r in range(len(s)):"
    does: the right edge marches across the whole array once.
  - code: "window = set()"
    does: remember what is currently inside the window (or a dict for counts).
  - code: "while <rule is broken>:"
    does: shrink from the left until the window is valid again.
  - code: "window.remove(s[l]); l += 1"
    does: drop the leftmost element and pull the left edge inward.
  - code: "best = max(best, r - l + 1)"
    does: r - l + 1 is the current window length; keep the best you have seen.
walkthrough:
  - Set the left edge at 0 and let a for loop drive the right edge across the array.
  - Each step, add the new right element to your window (the set, the sum, the count).
  - Check the window's rule. If it is broken, shrink from the left in a while loop until it holds.
  - After each valid step, record the window's size or sum against your best answer.
  - Because left and right each cross the array at most once, the whole scan is O(n).
code: |
  # Longest substring with no repeating characters
  def longest_unique(s):
      window = set()
      l = best = 0
      for r in range(len(s)):
          while s[r] in window:        # rule broken: a repeat entered
              window.remove(s[l])       # shrink from the left
              l += 1
          window.add(s[r])              # now safe to include s[r]
          best = max(best, r - l + 1)   # window length = r - l + 1
      return best
  # each index is added once and removed once -> O(n).
build: >-
  Build a rate limiter: a function allow(user) that returns True only if the user
  has made fewer than N requests in the last W seconds. Keep each user's recent
  timestamps and slide the window forward, dropping any older than W. This is the
  same pattern, applied to time instead of a string.
interview: >-
  The tell is the word contiguous, plus a superlative: longest, shortest, maximum,
  minimum, or "at most K of something." If the subarray or substring has to be a
  single unbroken run, sliding window almost always beats the brute force. If order
  does not matter, it is probably a hash-map problem instead.
practice:
  - label: Best Time to Buy and Sell Stock
    url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
  - label: Longest Substring Without Repeating Characters
    url: https://leetcode.com/problems/longest-substring-without-repeating-characters/
  - label: Longest Repeating Character Replacement
    url: https://leetcode.com/problems/longest-repeating-character-replacement/
  - label: Permutation in String
    url: https://leetcode.com/problems/permutation-in-string/
  - label: Minimum Window Substring
    url: https://leetcode.com/problems/minimum-window-substring/
connects:
  - label: Two Pointers
    slug: two-pointers
  - label: Arrays and Hashing
    slug: arrays-and-hashing
check:
  q: >-
    You need the maximum sum of any 5 consecutive numbers in a long list. What do
    you do instead of summing every group of 5?
  a: >-
    Sum the first 5, then slide: each step add the next number and subtract the
    one that fell off the back. One pass, O(n), instead of re-summing every window
    for O(n·k).
reflect: "What phrase in a problem makes you reach for a sliding window?"
---

---
order: 4
chapter: foundations
title: Sliding Window
cues:
  - longest
  - shortest
  - contiguous
  - substring
  - subarray
  - at most K
why: >-
  Tests whether you recognize reusable state instead of recomputing work.
picture:
  - >-
    A fixed-width window on a moving train, sliding along a long strip, seeing only
    what is inside it at any moment.
origin:
  - >-
    Same waste as before: recomputing a whole chunk every time you move is O(n
    times k).
  - >-
    A window that slides one step, adding the new item and dropping the old, reuses
    the previous work. One pass.
purpose:
  - You use it for the best, longest, or shortest contiguous run that satisfies a rule.
  - Substrings, subarrays, running totals.
good:
  - One pass, cheap.
  - Perfect for any "contiguous stretch" question.
bad:
  - Only for contiguous pieces, not scattered picks.
  - Variable-size windows take care to get right.
click:
  - The trigger is the word "contiguous" plus "longest, shortest, max, or min."
  - >-
    It often pairs with a hash map to track what is currently in the window. This
    is exactly how a rate limiter works.
prereqs:
  - Arrays and Two Pointers — this is two pointers moving the same direction.
  - Hash Maps or a set, to track what is inside the window.
  - A while loop nested inside a for loop.
toolkit:
  - code: "l = 0"
    does: the left edge of the window; it only ever moves right.
  - code: "for r in range(len(s)):"
    does: the right edge marches across the whole array once.
  - code: "window = set()"
    does: remember what is currently inside (or a dict for counts).
  - code: "while rule_broken:"
    does: shrink from the left until the window is valid again.
  - code: "window.discard(s[l]); l += 1"
    does: drop the leftmost element and pull the left edge inward.
  - code: "best = max(best, r - l + 1)"
    does: r minus l plus 1 is the window length; keep the best seen.
solve:
  lead: >-
    The whole trick is to never look at the same item twice: keep a window, the
    stretch you can currently see, and slide it forward, only ever adding the new
    item on the right and dropping the stale one on the left.
  steps:
    - do: Start both edges, left and right, at the beginning, with the window empty.
      why: >-
        The window is your "what I can see right now." Starting empty means it can
        only grow rightward, so every item enters exactly once.
    - do: >-
        Move the right edge forward, pulling the new item in and folding it into a
        small running summary — a sum, a count, a map of what's inside.
      why: >-
        This reuse is what makes it one pass: you update the summary once per item
        instead of re-scanning the whole window. That summary is the memory.
    - do: >-
        Check whether the window still obeys the rule: at most K distinct, sum
        under a limit, no repeats.
      why: >-
        This is the real question the problem asks. You kept a summary in the last
        step precisely so this check is instant, not another full scan.
    - do: >-
        If the rule is broken, move the left edge inward, removing items from the
        summary, until the window is legal again.
      why: >-
        A broken window holds no valid answer. Shrinking from the left drops the
        oldest items first, exactly like the train window leaving old scenery.
    - do: >-
        Every time the window is legal, compare its size or sum to the best you
        have seen and keep the winner.
      why: >-
        Because you only record from a legal window, the best you keep is always a
        real answer. That is why you measure after shrinking, never before.
  keep: >-
    Everything between left and right always satisfies the rule. Because that stays
    true at every step, the moment you measure the window you already know it is a
    legal answer, with nothing to double-check.
code: |
  # Longest substring with no repeating characters
  def longest_unique(s):
      window = set()
      l = best = 0
      for r in range(len(s)):
          while s[r] in window:        # rule broken: a repeat entered
              window.discard(s[l])      # shrink from the left
              l += 1
          window.add(s[r])              # now safe to include s[r]
          best = max(best, r - l + 1)   # window length = r - l + 1
      return best
  # each index is added once and removed once -> O(n)
ai:
  - Ask "what tells me the window should grow versus shrink here?"
  - Ask for the two-line summary of the pattern, not the code.
  - Write the window logic yourself.
build:
  blurb: "A rate limiter: allow at most N actions in any 60-second window."
  skills:
    - Sliding window
    - Counting
  out: A CLI rate limiter.
video:
  label: "NeetCode: Longest Substring Without Repeating Characters (free video)"
  url: https://neetcode.io/solutions/longest-substring-without-repeating-characters
practice:
  - label: Best Time to Buy and Sell Stock
    url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
  - label: Longest Substring Without Repeating Characters
    url: https://leetcode.com/problems/longest-substring-without-repeating-characters/
    star: true
  - label: Longest Repeating Character Replacement
    url: https://leetcode.com/problems/longest-repeating-character-replacement/
    star: true
  - label: Permutation in String
    url: https://leetcode.com/problems/permutation-in-string/
  - label: Minimum Window Substring
    url: https://leetcode.com/problems/minimum-window-substring/
    star: true
complexity:
  - op: Time
    val: O(n)
  - op: Space
    val: O(1) to O(k)
    note: k = what the window tracks
complexityNote: >-
  Each item enters and leaves the window at most once, so it stays a single pass.
---

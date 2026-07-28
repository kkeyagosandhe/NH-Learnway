---
order: 17
chapter: techniques
title: Intervals
cues:
  - start and end
  - ranges
  - overlap
  - merge
  - how many rooms
  - on a timeline
why: >-
  Tests whether you reach for sorting to make overlaps local and obvious.
picture:
  - >-
    Booking a meeting room. Each meeting is a bar on a timeline with a start and an
    end. You care about which bars overlap and which fit together.
origin:
  - >-
    Tons of real problems are about ranges on a line: calendars, bookings, CPU time
    slots.
  - >-
    The recurring insight is that once you sort the intervals by start time, overlaps
    become obvious and local.
purpose:
  - >-
    You use it for scheduling, merging overlapping ranges, and "can all these fit?" or
    "how many rooms do I need?" questions.
good:
  - After sorting, most interval problems become a single clean pass.
bad:
  - Forgetting to sort first is the classic mistake.
  - Edge cases at the exact touch points (does end equal to start count as overlap?) trip people up.
click:
  - >-
    The universal first move is "sort by start, then sweep left to right, comparing
    each interval to the last one you kept."
  - >-
    The trigger is any problem with start and end pairs on a timeline. It quietly
    reuses sorting and greedy thinking.
prereqs:
  - Sorting with a key — intervals.sort(key=...).
  - Arrays, and unpacking a pair into start and end.
  - The overlap condition — this start is at or before the last end.
toolkit:
  - code: "intervals.sort(key=lambda x: x[0])"
    does: sort by start time — the first move of nearly every interval problem.
  - code: "for s, e in intervals:"
    does: sweep left to right, unpacking start and end.
  - code: "if s <= last_end:"
    does: does this interval overlap the current block?
  - code: "last_end = max(last_end, e)"
    does: extend the current block to cover the overlap.
  - code: "merged.append([s, e])"
    does: start a fresh block when there is no overlap.
solve:
  lead: >-
    Almost every interval problem is unlocked by one move: sort by start time. Once
    the intervals are in order, overlaps stop being scattered across the timeline and
    become a simple comparison between each interval and the one just before it.
  steps:
    - do: Sort every interval by its start time.
      why: >-
        This is the move people forget, and it is the whole game: in start order,
        anything overlapping a given interval must sit right beside it.
    - do: Sweep left to right, keeping the last interval you kept, or the current merged block.
      why: >-
        Sorting made overlaps local, so one neighbor-by-neighbor sweep is enough; the
        last kept block is your running summary of the timeline so far.
    - do: >-
        For each interval, compare its start with the current block's end to decide:
        overlap, or a fresh block?
      why: >-
        That one comparison is the entire decision: if it starts before the current
        block ends they overlap and you extend, otherwise this interval opens a new one.
    - do: "Be explicit about touching endpoints: does an end equal to the next start count as an overlap?"
      why: >-
        The classic edge case lives exactly here; whether 1-to-2 and 2-to-3 merge
        depends on the problem's definition, and getting it wrong is an off-by-one.
  keep: >-
    Once sorted, every interval that could overlap a given one is adjacent to it in the
    list. Because that stays true, a single left-to-right sweep comparing each interval
    with the last catches every overlap.
code: |
  # Merge overlapping intervals
  def merge(intervals):
      intervals.sort(key=lambda x: x[0])       # sort by start
      merged = []
      for s, e in intervals:
          if merged and s <= merged[-1][1]:    # overlaps the last block
              merged[-1][1] = max(merged[-1][1], e)
          else:
              merged.append([s, e])            # a fresh block
      return merged
ai:
  - Ask "why does sorting by start make overlaps easy to detect?"
  - Ask it to clarify the overlap condition with a picture.
  - Do not let it write the merge loop.
build:
  blurb: A calendar that merges overlapping events into single blocks.
  skills:
    - Intervals
    - Sorting
    - Sweep
  out: A CLI calendar merger.
video:
  label: "NeetCode: Merge Intervals (sort, then sweep)"
  url: https://neetcode.io/solutions/merge-intervals
practice:
  - label: Merge Intervals
    url: https://leetcode.com/problems/merge-intervals/
    star: true
  - label: Insert Interval
    url: https://leetcode.com/problems/insert-interval/
    star: true
  - label: Non-overlapping Intervals
    url: https://leetcode.com/problems/non-overlapping-intervals/
    star: true
  - label: Interval List Intersections
    url: https://leetcode.com/problems/interval-list-intersections/
  - label: Minimum Number of Arrows to Burst Balloons
    url: https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
complexity:
  - op: Time
    val: O(n log n)
    note: dominated by the sort
  - op: Space
    val: O(1)
    note: O(n) if you build output
complexityNote: The sort is the cost. The sweep after it is linear.
---

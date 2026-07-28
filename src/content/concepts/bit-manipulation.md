---
order: 18
chapter: techniques
title: Bit Manipulation
cues:
  - appears twice except one
  - without extra memory
  - flags or on-off
  - powers of two
  - count set bits
why: >-
  Tests whether you are comfortable at the raw bit level when it buys speed or space.
picture:
  - >-
    A row of light switches, each on (1) or off (0). A number is just a pattern of
    switches, and you can flip, test, and combine them directly.
origin:
  - Underneath everything, data is bits.
  - >-
    Sometimes working at that raw level is the fastest, cheapest way: pack many yes/no
    flags into one number, or use clever switch tricks to avoid loops.
purpose:
  - >-
    You use it for tight optimizations, packing flags, and a family of interview
    problems with slick bitwise answers (find the one unpaired number, count set bits).
good:
  - Extremely fast and memory-cheap.
  - Turns some problems into one or two operations.
bad:
  - Hard to read and easy to get subtly wrong.
  - Rarely needed for everyday app work, so treat it as a specialist tool.
click:
  - >-
    The core operators are AND, OR, XOR, NOT, and shifts. XOR is the star: a number XOR
    itself is 0, so XOR-ing a whole list cancels every pair and leaves the lonely one.
  - >-
    The trigger is "every element appears twice except one," or "do this without extra
    memory."
prereqs:
  - Binary — a number as a row of 0/1 bits.
  - The operators AND &, OR |, XOR ^, and the shift <<.
  - The one fact that a value XOR itself is 0.
toolkit:
  - code: "a & b"
    does: AND — a 1 only where both bits are 1 (test or mask).
  - code: "a | b"
    does: OR — a 1 where either bit is 1 (turn bits on).
  - code: "a ^ b"
    does: XOR — a 1 where the bits differ; the pair-canceller.
  - code: "1 << k"
    does: a mask with a single 1 in position k.
  - code: "n & (1 << k)"
    does: test whether bit k is on.
  - code: "n ^= (1 << k)"
    does: flip bit k.
solve:
  lead: >-
    Bit solutions treat a number as a row of on-off switches and work them directly. The
    craft is knowing which operator flips, tests, or combines switches, with XOR as the
    quiet star because a value XORed with itself is zero.
  steps:
    - do: Picture the number in binary and decide which switches (bits) you care about.
      why: >-
        Everything downstream is about specific positions, so seeing the number as a row
        of switches rather than a quantity is what makes the operations obvious.
    - do: >-
        To test or change one bit, build a mask with a 1 in that position using a shift (1
        << k), then apply an operator.
      why: >-
        AND with the mask tests a switch, OR turns it on, XOR flips it; the shift is simply
        how you aim the mask at the position you mean.
    - do: >-
        Reach for XOR when things come in pairs, since a value XORed with itself is 0 and
        with 0 is unchanged.
      why: >-
        XOR-ing a whole list cancels every duplicated value to zero and leaves the lonely
        one, answering appears-twice-except-one in one pass with no extra memory.
    - do: Sanity-check on a small number by writing its bits out by hand.
      why: >-
        Bit tricks are easy to get subtly wrong and hard to read, and tracing a single byte
        is the fastest way to catch a flipped operator or an off-by-one in a shift.
  keep: >-
    Each operation changes only the bits your mask selects and leaves the rest untouched.
    Because that stays true, you can reason about one switch at a time even though the whole
    number changes at once.
code: |
  # Every number appears twice except one — XOR cancels the pairs
  def single_number(nums):
      result = 0
      for x in nums:
          result ^= x      # a ^ a == 0, so pairs vanish
      return result        # only the lonely number survives
ai:
  - Ask "why does XOR cancel pairs and leave the single number?"
  - Ask it to show a byte flipping step by step.
  - Do not let it hand you the bit trick before you have reasoned it out.
build:
  blurb: A tool that shows a number in binary and flips a chosen bit on or off.
  skills:
    - Bitwise ops
    - XOR
    - Shifts
  out: A CLI bit inspector.
video:
  label: "NeetCode: Single Number (XOR bit trick)"
  url: https://neetcode.io/solutions/single-number
practice:
  - label: Single Number
    url: https://leetcode.com/problems/single-number/
    star: true
  - label: Number of 1 Bits
    url: https://leetcode.com/problems/number-of-1-bits/
    star: true
  - label: Counting Bits
    url: https://leetcode.com/problems/counting-bits/
    star: true
  - label: Reverse Bits
    url: https://leetcode.com/problems/reverse-bits/
  - label: Missing Number
    url: https://leetcode.com/problems/missing-number/
    star: true
complexity:
  - op: Time
    val: O(1)
    note: per operation
  - op: Space
    val: O(1)
complexityNote: Over a list of n numbers it is O(n), one cheap op each.
---

---
order: 4
chapter: c1
title: Solve your first problem
do: In that session, solve one easy array problem in Python. Then celebrate, out loud.
why: The first rep is the hardest, and the one that starts everything.
links:
  - label: NeetCode 150
    url: https://neetcode.io/practice
problem: >-
  Your first problem is not really a coding problem. It is a proof to yourself
  that you are someone who does this. The goal today is not a clever solution or a
  fast one — it is a green checkmark and the feeling that follows it. Aim low on
  purpose; you are lighting a pilot light, not the whole furnace.
analogy: >-
  It is the first pancake. It does not have to be good — it just has to exist, so
  the pan is hot for every one after it. Everyone's first accepted solution is
  clumsy. That is the point. You are trading "I might be able to do this" for "I
  have done this," and you only get to make that trade once.
prereqs:
  - You can run a Python file (in the browser editor on the site is fine).
  - You can write a for loop and an if statement.
  - You know print() and return.
toolkit:
  - code: "for x in nums:"
    does: visit every item in the list, one at a time.
  - code: "if x > best:"
    does: compare the current item against your running answer.
  - code: "best = x"
    does: remember a new answer when you find a better one.
  - code: "return best"
    does: hand the final answer back out of the function.
walkthrough:
  - Read the problem twice. Say out loud, in plain words, what it is asking for.
  - Do not optimize. Write the most obvious slow solution you can think of first.
  - Run it on the given example. Watch it pass or fail, and read the output.
  - Fix until the checker turns green. That is a win, full stop.
  - Only now, glance at the discussion or video to see a cleaner way. Learning comes after the green check, not before.
code: |
  # About as easy as it gets — find the largest number in a list.
  def largest(nums):
      best = nums[0]          # assume the first is the biggest
      for x in nums:          # look at every number
          if x > best:        # found a bigger one?
              best = x        # remember it
      return best             # this is your answer
build: >-
  Try "Contains Duplicate" on NeetCode as your very first. Brute force is allowed.
  The only assignment today is to see a checkmark and then actually celebrate it.
reflect: "How did the first green checkmark feel? Write it down so you remember on a hard day."
---

---
order: 3
chapter: basics
title: Conditionals
gist: >-
  An if statement lets your program choose: do this when something is true,
  otherwise do that.
picture:
  - >-
    A fork in the road with a signpost. If it is raining, take the covered path;
    otherwise take the shortcut. The condition is the sign; the code picks a branch.
origin:
  - >-
    A program that only runs straight through cannot react. The moment you need
    different behaviour for different situations — logged in or not, number positive
    or negative — you need a way to branch. That is if.
purpose:
  - >-
    You use it to make decisions: run some code only when a condition holds, and
    optionally run other code when it does not.
click:
  - >-
    The condition is just a yes/no question that comes out True or False. Python
    runs the block under the first branch whose question is True, and skips the rest.
prereqs:
  - Variables — conditions usually compare them.
  - Comparisons like equals, less-than, greater-than.
toolkit:
  - code: "if age >= 18:"
    does: run the indented block only if the condition is True.
  - code: "elif age >= 13:"
    does: otherwise, try this next condition.
  - code: "else:"
    does: if none of the above were True, do this.
  - code: "=="
    does: equal? (two equals; a single = means assignment).
  - code: "and, or, not"
    does: combine or flip conditions.
  - code: "    (indentation)"
    does: the indented lines under a colon are the block that belongs to it.
code: |
  temp = 30
  if temp > 28:
      print("hot")          # runs only if temp > 28
  elif temp > 15:
      print("mild")         # otherwise, if temp > 15
  else:
      print("cold")         # if neither was true
build:
  blurb: >-
    Put a test score in a variable and print a grade: A for 90 or above, B for 80
    or above, otherwise C.
  skills:
    - if / elif / else
    - Comparisons
  out: A grade classifier that branches three ways.
---

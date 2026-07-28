---
order: 4
chapter: basics
title: Loops
gist: >-
  A loop repeats a block of code — for each item in a collection, or while a
  condition stays true. It is how you avoid copy-pasting the same line 100 times.
picture:
  - >-
    Dealing cards one at a time around a table until the deck is gone. The same
    action, applied again and again, until you are done.
origin:
  - >-
    Almost everything useful means doing something to many items: every user, every
    character, every row. Writing the code once and looping is the only sane way.
    Loops are where a program stops being a fixed script and starts handling any
    amount of data.
purpose:
  - >-
    You use a for loop to do something with each item in a list or range, and a
    while loop to keep going until a condition changes.
click:
  - >-
    for x in things runs the block once per item, handing you each one as x. while
    keeps re-running its block as long as the condition is True — so you must make
    sure the condition eventually becomes False, or it runs forever.
good:
  - Repeating work over a collection with no duplication.
  - The backbone of nearly every algorithm on this trail.
bad:
  - Off-by-one errors — starting or stopping one step too early or too late.
  - An infinite while loop, when the condition never flips to False.
prereqs:
  - Variables and Conditionals — a loop usually contains an if.
  - range() works on its own; lists (next up) give you things to loop over.
toolkit:
  - code: "for x in nums:"
    does: run the block once for each item, handed to you as x.
  - code: "for i in range(5):"
    does: count 0, 1, 2, 3, 4 — loop a fixed number of times.
  - code: "for i, x in enumerate(nums):"
    does: get the index and the item together.
  - code: "while count < 10:"
    does: keep looping while the condition holds.
  - code: "break"
    does: stop the loop early.
  - code: "continue"
    does: skip straight to the next iteration.
code: |
  # for: do something with each item
  for name in ["Ada", "Alan", "Grace"]:
      print("Hello", name)

  # while: keep going until a condition changes
  count = 3
  while count > 0:          # stops when count reaches 0
      print(count)
      count = count - 1     # <-- must move toward the stop, or it never ends
  print("go")
build:
  blurb: >-
    Print the numbers 1 to 10, then print only the even ones. Then loop over the
    letters of your name and print each on its own line.
  skills:
    - for loops
    - range
    - while
  out: Three tiny loops, working.
---

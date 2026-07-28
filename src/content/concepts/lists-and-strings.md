---
order: 8
chapter: basics
title: Lists & strings
gist: >-
  A list is an ordered collection you can index, loop, and change. A string is
  basically a list of characters — and they share most of the same moves.
picture:
  - >-
    A list is a numbered row of lockers. A string is that same row where each locker
    holds one letter of a word. Both are sequences you walk in order or reach into by
    position.
origin:
  - >-
    The moment you have more than one of something — a bunch of names, the letters in
    a word — you need a container that keeps them in order and lets you grab item
    number 3. That is a list. Strings are the same idea, specialised for text.
purpose:
  - >-
    You use lists to hold and process ordered collections, and string operations to
    slice, search, and reshape text.
click:
  - >-
    Both are numbered from 0 and share the same core moves: len() for the count, []
    to index, [a:b] to slice, and for to loop. Learn to work a list and you can
    already work a string.
good:
  - Ordered access, and looping over items in order.
  - Growing and shrinking a list as you go.
bad:
  - >-
    A string cannot be changed in place — it is immutable, so you build a new one.
    A list can be changed freely.
prereqs:
  - Loops — you will loop over both constantly.
  - Variables.
toolkit:
  - code: "nums = [3, 1, 2]"
    does: a list of items, in order.
  - code: "nums[0], nums[-1]"
    does: the first and the last item.
  - code: "nums.append(5)"
    does: add an item to the end.
  - code: "len(nums)"
    does: how many items there are.
  - code: "word[1:4]"
    does: a slice — characters 1, 2, 3 of a string.
  - code: 'text.split(",")'
    does: split a string into a list on a separator.
  - code: '", ".join(words)'
    does: glue a list of strings into one string.
code: |
  names = ["Ada", "Alan"]
  names.append("Grace")        # ["Ada", "Alan", "Grace"]
  for name in names:
      print(name, "has", len(name), "letters")

  word = "python"
  print(word[0])               # p
  print(word[-1])              # n
  print(word[0:3])             # pyt  (a slice)
build:
  blurb: >-
    Make a list of three foods, add a fourth, print how many there are, then print
    each one in uppercase. (Hint: food.upper())
  skills:
    - Lists
    - Strings
    - Indexing
    - Loops
  out: A list you build, grow, and print.
---

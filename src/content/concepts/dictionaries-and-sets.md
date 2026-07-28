---
order: 7
chapter: basics
title: Dictionaries & sets
gist: >-
  A dictionary stores things by a label (a key) instead of a position. A set is a
  bag of unique items, great for "have I seen this?"
picture:
  - >-
    A dictionary is a coat check: hand over a name (the key) and get back exactly
    what is stored under it (the value), instantly, no searching. A set is a guest
    list: each name appears once, and you can ask "is this person on it?" in a blink.
origin:
  - >-
    Lists are great when order and position matter, but often you want to look
    something up by a name, not a number — a phone number by a person, a count by a
    word. Dictionaries do that. Sets drop the values and just track membership, which
    makes "is this already here?" instant.
purpose:
  - >-
    You use a dict to map keys to values and fetch by key, and a set to store unique
    things and test membership fast.
click:
  - >-
    Both find things in roughly one step, however big they get, because they hash the
    key to jump straight to it. That instant lookup is exactly why the Hash Maps
    concept later is one of the most important on the whole trail.
good:
  - Instant lookup by key, and instant "is this in here?" with a set.
  - Counting and grouping things by a key.
bad:
  - >-
    No order you can rely on, and keys or set items must be hashable — numbers,
    strings, tuples, but not lists.
prereqs:
  - Variables and Loops.
  - Lists — a dict's values can be lists, and you will loop over both.
toolkit:
  - code: "ages = {}"
    does: an empty dictionary.
  - code: 'ages["Ada"] = 36'
    does: store 36 under the key "Ada".
  - code: 'ages["Ada"]'
    does: look up the value stored for a key.
  - code: '"Ada" in ages'
    does: is this key present? (fast).
  - code: 'ages.get("x", 0)'
    does: look up a key, or hand back 0 if it is missing — no crash.
  - code: "seen = set()"
    does: an empty set of unique items.
  - code: "seen.add(x)"
    does: put an item in the set (duplicates just collapse).
code: |
  ages = {"Ada": 36, "Alan": 41}
  ages["Grace"] = 44            # add a new key
  print(ages["Ada"])            # 36 — instant lookup by key
  print("Alan" in ages)         # True

  seen = set()
  for x in [1, 2, 2, 3, 1]:
      seen.add(x)               # duplicates collapse
  print(seen)                   # {1, 2, 3}
build:
  blurb: >-
    Build a dict of three friends to their favourite food, then loop over it printing
    "X likes Y". Then use a set to find the unique letters in your name.
  skills:
    - Dictionaries
    - Sets
    - Key lookup
  out: A dict you build and read, and a set of unique items.
---

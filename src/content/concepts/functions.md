---
order: 7
chapter: basics
title: Functions
gist: >-
  A function is a named, reusable chunk of code: give it inputs, it does a job and
  hands back a result. Write it once, use it anywhere.
picture:
  - >-
    A blender. You put fruit in (the inputs), press go (call it), and get a smoothie
    out (the return value). You do not rebuild the blender each time — you just use
    it.
origin:
  - >-
    As programs grow, you repeat the same steps and the code becomes an unreadable
    wall. Functions let you name a piece of work, hide its details behind that name,
    and reuse it — which is how code stays understandable at any size.
purpose:
  - >-
    You use functions to package a job you will do more than once, or just to give a
    messy chunk of logic a clear name.
click:
  - >-
    Parameters are the inputs the function names; return hands one result back to
    whoever called it. Everything inside is hidden — the caller only sees inputs go
    in and a result come out.
good:
  - Reuse, and readability from naming what each piece does.
  - Testing and fixing one small piece at a time.
bad:
  - >-
    A function that does five things at once is a smell — one function, one clear
    job.
prereqs:
  - Variables, Conditionals, and Loops — a function usually wraps some of these.
toolkit:
  - code: "def greet(name):"
    does: define a function called greet that takes one input.
  - code: "return total"
    does: hand a result back to the caller and stop.
  - code: 'greet("Ada")'
    does: call the function with an argument.
  - code: "result = add(2, 3)"
    does: capture what a function returns.
  - code: "def f(x, y=10):"
    does: a default value, used if the caller leaves y out.
solve:
  lead: A good function is easy to name, because it does one clear thing.
  steps:
    - do: Name it for what it does or returns — largest, is_valid, greet.
      why: If you cannot name it in a few words, it is probably doing too much and should be split.
    - do: List the inputs it needs as parameters.
      why: Everything it uses should come in through the door, not from surprise outside state.
    - do: Do the one job, then return a single clear result.
      why: One job and one return value make a function predictable and safe to reuse.
code: |
  def largest(nums):
      best = nums[0]        # start with the first item
      for x in nums:
          if x > best:
              best = x
      return best           # hand the answer back

  biggest = largest([4, 9, 2, 7])   # call it, capture the result
  print(biggest)                     # 9
build:
  blurb: >-
    Write greet(name) that returns "Hello, <name>!" and area(w, h) that returns
    width times height. Call each and print the results.
  skills:
    - def
    - return
    - parameters
  out: Two working functions you wrote and called.
---

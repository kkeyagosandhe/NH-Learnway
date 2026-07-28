---
order: 3
chapter: basics
title: Getting unstuck (without asking anyone)
gist: >-
  Being stuck is the normal state of coding, not failure. This is the calm,
  ordered checklist you run every time — by yourself.
picture:
  - >-
    A mechanic whose car will not start does not panic: they run a checklist —
    fuel, battery, spark. Getting unstuck is that checklist. Calm, in order, and it
    almost always finds the problem.
origin:
  - >-
    Every coder, at every level, is stuck most of the time. The thing that
    separates the people who make it from the people who quit is not talent — it is
    having a reliable way to get unstuck that does not depend on being rescued.
  - This lesson is that self-rescue. It is the most important habit on the trail.
purpose:
  - >-
    To turn "I am stuck and I want to give up" into "I know exactly what to try
    next" — every single time, on your own.
click:
  - >-
    There are two kinds of stuck, and they take different first moves: the code
    ERRORS and crashes (read the error), or it RUNS BUT DOES THE WRONG THING (print
    your variables and look).
prereqs:
  - Your first program — you can write a file, run it, and read the output.
toolkit:
  - code: "print(x)"
    does: see what a variable actually holds — the most useful debugging move there is.
  - code: 'print("here", x)'
    does: confirm a line actually runs, and with what value.
  - code: "type(x)"
    does: when something is weird, check it is the type you think it is.
  - code: "Traceback (most recent call last)"
    does: the red error block — read its LAST line first, not the top.
solve:
  lead: When you hit a wall, climb this ladder in order. Do not jump to the top rung.
  steps:
    - do: >-
        Read the error's LAST line first. It names what went wrong (like
        "IndexError: list index out of range") and the line number.
      why: >-
        Beginners stare at the scary top of the red block; the useful part is the
        bottom. It tells you the what and the where, which is most of the fix.
    - do: >-
        If it runs but gives a wrong answer, add print() lines and compare what you
        SEE against what you EXPECTED.
      why: >-
        The bug lives exactly where expectation and reality first diverge. print
        makes the invisible state visible so you can spot that moment.
    - do: Re-read the concept — its picture and its toolkit — slowly, out loud.
      why: >-
        Half of being stuck is a fuzzy idea, not a broken line. Re-grounding the
        concept often dissolves the problem before you touch the code.
    - do: Trace five lines by hand on paper, being the computer yourself.
      why: >-
        Slowing down to run it in your own head catches logic errors that reading
        straight past them never will.
    - do: >-
        Search the exact error text, or watch the topic's free NeetCode video, or
        read the LeetCode editorial and discussion.
      why: >-
        Someone has hit this exact wall before. Reading how a human explains it
        teaches you the idea; a handed-over answer teaches you nothing.
    - do: Still stuck after all of that? Step away for ten minutes, or sleep on it.
      why: >-
        The answer genuinely surfaces once you stop gripping. Walking away is a
        technique, not a surrender.
code: |
  # 1) It CRASHES — read the last line of the error:
  #      IndexError: list index out of range   (points at line 3)
  nums = [10, 20, 30]
  print(nums[3])        # there is no index 3 (only 0, 1, 2). fix -> nums[2]

  # 2) It RUNS but is WRONG — add prints and watch:
  total = 0
  for n in [1, 2, 3]:
      total = n                       # bug: should be total = total + n
      print("n:", n, "total:", total) # watching total exposes the mistake
build:
  blurb: >-
    Next time you hit an error, do not fix it straight away. First write down what
    the last line says and which line it points to. Do that for your next three
    errors and watch how fast reading them becomes second nature.
  skills:
    - Reading errors
    - print-debugging
    - Staying calm
  out: A calm, repeatable way to unstick yourself.
resources:
  - label: Python — Errors and tracebacks (official)
    url: https://docs.python.org/3/tutorial/errors.html
  - label: The official Python tutorial (free)
    url: https://docs.python.org/3/tutorial/
  - label: NeetCode — free topic videos
    url: https://neetcode.io/
---

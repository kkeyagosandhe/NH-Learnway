---
order: 20
chapter: c5
title: Finish CSES Introductory
do: Work through the Introductory Problems set. Each one has an automatic checker.
why: A gentle, topic-first way into competitive programming.
links:
  - label: CSES
    url: https://cses.fi/problemset
meta:
  interview: 2
  realWorld: 3
  time: a couple of weeks, unhurried
  unlocks: Contest readiness, fast implementation
  confidence: >-
    you can read a problem's constraints and know roughly how fast your solution
    has to be before you write a line.
problem: >-
  Interview practice teaches you patterns. Competitive programming teaches
  something adjacent and valuable: reading a fresh problem, reasoning about how
  fast it must run, and implementing cleanly under a little pressure. The CSES
  Introductory set is the kindest on-ramp — each problem isolates one idea and an
  automatic judge tells you instantly whether you nailed it.
analogy: >-
  Scales and études for a musician. Nobody buys a ticket to hear scales, but no
  one plays well without them. These problems are the drills that make the
  performance — a real contest — possible. You are not performing yet. You are
  building the fingers.
intuition: >-
  Each Introductory problem targets a single concept and grows gently harder. The
  instant feedback loop is the gift: submit, see green or red, adjust. One habit
  changes everything here — read the constraints first. "n up to 100,000" quietly
  tells you an O(n²) solution will be too slow and you need O(n log n) or better,
  before you have written anything.
prereqs:
  - Your DSA foundations from earlier chapters.
  - Reading input from standard input and printing answers.
  - Comfort estimating rough speed — how many operations your loop does.
toolkit:
  - code: "import sys"
    does: needed for fast input, which matters once inputs get large.
  - code: "input = sys.stdin.readline"
    does: swap in a much faster input() — a standard CP first line in Python.
  - code: "n = int(input())"
    does: read a single number (like the size of the input).
  - code: "arr = list(map(int, input().split()))"
    does: read a whole line of space-separated numbers into a list.
  - code: "print(ans)"
    does: write your answer to standard output — what the judge reads.
  - code: '"".join(map(str, arr))'
    does: turn a list of numbers into one printable line, fast.
walkthrough:
  - Read the constraints first. The size of n tells you the time budget and rules out slow approaches.
  - Read the input with the fast stdin lines above — plain input() can time out on big cases.
  - Solve the single idea the problem is testing; do not over-engineer.
  - Print exactly the format asked for, then submit to the automatic judge.
  - A "Time Limit Exceeded" is not a bug — it is the judge telling you the approach itself is too slow. Rethink the complexity, do not just tweak the code.
build: >-
  No side build — the set is the work. Aim for a few problems per week, in order,
  and keep a note of any where you had to peek. Those are your real syllabus.
interview: >-
  This is more about raw skill than direct interview questions, but it compounds:
  the speed and correctness you build here make interview coding feel slow and calm
  by comparison. Reasoning from constraints to required complexity is also exactly
  what a good interviewer wants to hear you do out loud.
practice:
  - label: CSES Introductory Problems
    url: https://cses.fi/problemset/list/
connects:
  - label: Arrays and Hashing
    slug: arrays-and-hashing
  - label: First AtCoder contest
    slug: first-atcoder-contest
check:
  q: >-
    A problem says n can be up to 200,000 and you have a 1-second limit. Is an
    O(n²) nested loop going to make it?
  a: >-
    No. 200,000² is 40 billion operations — far past what runs in a second.
    Reading the constraint tells you upfront you need O(n log n) or O(n), so you
    design for that instead of discovering it after a Time Limit Exceeded.
reflect: "What does reading the constraints first save you from?"
---

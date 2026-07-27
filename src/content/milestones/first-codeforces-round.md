---
order: 22
chapter: c5
title: First Codeforces round
do: Enter one Codeforces Div. 4 or Div. 3 round. Upsolve the rest afterward with the editorial.
why: Your first rated contest. Now you are on the board.
links:
  - label: Codeforces
    url: https://codeforces.com/contests
meta:
  interview: 2
  realWorld: 2
  time: about 2 hours, live
  unlocks: A rating that only goes up with reps
  confidence: >-
    a rating drop no longer stings, because you treat every round as reps and the
    editorial upsolve as the real workout.
problem: >-
  Codeforces is the big arena of competitive programming — huge, global, and
  rated, so a number gets attached to you. That number is exactly what scares
  people off, and it should not. Div. 4 and Div. 3 rounds exist for beginners, and
  the rating is just a starting line that climbs with practice. Getting on the
  board at all is the milestone.
analogy: >-
  Your first ranked match in any game. The placement number feels heavy, but it is
  only a starting point, and everyone's first one is low. What moves it is reps —
  and the players who improve are the ones who review the match afterward, not the
  ones who rage at the score.
intuition: >-
  Pick a Div. 4 (easiest) or Div. 3 round. Solve everything you can; leave the rest.
  Codeforces statements often hide a small twist, so read carefully. Then do the
  thing most beginners skip and that matters most: upsolve. After the round, take
  one or two problems you could not finish and solve them with the editorial open.
  That is where the rating actually comes from.
prereqs:
  - A couple of AtCoder contests, or equivalent practice, so the format is not brand new.
  - A reliable input/output setup you do not have to think about.
  - Willingness to read the editorial afterward without shame — it is the whole point.
toolkit:
  - code: "import sys"
    does: fast I/O again — Codeforces inputs can be large and plain input() may time out.
  - code: "data = sys.stdin.buffer.read().split()"
    does: read the entire input at once, the fastest common pattern in Python.
  - code: "t = int(input())"
    does: many CF problems start by reading the number of test cases.
  - code: "for _ in range(t):"
    does: loop once per test case — a near-universal Codeforces skeleton.
walkthrough:
  - Register for an upcoming Div. 4 or Div. 3 a little ahead of time.
  - Read problem A carefully — the twist is usually small but real — solve, test on samples, submit.
  - Work up through B and C as far as you comfortably get. Leave the hard ones; do not burn the clock.
  - After the round, pick one problem you missed and upsolve it with the editorial until you fully understand it.
  - Ignore the rating swing for your first several rounds. Reps first, number later.
build: >-
  The round plus the upsolve is the work. Keep a short log: problems solved live,
  problems upsolved, and the one idea each upsolve taught you.
interview: >-
  A visible Codeforces profile signals grit and problem-solving to some employers,
  but the deeper value is the same as AtCoder — timed reasoning becomes ordinary,
  so interviews feel calm.
connects:
  - label: First AtCoder contest
    slug: first-atcoder-contest
  - label: Start the CP-31 sheet
    slug: start-cp-31-sheet
check:
  q: >-
    You finished a round having solved only two of six problems and your rating
    dipped. What is the single most useful thing to do next?
  a: >-
    Upsolve. Take one or two problems you could not finish and work them through
    with the editorial until they make sense. The rating dip is noise; the upsolve
    is the actual training that moves you forward.
reflect: "Why is upsolving with the editorial more valuable than obsessing over the rating?"
---

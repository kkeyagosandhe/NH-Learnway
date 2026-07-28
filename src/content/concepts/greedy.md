---
order: 16
chapter: techniques
title: Greedy
cues:
  - best right now
  - fewest or most
  - maximize or minimize
  - scheduling
  - one pass optimum
why: >-
  Tests whether you can tell when the obvious local choice is provably safe.
picture:
  - >-
    Filling a bag by always grabbing the single most valuable item you can right now,
    never reconsidering. Or making change by always taking the biggest coin that fits.
origin:
  - >-
    Some problems do not need you to explore every option; the locally best choice at
    each step happens to build the globally best answer.
  - When that is true, greedy is far simpler and faster than DP.
purpose:
  - >-
    You use it for optimization where a simple "best right now" rule provably wins:
    scheduling, interval picking, some coin and jump problems.
good:
  - Simple and fast, usually one pass.
  - No big tables.
bad:
  - >-
    Only correct when the problem has the right structure; a wrong greedy choice
    silently gives a wrong answer.
  - Proving it actually works is the hard part.
click:
  - "Greedy is DP's risky cousin: DP explores all choices, greedy bets the obvious choice is right."
  - >-
    The danger is it looks correct when it is not, so the real question is "does taking
    the best now ever hurt me later?" If yes, use DP.
prereqs:
  - Sorting, usually the first move — arr.sort().
  - A single pass loop.
  - Enough proof-thinking to try a small counterexample.
toolkit:
  - code: "arr.sort()"
    does: order the items so best-right-now is simply the next one.
  - code: "arr.sort(key=lambda x: x[1])"
    does: sort by a chosen field, like finish time.
  - code: "for x in arr:"
    does: one sweep, taking or skipping each item.
  - code: "if x fits:"
    does: apply the greedy rule to the current item.
  - code: "best = max(best, running)"
    does: keep the running optimum as you sweep.
solve:
  lead: >-
    A greedy solution bets that grabbing the best-looking option at each step, and
    never reconsidering, builds the best overall answer. It is simple and fast, but
    only correct when that bet is provably safe, so the real work is the proof.
  steps:
    - do: >-
        Name the best-right-now rule, the single local choice you always make: the
        biggest coin, the earliest-finishing meeting, the most value per unit weight.
      why: >-
        Greedy has no search and no table; this one rule is the whole algorithm, so
        everything rides on choosing the right criterion.
    - do: Usually sort the items so that best-right-now is simply the next one in line.
      why: >-
        Most greedy algorithms are a sort followed by one sweep; sorting places the
        locally best choice right in front of you.
    - do: Sweep once, taking each item the rule allows and skipping the rest.
      why: >-
        Because you never revisit a decision, a single pass suffices, and that is what
        makes greedy far cheaper than a DP that weighs every combination.
    - do: >-
        Before trusting it, ask the safety question: can taking the best now ever force
        a worse result later? Try a small tricky case.
      why: >-
        This is the trap: greedy can look right and be quietly wrong, fewest-coins fails
        on coins like 1, 3, 4 making 6. If you cannot argue it, use DP instead.
  keep: >-
    Each step's choice is locally best and, when greedy is valid, never has to be taken
    back. The moment you find a case where an early best choice blocks a better overall
    answer, that invariant breaks and greedy is the wrong tool.
code: |
  # Fewest coins, greedy — correct only for "canonical" coin systems
  def fewest_coins(coins, amount):
      coins.sort(reverse=True)      # biggest first
      count = 0
      for c in coins:               # one sweep
          take = amount // c        # grab as many of the biggest as fit
          count += take
          amount -= take * c
      return count if amount == 0 else -1
  # fast, but wrong on coins like [1, 3, 4] making 6 — then use DP
ai:
  - Ask "why is the greedy choice safe here, and when would it fail?" — the key question.
  - Ask it for a counter-example to a greedy idea.
  - Do not let it just assert greedy works.
build:
  blurb: A coin-change maker that returns the fewest coins for an amount using a greedy rule.
  skills:
    - Greedy
    - Optimization
  out: A CLI change maker.
practice:
  - label: Maximum Subarray
    url: https://leetcode.com/problems/maximum-subarray/
  - label: Jump Game
    url: https://leetcode.com/problems/jump-game/
complexity:
  - op: Time
    val: O(n log n)
    note: usually the sort
  - op: Space
    val: O(1)
complexityNote: Without a sort it is often a single O(n) pass.
---

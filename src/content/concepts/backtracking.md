---
order: 14
chapter: techniques
title: Backtracking
cues:
  - all combinations
  - all permutations
  - all subsets
  - generate every
  - valid arrangement
  - puzzle
why: >-
  Tests whether you can search a space of choices and cleanly undo the wrong ones.
picture:
  - >-
    Walking a hedge maze. You pick a path, and when it dead-ends you walk back to the
    last fork and try a different branch, undoing each wrong turn.
origin:
  - >-
    Some problems ask for all valid combinations, or any one that works, and there is
    no formula; you just have to try.
  - >-
    Backtracking tries an option, recurses, and if it fails, undoes the choice and
    tries the next. Brute force with a rewind.
purpose:
  - >-
    You use it for "generate all subsets, permutations, or combinations," for puzzles
    like sudoku and N-queens, and for "find a valid arrangement."
good:
  - Explores the full space of possibilities correctly.
  - Prunes dead branches early to save time.
bad:
  - Can be exponential and slow if the space is huge and you cannot prune much.
click:
  - "It is recursion plus 'undo the last choice.' The shape is always: choose, explore, un-choose."
  - >-
    It leans on the call stack, same as recursion and DFS. When it repeats work,
    dynamic programming is the upgrade.
prereqs:
  - Recursion — backtracking is recursion plus an undo step.
  - The idea of a partial answer you build up and tear down.
  - A list with .append() and .pop().
toolkit:
  - code: "path = []"
    does: the partial answer you build as you go.
  - code: "for choice in options:"
    does: try each available option in turn.
  - code: "path.append(choice)"
    does: make a choice — commit to it.
  - code: "backtrack(...)"
    does: recurse to decide the next step.
  - code: "path.pop()"
    does: un-choose — undo before trying the next option.
  - code: "if len(path) == n:"
    does: a complete answer — record a copy of it.
solve:
  lead: >-
    Backtracking searches every possibility without getting lost by always doing
    three things in the same order: make one choice, explore everything that follows
    from it, then undo that choice before trying the next, exactly like retracing
    your steps out of a dead-end.
  steps:
    - do: At each step, list the choices available right now and loop over them one at a time.
      why: >-
        Each fork in the maze is a set of options, and taking them one by one, fully,
        is what guarantees you eventually see every arrangement.
    - do: Make a choice, record it in your partial answer, then recurse to decide the next step.
      why: >-
        Committing to one option and diving deeper is the explore; the recursion
        carries the half-built answer forward so each level makes only one decision.
    - do: >-
        When the recursion returns, undo that choice, remove it from the partial
        answer, before trying the next option.
      why: >-
        This un-choose is the move people forget, and it is the whole trick: it
        restores the state so the next branch starts clean.
    - do: Before exploring a branch, check whether it can still possibly succeed, and abandon it early if not.
      why: >-
        The search is exponential, so pruning doomed branches is often what makes it
        finish in a workable time at all.
  keep: >-
    The partial answer always reflects exactly the choices currently made, no more and
    no less. Because each choice is undone the instant its branch is done, every path
    is tried in a clean state and none contaminates the next.
code: |
  # Every permutation — choose, explore, un-choose
  def permutations(nums):
      res, path, used = [], [], [False] * len(nums)
      def backtrack():
          if len(path) == len(nums):
              res.append(path[:])              # a complete arrangement
              return
          for i in range(len(nums)):
              if used[i]:
                  continue
              used[i] = True; path.append(nums[i])   # choose
              backtrack()                              # explore
              path.pop(); used[i] = False              # un-choose
      backtrack()
      return res
ai:
  - Ask "what am I choosing, and what am I undoing, at each step?"
  - Ask it to name the pruning that would speed this up.
  - Do not let it write the recursion.
build:
  blurb: A generator that prints every way to arrange a small set of letters.
  skills:
    - Backtracking
    - Recursion
    - Choose and undo
  out: A CLI permutation generator.
practice:
  - label: Subsets
    url: https://leetcode.com/problems/subsets/
  - label: Combination Sum
    url: https://leetcode.com/problems/combination-sum/
complexity:
  - op: Time
    val: O(b^d)
    note: branches ^ depth, worst case
  - op: Space
    val: O(depth)
    note: the recursion stack
complexityNote: Exponential in the worst case. Good pruning is what makes it usable.
---

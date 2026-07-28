---
order: 5
chapter: foundations
title: Stack
cues:
  - matching pairs
  - nesting
  - most recent
  - undo
  - balanced
  - valid parentheses
why: >-
  Tests whether you see when the most recent thing has to be handled first.
picture:
  - >-
    A stack of plates. You only add to the top and take from the top. The last one
    on is the first one off.
origin:
  - >-
    It mirrors how nested things resolve: the most recent thing opened is the first
    that must close.
  - That "last in, first out" order shows up anywhere there is nesting or undo.
purpose:
  - >-
    You use it whenever the most recent thing matters first: undo, matching
    brackets, the back button, or turning recursion into a loop.
good:
  - Instant add and remove from the top.
  - Dead simple to reason about.
bad:
  - You can only reach the top.
  - No peeking into the middle or by position.
click:
  - The trigger is "matching pairs," "most recent," "nesting," or "undo."
  - >-
    Function calls run on a stack (the call stack), which is why recursion and
    stacks are two views of the same idea.
prereqs:
  - A Python list, with .append() and .pop().
  - Arrays — a stack is a list you only touch at one end.
  - Hash Maps, for matching problems that pair a stack with a small lookup.
toolkit:
  - code: "stack = []"
    does: a plain list is a perfectly good stack in Python.
  - code: "stack.append(x)"
    does: push — put x on top.
  - code: "stack.pop()"
    does: pop — remove and return the top item.
  - code: "stack[-1]"
    does: peek — look at the top without removing it.
  - code: "if not stack:"
    does: check whether the stack is empty.
  - code: "pairs = {')': '('}"
    does: a lookup so each closer knows which opener it expects.
solve:
  lead: >-
    A stack solution carries your unfinished business with you: you pile up the
    things still waiting to be resolved, and the moment one can be closed off, it
    is always the one sitting on top.
  steps:
    - do: >-
        Walk the input, and each time you meet something that opens or must wait (a
        bracket, a value with unfinished business), push it on top.
      why: >-
        The plate you set down last is the one you reach for first. Pushing records
        that this thing is still open, in the exact reverse order you will close it.
    - do: >-
        When you meet something that closes or resolves, look only at the top and
        check it against what just arrived.
      why: >-
        Nesting guarantees the most recent open is the one that must close now, so
        you never need to look deeper than the top.
    - do: >-
        If the top matches, pop it off; if it does not, you have found the flaw, a
        mismatch or invalid nesting.
      why: >-
        Popping says this pair is settled. A mismatch at the top means the structure
        breaks right here, and the stack is what let you notice instantly.
    - do: >-
        At the end, an empty stack means everything opened was closed; leftovers
        mean something never resolved.
      why: >-
        The stack is your ledger of unfinished business, so whatever remains is
        precisely what was left dangling.
  keep: >-
    The top of the stack is always the most recent thing still waiting to be
    resolved. Because that holds at every step, a single glance at the top is enough
    to make the next decision, and you never rummage through the middle.
code: |
  # Valid parentheses — the canonical stack problem
  def is_valid(s):
      stack = []
      pairs = {')': '(', ']': '[', '}': '{'}
      for ch in s:
          if ch in pairs:                     # a closing bracket
              if not stack or stack.pop() != pairs[ch]:
                  return False                # nothing to match, or mismatch
          else:
              stack.append(ch)                # an opener -> push
      return not stack                        # balanced iff nothing left over
ai:
  - Ask "why is a stack the right shape for matching brackets?"
  - Ask for one real system that uses a stack and why.
  - Do not let it write the push and pop logic.
build:
  blurb: An undo and redo for a text buffer using two stacks.
  skills:
    - Stack
    - LIFO logic
  out: A CLI editor with undo and redo.
practice:
  - label: Valid Parentheses
    url: https://leetcode.com/problems/valid-parentheses/
  - label: Min Stack
    url: https://leetcode.com/problems/min-stack/
complexity:
  - op: Access
    val: O(n)
    note: top only is O(1)
  - op: Search
    val: O(n)
  - op: Insert
    val: O(1)
    note: push, on top
  - op: Delete
    val: O(1)
    note: pop, from top
  - op: Space
    val: O(n)
---

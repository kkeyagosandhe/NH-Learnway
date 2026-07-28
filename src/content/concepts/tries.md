---
order: 11
chapter: structures
title: Tries
cues:
  - prefix
  - starts with
  - autocomplete
  - spell-check
  - dictionary of words
why: >-
  Tests whether you will spend memory to make prefix questions cheap.
picture:
  - >-
    A tree of letters. Every path from the top spells a word. Typing "ca" walks down
    the c-then-a branch, and everything below it is a possible completion.
origin:
  - "Built for one job: searching by prefix fast."
  - >-
    A hash map can tell you if a whole word exists, but not "all words starting with
    ca." A trie stores shared prefixes once, so prefix questions are cheap.
purpose:
  - You use it for autocomplete, spell-check, and any "words starting with..." feature.
good:
  - >-
    Fast prefix search and word lookup, proportional to the word's length, not to
    how many words you store.
  - Shares common prefixes to save space.
bad:
  - Uses more memory than a plain set for small dictionaries.
  - More code to build.
click:
  - It is a specialized tree where each edge is a character.
  - >-
    The trigger is literally the word "prefix." This is the concept behind the
    autocomplete you use every day.
prereqs:
  - Trees — a trie is a tree with a letter on each edge.
  - Hash Maps — each node stores its children in a dict.
  - Writing a class, and a recursive helper to collect words.
toolkit:
  - code: "self.children = {}"
    does: a node's map from a letter to the child node for that letter.
  - code: "self.is_end = False"
    does: a flag marking that a complete word ends at this node.
  - code: "if ch not in node.children:"
    does: no branch for this letter yet — we will create one.
  - code: "node.children[ch] = TrieNode()"
    does: grow a new branch for a letter.
  - code: "node = node.children[ch]"
    does: step one letter deeper along the path.
  - code: "node.is_end = True"
    does: after the last letter, mark the word complete.
solve:
  lead: >-
    A trie solution spends memory to make prefixes cheap: you store words by walking
    them letter by letter from a shared root, so common beginnings are kept once and
    any prefix question becomes a simple walk down that path.
  steps:
    - do: >-
        Model each node as a small map from a single character to a child, plus a
        flag for "a word ends here."
      why: >-
        The letters live on the edges, not in the nodes, and the end-of-word flag
        distinguishes "car" the word from "car" the mere prefix of "card."
    - do: >-
        To insert a word, walk it character by character, creating a child wherever
        the path does not yet exist, and set the end flag on the final node.
      why: >-
        Reusing existing paths is the whole space saving: "car" and "card" share
        their first three steps, so you only ever add what is genuinely new.
    - do: >-
        To look up a word or prefix, walk the same path; if any character has no
        child, it is simply not there.
      why: >-
        The walk costs only the length of the word, never the size of the dictionary,
        and falling off the path early is an instant no.
    - do: >-
        For autocomplete, walk to the end of the prefix, then gather every word in
        the subtree beneath it.
      why: >-
        Everything below that point shares the prefix by construction, so the branch
        you land on is exactly the set of completions.
  keep: >-
    Every path from the root spells the characters entered so far, and only nodes
    flagged as word-ends are real words. Because that stays true, prefix questions
    never touch anything outside the matching branch.
code: |
  # A trie that supports insert and prefix search
  class TrieNode:
      def __init__(self):
          self.children = {}      # letter -> TrieNode
          self.is_end = False     # a word ends here?

  class Trie:
      def __init__(self):
          self.root = TrieNode()

      def insert(self, word):
          node = self.root
          for ch in word:
              if ch not in node.children:
                  node.children[ch] = TrieNode()
              node = node.children[ch]
          node.is_end = True

      def starts_with(self, prefix):
          node = self.root
          for ch in prefix:
              if ch not in node.children:
                  return False    # dead end -> no matches
              node = node.children[ch]
          return True
ai:
  - Ask "why is a trie better than a hash map for prefix search?"
  - Ask it to sketch the node structure.
  - Do not let it write the insert and search.
build:
  blurb: "An autocomplete: type a few letters, get all matching words back."
  skills:
    - Trie
    - Prefix search
  out: A CLI autocomplete.
video:
  label: "NeetCode: Implement Trie (Prefix Tree) (free video + walkthrough)"
  url: https://neetcode.io/solutions/implement-trie-prefix-tree
practice:
  - label: Implement Trie (Prefix Tree)
    url: https://leetcode.com/problems/implement-trie-prefix-tree/
    star: true
  - label: Design Add and Search Words Data Structure
    url: https://leetcode.com/problems/design-add-and-search-words-data-structure/
    star: true
  - label: Word Search II
    url: https://leetcode.com/problems/word-search-ii/
    star: true
  - label: Replace Words
    url: https://leetcode.com/problems/replace-words/
  - label: Longest Word in Dictionary
    url: https://leetcode.com/problems/longest-word-in-dictionary/
complexity:
  - op: Access
    val: O(L)
    note: L = key length
  - op: Search
    val: O(L)
  - op: Insert
    val: O(L)
  - op: Delete
    val: O(L)
  - op: Space
    val: O(N × L)
    note: less with shared prefixes
complexityNote: Cost tracks the length of the word (L), not how many words you store.
---

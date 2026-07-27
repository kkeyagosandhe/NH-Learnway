---
order: 16
chapter: c4
title: Build autocomplete (Trie)
do: Build a search box that suggests words as you type. It forces a trie — a tree of letters.
why: Your first I-wrote-this-myself win.
links:
  - label: build-your-own-x
    url: https://github.com/codecrafters-io/build-your-own-x
meta:
  interview: 3
  realWorld: 5
  time: a weekend
  unlocks: Prefix search, spell-check, IP routing
  confidence: >-
    you can explain why a trie finds all "geo..." words in the time it takes to
    read "geo", no matter how many millions of words you stored.
problem: >-
  You are building a search box that suggests words the instant someone types
  "geo" — geography, george, geometry. Checking that prefix against a dictionary
  of a million words by scanning them all, on every keystroke, would crawl. How do
  you find every word starting with a prefix, in the time it takes to read the
  prefix itself?
analogy: >-
  A tree of letters. The root branches into 26 first-letters; each of those
  branches into possible second letters, and so on. Words that share a start share
  a branch — "george" and "geometry" walk the same g-e-o path before splitting.
  To autocomplete "geo", you walk three steps down and then everything hanging
  below you is an answer.
intuition: >-
  A trie (say "try", from re-trie-val) is a tree where each edge is a letter and
  each path from the root spells a prefix. Each node keeps a small map of its child
  letters and a flag marking whether a complete word ends there. Inserting or
  looking up a word costs only as many steps as the word is long — completely
  independent of how many words you have stored. Shared prefixes cost nothing
  extra, because they share nodes.
real:
  - Autocomplete in search bars, IDEs, and phone keyboards.
  - Spell-checkers, which walk the trie to find near-matches.
  - Routers do longest-prefix-matching on IP addresses with a trie.
  - Old T9 predictive texting was a trie under the hood.
prereqs:
  - Trees — a trie is a tree with a letter on each edge.
  - Arrays and Hashing — each node stores its children in a dict.
  - Writing a class, and a recursive helper for collecting words.
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
    does: after inserting the last letter, mark the word complete.
walkthrough:
  - To insert a word, start at the root and walk letter by letter, creating a child node whenever the branch does not exist yet.
  - After the final letter, set is_end = True so you know a real word ends there.
  - To check a prefix, walk the same way; if you ever hit a missing letter, no words match and you can stop.
  - To suggest completions, walk to the end of the prefix, then depth-first collect every word hanging below that node.
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
build: >-
  This milestone IS the build: wire the trie above to a text input so that as the
  user types, you walk to the prefix node and list the words below it. Seed it with
  a few thousand words from any word list. Watching real suggestions appear as you
  type is the payoff.
interview: >-
  Tries are the answer whenever a problem is about prefixes or dictionaries of
  strings — "words starting with", "add and search word", autocomplete. The pitch
  in an interview: lookups cost O(word length), not O(number of words), which is
  why search bars feel instant over enormous vocabularies.
practice:
  - label: Implement Trie (Prefix Tree)
    url: https://leetcode.com/problems/implement-trie-prefix-tree/
  - label: Design Add and Search Words Data Structure
    url: https://leetcode.com/problems/design-add-and-search-words-data-structure/
  - label: Word Search II
    url: https://leetcode.com/problems/word-search-ii/
connects:
  - label: Trees
    slug: trees
  - label: Arrays and Hashing
    slug: arrays-and-hashing
  - label: Write your first pattern note
    slug: write-your-first-pattern-note
check:
  q: >-
    Why does a trie suggest completions for "geo" just as fast whether your
    dictionary holds a thousand words or ten million?
  a: >-
    Because you only walk the three letters of the prefix to reach the "geo" node,
    then read what hangs below it. The cost depends on the prefix length and the
    number of matches, never on the total size of the dictionary.
reflect: "In two sentences: what is a trie, and when would you reach for one again?"
---

---
order: 13
chapter: structures
title: Graphs
cues:
  - connections
  - network
  - shortest path
  - are these connected
  - dependencies
  - grid or maze
why: >-
  Tests whether you can model a messy relationship as nodes and edges, then explore
  it without looping forever.
picture:
  - >-
    A map of cities joined by roads, or a social network of people joined by
    friendships. Dots (nodes) connected by lines (edges).
origin:
  - >-
    Trees can only branch downward, with no loops. The real world has loops and
    many-to-many links: friends of friends, flights between cities.
  - "A graph is the general structure: any node can connect to any other."
purpose:
  - >-
    You use graphs for networks, maps, dependencies, and anything about connections:
    shortest path, "are these connected?", ordering tasks with prerequisites.
good:
  - Models almost any relationship.
  - Comes with rich, well-known algorithms (BFS, DFS, shortest path).
bad:
  - Can be heavy in memory and compute.
  - Easy to loop forever if you do not track what you have visited.
click:
  - "A graph is a tree with the training wheels off: loops allowed, multiple parents."
  - >-
    BFS explores in rings using a queue; DFS dives deep using recursion or a stack.
    The one rule that saves you is a visited set. Grids and mazes are secretly graphs.
prereqs:
  - Trees — a graph is a tree that is allowed to have loops.
  - Queue (for BFS) and Recursion or Stack (for DFS).
  - Hash Maps — the visited set and the adjacency map.
toolkit:
  - code: "from collections import deque, defaultdict"
    does: a fast queue for BFS, and an easy adjacency list.
  - code: "graph = defaultdict(list)"
    does: map each node to the list of its neighbors.
  - code: "q = deque([start])"
    does: the BFS frontier, seeded with the start node.
  - code: "visited = {start}"
    does: the set that stops you re-exploring and looping forever.
  - code: "node = q.popleft()"
    does: take the next node from the front (breadth-first order).
  - code: "if nb not in visited: visited.add(nb); q.append(nb)"
    does: discover a new neighbor — mark it seen and queue it.
solve:
  lead: >-
    A graph solution is two decisions wrapped in one safety rule: model the mess as
    nodes and edges, pick how you explore (wide in rings, or deep down paths), and
    never revisit a node you have already seen.
  steps:
    - do: >-
        Turn the problem into nodes and edges, usually an adjacency list; a grid
        cell's neighbors are the cells up, down, left, and right.
      why: >-
        Almost anything about connections is a graph in disguise, and naming the
        nodes and edges unlocks the standard toolbox.
    - do: >-
        Choose BFS with a queue for shortest paths or level-by-level spread; choose
        DFS with recursion or a stack to reach everything or explore whole paths.
      why: >-
        BFS expands in even rings, so first arrival is the fewest steps; DFS commits
        down a path to its end, which suits is-it-connected and find-any-path.
    - do: Keep a visited set, and mark a node the first time you meet it.
      why: >-
        This is the one rule that saves you: graphs contain loops, so without visited
        you circle forever, and marking on first contact handles each node once.
    - do: >-
        Only follow an edge to a neighbor you have not visited, adding it to the queue
        or recursing into it.
      why: >-
        Checking visited before you move turns a possibly infinite walk into an
        O(V + E) sweep that touches each node and edge a constant number of times.
  keep: >-
    Every node is either unseen or fully accounted for, never in between and never
    handled twice. Because the visited set enforces that, the exploration always
    terminates, and for BFS first-arrival is always shortest.
code: |
  # Shortest path out of a grid maze, with BFS
  from collections import deque

  def shortest(maze, start, exit):
      q = deque([(start, 0)])          # (cell, distance so far)
      visited = {start}
      while q:
          (r, c), dist = q.popleft()
          if (r, c) == exit:
              return dist              # first time we reach it = shortest
          for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
              nr, nc = r + dr, c + dc
              if (nr, nc) not in visited and maze[nr][nc] == 0:
                  visited.add((nr, nc))
                  q.append(((nr, nc), dist + 1))
      return -1                        # no path
ai:
  - Ask "why do I need a visited set here, and what happens without it?"
  - Ask for the difference between BFS and DFS in plain words.
  - Do not let it write the traversal.
build:
  blurb: A maze solver that finds a path from start to exit using BFS.
  skills:
    - Graphs
    - BFS
    - Visited set
  out: A CLI maze solver.
practice:
  - label: Number of Islands
    url: https://leetcode.com/problems/number-of-islands/
  - label: Clone Graph
    url: https://leetcode.com/problems/clone-graph/
complexity:
  - op: Add vertex
    val: O(1)
  - op: Add edge
    val: O(1)
  - op: Traverse
    val: O(V + E)
    note: BFS or DFS
  - op: Space
    val: O(V + E)
complexityNote: Adjacency list. A matrix uses O(V^2) space but gives O(1) edge lookup.
---

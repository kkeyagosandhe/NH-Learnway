---
order: 25
chapter: c6
title: Build a graph project
do: Build a maze solver using BFS or DFS. Watch it flood outward to find the exit.
why: Graphs stop being scary once you have walked one yourself.
links:
  - label: build-your-own-x
    url: https://github.com/codecrafters-io/build-your-own-x
meta:
  interview: 5
  realWorld: 5
  time: a weekend
  unlocks: Maps, networks, dependency graphs
  confidence: >-
    you can look at a grid, a map, or a network of relationships and see the same
    thing — nodes and edges — and pick BFS or DFS on purpose.
problem: >-
  You have a maze and you want the shortest way out. More generally: roads between
  cities, friendships between people, tasks that depend on other tasks — all of it
  is dots connected by lines. How do you explore that web without getting lost, and
  find the shortest route through it?
analogy: >-
  Pour water in at the maze entrance. It spreads outward evenly, filling every cell
  it can reach one ring at a time. The very first drop to touch the exit must have
  arrived by the shortest possible path, because the water expands the same speed in
  every direction. That flood is breadth-first search, exactly.
intuition: >-
  A graph is nodes plus edges. A tree is just a graph that happens to have no cycles,
  which is why this feels familiar — with one crucial addition. Because a graph can
  loop back on itself, you must remember where you have been with a visited set, or
  you will circle forever. Breadth-first search uses a queue and explores in rings,
  so it finds the shortest path in an unweighted maze. Depth-first search uses a
  stack (or recursion) and plunges down one path before backtracking.
real:
  - GPS and maps run shortest-path graph algorithms over the road network.
  - "Social networks compute degrees of separation — the friend graph, breadth-first."
  - Package managers and build tools resolve dependency graphs in order.
  - Web crawlers walk the graph of links; games use graph search for pathfinding.
prereqs:
  - Trees — graph traversal is tree traversal plus a visited set.
  - Stack and recursion (for DFS) and a queue (for BFS).
  - Arrays and Hashing — the visited set and the adjacency map.
toolkit:
  - code: "from collections import deque, defaultdict"
    does: a fast queue for BFS, and an easy way to build an adjacency list.
  - code: "graph = defaultdict(list)"
    does: map each node to the list of its neighbours — the adjacency list.
  - code: "q = deque([start])"
    does: the BFS frontier, seeded with the starting node.
  - code: "visited = {start}"
    does: the set that stops you from re-exploring nodes and looping forever.
  - code: "node = q.popleft()"
    does: take the next node from the front of the queue (breadth-first order).
  - code: "if nbr not in visited: visited.add(nbr); q.append(nbr)"
    does: discover a new neighbour — mark it seen and queue it to explore.
walkthrough:
  - Turn the maze into a graph — each open cell is a node, each legal step to an adjacent cell is an edge.
  - Start BFS from the entrance with a queue holding the start and a visited set containing it.
  - Repeatedly pop a cell, and for each unvisited neighbour, mark it visited and add it to the queue (record where you came from, to rebuild the path).
  - The moment you pop the exit, you are done — in an unweighted maze, BFS reached it by the shortest route.
  - Follow your "came from" links backward from the exit to reconstruct the actual path.
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
build: >-
  This milestone IS the build: a maze solver you can watch. Draw the grid, run BFS,
  and light up cells in the order they are visited so you literally see the flood
  spread and reach the exit. Swap in DFS and watch how differently it explores —
  that contrast teaches more than any explanation.
interview: >-
  Graphs are among the highest-value interview topics because so many problems are
  secretly graph problems — islands in a grid, course scheduling, word ladders. The
  reusable insight to state out loud: BFS for shortest paths in unweighted graphs,
  DFS for "can I reach / explore everything", and a heap-based Dijkstra when edges
  have weights.
practice:
  - label: Number of Islands
    url: https://leetcode.com/problems/number-of-islands/
  - label: Clone Graph
    url: https://leetcode.com/problems/clone-graph/
  - label: Rotting Oranges
    url: https://leetcode.com/problems/rotting-oranges/
  - label: Course Schedule
    url: https://leetcode.com/problems/course-schedule/
  - label: Pacific Atlantic Water Flow
    url: https://leetcode.com/problems/pacific-atlantic-water-flow/
connects:
  - label: Trees
    slug: trees
  - label: Heap / Priority Queue
    slug: heap-priority-queue
  - label: Finish NeetCode 150
    slug: finish-neetcode-150
check:
  q: >-
    You need the shortest number of steps out of an unweighted maze. BFS or DFS,
    and why?
  a: >-
    BFS. It explores in expanding rings, so the first time it reaches the exit it
    has used the fewest possible steps. DFS plunges down one path first and can
    reach the exit by a long route, so it does not give you shortest by default.
reflect: "Why does a graph need a visited set when a tree usually does not?"
---

---
order: 18
chapter: c4
title: "CodeCrafters: Redis, stage 1"
do: >-
  Start the free Build Your Own Redis challenge and pass the first stage. The
  tests tell you what to do, no AI needed.
why: Learning to work against a failing test instead of a chatbot.
links:
  - label: CodeCrafters
    url: https://codecrafters.io
meta:
  interview: 3
  realWorld: 5
  time: an evening or two
  unlocks: Sockets, protocols, test-driven iteration
  confidence: >-
    you can read a failing test, figure out what it wants from the docs, make it
    pass, and move to the next one — without asking anyone what to type.
problem: >-
  Up to now something has probably handed you the next step — a tutorial, a video,
  a chatbot. Real engineering rarely does. You get a failing test and a
  specification, and you have to close the gap yourself. This milestone trains that
  exact muscle: stage 1 of Build Your Own Redis asks your program to answer a PING
  over the network with PONG. Small on purpose. The point is the loop, not the code.
analogy: >-
  It is cooking from a recipe that only states the outcome — "the sauce should
  coat the back of a spoon" — and leaves the how to you. The failing test is that
  success criterion. Your job is to experiment, read, and adjust until the sauce
  coats the spoon. Nobody narrates the stirring.
intuition: >-
  This is a workflow lesson wearing a networking costume. A server opens a port and
  waits. A client connects and sends bytes. Your server reads those bytes and
  writes bytes back. Stage 1 is the smallest possible version of that: bind the
  port Redis uses, accept a connection, and reply with the tiny +PONG message the
  test is watching for. The skill you are building is read-failure → read-docs →
  make-it-pass → repeat.
real:
  - Every backend service is, at bottom, this loop — accept a connection, read a request, write a response.
  - Redis, web servers, and databases all speak simple text or binary protocols over sockets.
  - Test-driven iteration against a spec is how real features get built and shipped.
prereqs:
  - Running a Python program and reading its error output calmly.
  - Basic types and loops.
  - "Sockets are new, and that is the whole point — you will meet them here."
toolkit:
  - code: "import socket"
    does: Python's networking lives here.
  - code: 'socket.create_server(("localhost", 6379))'
    does: open a listening server on Redis's port, 6379.
  - code: "conn, addr = server.accept()"
    does: wait for a client to connect, then hold that connection.
  - code: "conn.recv(1024)"
    does: read up to 1024 bytes the client sent (the request).
  - code: 'conn.sendall(b"+PONG\r\n")'
    does: send bytes back; +PONG\r\n is what the PING test wants to see.
walkthrough:
  - Read exactly what the current stage's test expects — nothing more.
  - Open a socket server on the port the test connects to.
  - Accept a connection and read the incoming bytes.
  - Send back precisely the response the test is checking for.
  - Run the tests, read the next failure message, and repeat for the next stage. Let the tests, not a chatbot, be your teacher.
code: |
  # Stage 1: answer a PING with +PONG over a socket
  import socket

  def main():
      server = socket.create_server(("localhost", 6379))
      conn, _ = server.accept()      # wait for one client
      conn.recv(1024)                # read their request bytes
      conn.sendall(b"+PONG\r\n")     # the reply the test wants

  if __name__ == "__main__":
      main()
build: >-
  This milestone IS the build. Sign up (no card needed for the free challenges),
  start Build Your Own Redis, and get stage 1 green. Resist the urge to ask an AI
  what to type — reading the failing test and the linked docs is the entire
  exercise. Then keep going as far as the free stages take you.
interview: >-
  A from-scratch systems project is worth ten more CRUD apps in an interview. Being
  able to say "I built a Redis clone that speaks the real protocol over sockets,
  driven by its test suite" signals that you can operate from a spec — which is
  most of the job.
connects:
  - label: Arrays and Hashing
    slug: arrays-and-hashing
  - label: Write your first pattern note
    slug: write-your-first-pattern-note
check:
  q: >-
    Your PING test keeps failing even though your program runs fine. Before
    reaching for an AI, what are your first two moves?
  a: >-
    Read the exact failure message — it usually names what it expected versus what
    it got — then check the response bytes against the spec (the trailing \r\n and
    the leading + matter). The answer is almost always in the test output or the
    linked docs.
reflect: "How did it feel to make a test pass without being told the answer?"
---

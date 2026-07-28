---
order: 1
chapter: basics
title: Set up your tools
gist: >-
  Get Python and a place to write it onto your computer. Fifteen minutes of setup,
  once, that you never repeat.
picture:
  - >-
    Before a carpenter builds anything, they set up the workbench: the saw, the
    wood, good light. This is your workbench — Python (the engine that runs your
    code) and an editor (where you write it).
origin:
  - >-
    Code is just text files. You need one thing to RUN them (Python) and one
    comfortable place to WRITE them (an editor). That is the whole toolkit;
    everything else is optional for a long time.
purpose:
  - >-
    A setup where you can write a file, run it, and see the output — the tiny loop
    that every other lesson depends on.
click:
  - >-
    Two pieces, and only two: Python is the engine that reads your file and does
    what it says; the editor is just a friendly notepad for code. Get both working
    once and you never think about setup again.
prereqs:
  - A computer. That is genuinely it.
toolkit:
  - code: "python3 --version"
    does: check Python is installed — a version number means yes.
  - code: "python --version"
    does: the same check on Windows, if python3 is not found.
  - code: "python3 hello.py"
    does: run a Python file from the terminal.
solve:
  lead: About fifteen minutes, once. Do these in order, and you are set for good.
  steps:
    - do: >-
        Install Python from python.org — click the big yellow Download button. On
        the Windows installer, tick "Add Python to PATH" before you continue.
      why: >-
        Python is the engine that runs your code. "Add to PATH" is the checkbox that
        lets you run it just by typing python later; skipping it causes most setup
        headaches.
    - do: Install VS Code from code.visualstudio.com — a free, friendly editor.
      why: >-
        Any text editor works, but VS Code is free, runs everywhere, and gently
        suggests things as you type, which helps when you are new.
    - do: >-
        Open VS Code, make a new file called hello.py, type print("it works"), and
        run it with the Run button (the triangle) or python3 hello.py in the terminal.
      why: >-
        Seeing "it works" appear proves both pieces are talking to each other. That
        is the finish line for setup.
    - do: >-
        If any step misbehaves, follow the free official VS Code Python tutorial
        linked below — it has screenshots for Windows, Mac, and Linux.
      why: >-
        It is the one trustworthy, AI-free reference for setup. Bookmark it, so a
        stuck moment is a two-click fix, not a dead end.
code: |
  # Put this one line in hello.py, then run it.
  print("My tools work.")
build:
  blurb: >-
    Get to the point where running your file prints a line you wrote. That single
    printed line means your workbench is built — for good.
  skills:
    - Installing Python
    - Using an editor
    - Running a file
  out: Code you wrote, running on your own machine.
resources:
  - label: Download Python (python.org)
    url: https://www.python.org/downloads/
  - label: Download VS Code
    url: https://code.visualstudio.com/
  - label: Free VS Code Python setup guide (with pictures)
    url: https://code.visualstudio.com/docs/python/python-tutorial
---

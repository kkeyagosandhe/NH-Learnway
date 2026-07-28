---
order: 2
chapter: basics
title: Variables & types
gist: >-
  A variable is a labelled box that holds a value. A type is what kind of value it
  is — a number, some text, a true/false.
picture:
  - >-
    Labelled jars on a shelf. You write "age" on a jar and drop 25 inside; later
    you just ask for "age" and get 25 back. Change your mind, put 26 in — same jar,
    new contents.
origin:
  - >-
    Programs need to remember things between steps: a name, a running total, a
    yes/no. A variable is that memory — a name you store a value under and read
    back later.
  - >-
    Every value has a type, because the computer treats kinds of data differently.
    You can add numbers; you can glue text together; you cannot add a number to a
    word.
purpose:
  - >-
    You use variables to hold and name the pieces of data your program works with,
    and types to know what you are allowed to do with each piece.
click:
  - >-
    The name on the left is just a label pointing at a value on the right. So
    x = 5 does not mean "x equals 5 forever" — it means "put 5 in the box called
    x," and you can put something else in later.
prereqs:
  - Your first program — you can run code and print.
toolkit:
  - code: "age = 25"
    does: store the number 25 under the name age.
  - code: 'name = "Ada"'
    does: store text (a string) under the name name.
  - code: "is_ready = True"
    does: store a boolean — True or False.
  - code: "type(age)"
    does: ask Python what type a value is.
  - code: "age = age + 1"
    does: read age, add 1, and store the result back.
  - code: 'f"Hi {name}, you are {age}"'
    does: an f-string — drops variables straight into a piece of text.
code: |
  name = "Ada"          # a string (text)
  age = 25              # an int (whole number)
  height = 1.7          # a float (decimal number)
  print(f"{name} is {age} and {height}m tall")

  age = age + 1         # the box can change
  print(f"Next year, {age}")
build:
  blurb: >-
    Store your name, your age, and your favourite language in three variables, then
    print one sentence that uses all three with an f-string.
  skills:
    - Variables
    - Types
    - f-strings
  out: A sentence built from variables, printed.
---

from collections import deque

L = int(input())

for _ in range(L):
  password = list(input())
  prev = deque([])
  next = deque([])

  for i in range(len(password)):
    if password[i] == "<":
      if len(prev) > 0: next.appendleft(prev.pop())
    elif password[i] == ">":
      if len(next) > 0: prev.append(next.popleft())
    elif password[i] == "-":
      if len(prev) > 0: prev.pop()
    else:
      prev.append(password[i])

  print(*prev, sep="", end="")
  print(*next, sep="")    
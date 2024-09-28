from collections import deque
import sys

prev = deque(list(input()))
next = deque([])

M = int(input())

for _ in range(M):
  command = list(map(str, sys.stdin.readline().rstrip().split()))

  if command[0] == "L" and len(prev) > 0:
    next.appendleft(prev.pop())
  elif command[0] == "D" and len(next) > 0:
    prev.append(next.popleft())
  elif command[0] == "B" and len(prev) > 0:
    prev.pop()
  elif command[0] == "P":
    prev.append(command[1])
  
print(*prev, sep="", end="")
print(*next, sep="")
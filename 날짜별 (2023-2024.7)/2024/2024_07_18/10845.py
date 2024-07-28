import sys
from collections import deque

N = int(sys.stdin.readline())
arr = deque([])

for i in range(N):
  command = sys.stdin.readline().split()

  if command[0] == 'push':
    arr.append(command[1])
  elif command[0] == 'pop':
    if len(arr) > 0:
      print(arr.popleft())
    else:
      print(-1)
  elif command[0] == 'size':
    print(len(arr))
  elif command[0] == 'empty':
    if len(arr) > 0:
      print(0)
    else:
      print(1)
  elif command[0] == 'front':
    if len(arr) > 0:
      num = arr.popleft()
      print(num)
      arr.appendleft(num)
    else:
      print(-1)
  elif command[0] == 'back':
    if len(arr) > 0:
      num = arr.pop()
      print(num)
      arr.append(num)
    else:
      print(-1)
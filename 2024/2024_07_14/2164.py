from collections import deque

N = int(input())
arr = deque([i+1 for i in range(N)])

while(len(arr) != 1):
  arr.popleft()

  if len(arr) == 1:
    break
  else:
    arr.rotate(-1)

print(*arr)
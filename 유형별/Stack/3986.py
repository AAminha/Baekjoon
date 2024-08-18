from collections import deque

N = int(input())
count = 0

for _ in range(N):
  word = input()
  stack = deque([])

  for w in word:
    if len(stack) == 0 or w != stack[len(stack)-1]:
      stack.append(w)
    else:
      stack.pop()
  
  if len(stack) == 0: count += 1

print(count)
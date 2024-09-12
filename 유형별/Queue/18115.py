from collections import deque

N = int(input())
actions = list(map(int, input().split()))
actions.reverse()
result = deque([])

for i in range(len(actions)):
  if actions[i] == 1:
    result.appendleft(i + 1)
  elif actions[i] == 2:
    temp = result.popleft()
    result.appendleft(i + 1)
    result.appendleft(temp)
  else:
    result.append(i + 1)

print(*result)
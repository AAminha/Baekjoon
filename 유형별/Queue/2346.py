from collections import deque

N = int(input())
numbers = list(map(int, input().split()))
balloons = deque([[i+1,numbers[i]] for i in range(N)])
result = []

for i in range(N):
  b = balloons.popleft()
  result.append(b[0])

  if (b[1] > 0):
    balloons.rotate((b[1] - 1) * (-1))
  else:
    balloons.rotate(b[1] * (-1))

print(*result)
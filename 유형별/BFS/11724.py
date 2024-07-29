from collections import deque
import sys

# 입력 받기
N, M = map(int, sys.stdin.readline().split())
arr = [[] for _ in range(N)]

for _ in range(M):
  num1, num2 = map(int, sys.stdin.readline().split())
  arr[num1-1].append(num2-1)
  arr[num2-1].append(num1-1)

# BFS 준비
visited = [False for _ in range(N)]
queue = deque([])
count = 0

# BFS 시작
for i in range(N):
  if not visited[i]:
    count += 1
    queue.append(i)
    visited[i] = True

    while queue:
      num = queue.popleft()

      for j in arr[num]:
        if not visited[j]:
          queue.append(j)
          visited[j] = True

print(count)
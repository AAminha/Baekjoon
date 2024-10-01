from collections import deque

M, N = map(int, input().split())
graph = []

for _ in range(N):
  graph.append(list(map(int, input().split())))

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
need_visited = deque([])

for i in range(N):
  for j in range(M):
    if graph[i][j] == 1:
      need_visited.append((i, j))
      graph[i][j] = 10

while need_visited:
    x, y = need_visited.popleft()

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if 0 <= nx < N and 0 <= ny < M and graph[nx][ny] == 0:
        need_visited.append((nx, ny))
        graph[nx][ny] = graph[x][y] + 1

max_num = 0
completed = True

for i in range(N):
  for j in range(M):
    if graph[i][j] == 0:
      completed = False
      break

    if max_num < graph[i][j]:
      max_num = graph[i][j]
  
  if not completed:
    break

if not completed: print(-1)
else: print(max_num - 10)
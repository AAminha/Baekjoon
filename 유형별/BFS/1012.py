from collections import deque

T = int(input())

def bfs(graph, x, y):
  need_visited = deque([(x, y)])
  dx = [1, -1, 0, 0]
  dy = [0, 0, 1, -1]

  while need_visited:
    a, b = need_visited.popleft()

    for i in range(4):
      na = a + dx[i]
      nb = b + dy[i]

      if 0 <= na < M and 0 <= nb < N and graph[na][nb] == 1:
        need_visited.append((na, nb))
        graph[na][nb] = 0

for _ in range(T):
  M, N, K = map(int, input().split())
  field = [[0 for _ in range(N)] for _ in range(M)]

  for _ in range(K):
    x, y = map(int, input().split())
    field[x][y] = 1

  count = 0

  for i in range(M):
    for j in range(N):
      if field[i][j] == 1:
        bfs(field, i, j)
        field[i][j] = 0
        count += 1
  
  print(count)
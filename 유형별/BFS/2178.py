from collections import deque

N, M = map(int, input().split())
graph = []

for _ in range(N):
  graph.append(list(map(int, input())))

def bfs(graph, x, y):
  need_visited = deque([(x, y)])

  dx = [1, -1, 0, 0]
  dy = [0, 0, 1, -1]

  while need_visited:
    a, b = need_visited.popleft()

    for i in range(4):
      nx = a + dx[i]
      ny = b + dy[i]

      if 0 <= nx < N and 0 <= ny < M and graph[nx][ny] == 1:
        need_visited.append((nx, ny))
        graph[nx][ny] = graph[a][b] + 1

bfs(graph, 0, 0)

print(graph[N-1][M-1])
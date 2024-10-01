from collections import deque

N = int(input())
graph = []

for _ in range(N):
  graph.append(list(input()))

def bfs(graph, x, y, result):
  need_visited = deque([(x, y)])
  graph[x][y] = '0'

  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]
  count = 1

  while need_visited:
    a, b = need_visited.popleft()

    for i in range(4):
      nx = a + dx[i]
      ny = b + dy[i]

      if 0 <= nx < N and 0 <= ny < N and graph[nx][ny] == '1':
        need_visited.append((nx, ny))
        graph[nx][ny] = '0'
        count += 1
  
  result.append(count)


result = []
for i in range(N):
  for j in range(N):
    if graph[i][j] == '1':
      bfs(graph, i, j, result)

result.sort()

print(len(result))
print(*result, sep="\n")
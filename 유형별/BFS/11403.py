from collections import deque

N = int(input())
graph = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * N for _ in range(N)]

for i in range(N):
  need_visited = deque([])
  need_visited.append(i)
  check = [0 for _ in range(N)]

  while need_visited:
    num = need_visited.popleft()

    for j in range(N):
      if graph[num][j] == 1 and check[j] == 0:
        need_visited.append(j)
        check[j] = 1
  
  for j in range(N):
    if check[j] == 1:
      visited[i][j] = 1

for i in range(N):
  print(*visited[i])
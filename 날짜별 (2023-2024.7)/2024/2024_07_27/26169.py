arr = []
result = 0

for _ in range(5):
  arr.append(list(map(int, input().split())))

startX, startY = map(int, input().split())

def dfs (depth, x, y, graph, count):
  global result

  if depth > 0 and graph[x][y] == 1: count += 1
  temp = graph[x][y]
  graph[x][y] = -1

  if count >= 2 and result == 0:
    result = 1

  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]

  if depth < 3:
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if -1 < nx < 5 and -1 < ny < 5 and graph[nx][ny] > -1:
        dfs(depth+1, nx, ny, graph, count)
  
  graph[x][y] = temp

dfs(0, startX, startY, arr, 0)
print(result)
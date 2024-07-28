N = int(input())
arr = []
visited = [[False for _ in range(N)] for _ in range(N)]

for i in range(N):
  arr.append(list(map(int, input().split())))

def dfs(x, y):
  visited[x][y] = True
  num = arr[x][y]

  # 행 이동
  dx = x + num
  if dx < N and visited[dx][y] == False:
    dfs(dx, y)

  # 열 이동
  dy = y + num
  if dy < N and visited[x][dy] == False:
    dfs(x, dy)

dfs(0, 0)

if visited[N-1][N-1]:
  print("HaruHaru")
else:
  print("Hing")
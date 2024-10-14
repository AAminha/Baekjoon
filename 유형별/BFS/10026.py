from collections import deque

N = int(input())
painting = []
count1 = 0
count2 = 0

for _ in range(N):
  painting.append(list(input()))

def bfs(a, b, target, changedStr):

  need_visited = deque([(a, b)])
  painting[a][b] = changedStr
  
  dx = [1, -1, 0, 0]
  dy = [0, 0, 1, -1]

  while need_visited:
    x, y = need_visited.popleft()

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if 0 <= nx < N and 0 <= ny < N and painting[nx][ny] == target:
        need_visited.append((nx, ny))
        painting[nx][ny] = changedStr
  
for i in range(N):
  for j in range(N):
    if painting[i][j] == 'R':
      bfs(i, j, 'R', 'r')
      count1 += 1
    elif painting[i][j] == 'G':
      bfs(i, j, 'G', 'r')
      count1 += 1
    elif painting[i][j] == 'B':
      bfs(i, j, 'B', '0')
      count1 += 1
      count2 += 1

for i in range(N):
  for j in range(N):
    if painting[i][j] == 'r':
      bfs(i, j, 'r', '0')
      count2 += 1

print(count1, count2)
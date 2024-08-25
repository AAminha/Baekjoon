N, M = map(int, input().split())
result = []
visited = []

def dfs(depth):
  if depth == M:
    result.append(visited[:])
    return 
  
  for i in range(1, N+1):
    if i not in visited:
      visited.append(i)
      dfs(depth + 1)
      visited.pop()

dfs(0)

for i in range(len(result)):
  print(*result[i])
N, M = map(int, input().split())
arr = [i for i in range(1, N+1)]
#need_visited = []
result = []

def dfs(current_num, current_depth, target_depth, visited):
  if current_depth == target_depth:
    result.append(visited[:])
    return
  
  for num in arr:
    if num >= current_num:
      visited.append(num)
      dfs(num, current_depth+1, target_depth, visited)
      visited.pop()

for num in arr:
  dfs(num, 1, M, [num])

result.sort()

for r in result:
  print(*r)
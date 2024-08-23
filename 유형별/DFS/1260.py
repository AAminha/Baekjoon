from collections import deque

N, M, V = map(int, input().split())
graph = [[] for _ in range(N+1)]

for _ in range(M):
  s, e = map(int, input().split())
  graph[s].append(e)
  graph[e].append(s)

for i in range(N+1):
  graph[i].sort()

def dfs(start):
  visited = []
  need_visited = deque([start])

  while need_visited:
    node = need_visited.pop()
    
    if node not in visited:
      visited.append(node)
      need_visited.extend(reversed(graph[node]))
  
  print(*visited)

def bfs(start):
  visited = [start]
  need_visited = deque([start])

  while need_visited:
    node = need_visited.popleft()

    for n in graph[node]:
      if n not in visited:
        need_visited.append(n)
        visited.append(n)
  
  print(*visited)

dfs(V)
bfs(V)
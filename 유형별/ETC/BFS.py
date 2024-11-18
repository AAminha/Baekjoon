from collections import deque

def bfs(graph, start, visited):
  need_visited = deque([start])
  visited[start] = True
  
  while need_visited:
    node = need_visited.popleft()

    for i in graph[node]:
      if not visited[i]:
        need_visited.append(i)
        visited[i] = True
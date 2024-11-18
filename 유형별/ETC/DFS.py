from collections import deque

def dfs (graph, start, visited):
  need_visited = deque([start])
  visited[start] = True

  while need_visited:
    node = need_visited.pop()

    if node not in visited:
      visited.append(node)
      need_visited.extend(graph[node])
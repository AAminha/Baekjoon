import sys

N = int(input())
graph = [[] for _ in range(N + 1)]
parents = [0 for _ in range(N + 1)]

for _ in range(N-1):
  node1, node2 = map(int, input().split())
  graph[node1].append(node2)
  graph[node2].append(node1)

def dfs(graph, parents, start):
  need_visited=[start]
  visited=[False for _ in range(N + 1)]
  visited[start] = True
  
  while need_visited:
    node = need_visited.pop()
    
    for i in graph[node]:
      if not visited[i]:
        need_visited.append(i)
        visited[i] = True
        parents[i] = node

dfs(graph, parents, 1)

for i in range(2, N+1):
  print(parents[i])
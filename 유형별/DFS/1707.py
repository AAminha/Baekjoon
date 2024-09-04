## **
import sys
sys.setrecursionlimit(1000000)

K = int(sys.stdin.readline())

def dfs(start, group):
  visited[start] = group

  for node in graph[start]:
    if not visited[node]:
      result = dfs(node, group * (-1))
      if not result:
        return False
    elif visited[node] == visited[start]:
      return False
  return True

for _ in range(K):
  V, E = map(int, sys.stdin.readline().rstrip().split())
  graph = [[] for _ in range(V + 1)]
  visited = [False for _ in range(V + 1)]

  for _ in range(E):
    node1, node2 = map(int, sys.stdin.readline().rstrip().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

  for i in range(1, V+1):
    if not visited[i]:
      dfs_result = dfs(i, 1)

      if not dfs_result:
        break
  
  print("YES" if dfs_result else "NO")
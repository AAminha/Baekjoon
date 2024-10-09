import heapq
import sys

N, M = map(int, input().split())
graph = [[] for _ in range(N)]
shortest_route = [1e9 for _ in range(N)]

for _ in range(M):
  node1, node2, cow = map(int, sys.stdin.readline().rstrip().split())
  graph[node1-1].append((node2-1, cow))
  graph[node2-1].append((node1-1, cow))

need_visited = [(0, 0)]
while need_visited:
  acc, node = heapq.heappop(need_visited)

  if acc > shortest_route[node]:
    continue
  
  shortest_route[node] = acc
  for next_node, next_cost in graph[node]:
    new_cost = acc + next_cost

    if new_cost < shortest_route[next_node]:
      shortest_route[next_node] = new_cost
      heapq.heappush(need_visited, (new_cost, next_node))

print(shortest_route[N-1])
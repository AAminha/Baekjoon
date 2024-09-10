import sys
import heapq

N, M, K, X = map(int, input().split())
graph = [[] for _ in range(N + 1)]

for _ in range(M):
  A, B = map(int, sys.stdin.readline().rstrip().split())
  graph[A].append(B)

shortest_route = [1e9 for _ in range(N+1)]
shortest_route[X] = 0

need_visited = [(0, X)]

while need_visited:
  acc_cost, node = heapq.heappop(need_visited)

  if acc_cost > shortest_route[node]:
    continue

  shortest_route[node] = acc_cost
  for city in graph[node]:
    new_cost = acc_cost + 1
    if new_cost < shortest_route[city]:
      shortest_route[city] = new_cost
      heapq.heappush(need_visited, (new_cost, city))

result = []
for i in range(1, len(shortest_route)):
  if shortest_route[i] == K:
    result.append(i)

if len(result) == 0:
  print(-1)
else:
  print(*result, sep="\n")
import sys
import heapq

N = int(input())
M = int(input())
graph = [[] for _ in range(N+1)]

for _ in range(M):
  start, end, cost = map(int, sys.stdin.readline().rstrip().split())
  graph[start].append((end, cost))

start, end = map(int, input().split())

need_visited = []
heapq.heappush(need_visited, (0, start))

result = [1e9 for _ in range(len(graph))]
result[start] = 0

while need_visited:
  acc_cost, node = heapq.heappop(need_visited)

  if result[node] < acc_cost:
    continue

  result[node] = acc_cost

  for next_node, next_cost in graph[node]:
    new_cost = acc_cost + next_cost
    if new_cost < result[next_node]:
      result[next_node] = new_cost
      heapq.heappush(need_visited, (new_cost, next_node))

print(result[end])
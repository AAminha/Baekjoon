import heapq

def Dijkstra(graph):
  shortest_route = [1e9 for _ in range(len(graph))]
  need_visited = [(0, 0)]

  while need_visited:
    acc, node = heapq.heappop(need_visited)

    if acc > shortest_route[node]:
      continue

    shortest_route[node] = acc
    for next, cost in graph[node]:
      new = acc + cost

      if new < shortest_route[next]:
        shortest_route[next] = new
        heapq.heappush(need_visited, (new, next))
import heapq

N, D = map(int, input().split())
graph = [[] for _ in range(D + 1)]
result = [1e9 for _ in range(D + 1)]
result[0] = 0

for i in range(D):
  graph[i].append((i+1, 1))


for _ in range(N):
  start, end, length = map(int, input().split())
  if end <= D: graph[start].append((end, length))

queue = [(0, 0)]
while queue:
  acc_length, node = heapq.heappop(queue)

  if result[node] < acc_length:
    continue

  result[node] = acc_length

  for next, length in graph[node]:
    new_length = acc_length + length
    if result[next] > new_length:
      result[next] = new_length
      heapq.heappush(queue, (new_length, next))

print(result[D])
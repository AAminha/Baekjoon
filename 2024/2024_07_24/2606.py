from collections import deque

N = int(input())
pair = int(input())
arr = [[] for _ in range(N + 1)]
queue = deque([1])
visited = [0 for _ in range(N + 1)]
visited[1] = 1

for _ in range(pair):
  num1, num2 = map(int, input().split())
  arr[num1].append(num2)
  arr[num2].append(num1)

while queue:
  index = queue.popleft()

  for i in arr[index]:
    if visited[i] == 0:
      queue.append(i)
      visited[i] = 1

print(visited.count(1) - 1)
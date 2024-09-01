from collections import deque

N = int(input())
graph = list(map(int, input().split()))
deleted = deque([int(input())])
count = 0

tree = [[] for _ in range(N)]

for i in range(N):
  if graph[i] != -1: tree[graph[i]].append(i)

if graph[deleted[0]] != -1:
  tree[graph[deleted[0]]].remove(deleted[0])

while deleted:
  node = deleted.popleft()
  
  while tree[node]:
    deleted.append(tree[node].pop())
  
  tree[node].append(None)

for i in range(N):
  if len(tree[i]) == 0: count += 1

print(count)
from collections import deque

N, M = map(int, input().split())
graph = [[] for _ in range(N+1)]
result = [1e9, 0]

for _ in range(M):
  user1, user2 = map(int, input().split())
  graph[user1].append(user2)
  graph[user2].append(user1)

def bfs(start, userCount):
  visited = [-1 for _ in range(userCount + 1)]
  
  need_visited = deque([])
  need_visited.append(start)
  visited[start] = 0

  while need_visited:
    user = need_visited.popleft()
    
    for friend in graph[user]:
      if visited[friend] == -1:
        need_visited.append(friend)
        visited[friend] = visited[user] + 1
  
  return(sum(visited) + 1)

for i in range(1, N+1):
  user_result = bfs(i, N)

  if user_result < result[0]:
    result[0] = user_result
    result[1] = i

print(result[1])
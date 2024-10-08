from collections import deque

N, K = map(int, input().split())

def bfs(start, target):
  visited = set([])
  need_visited = deque([])
  need_visited.append((start, 0))

  while need_visited:
    pos, cnt = need_visited.popleft()

    if pos == target:
      return cnt
    
    if 0 <= 2 * pos <= 100000 and 2 * pos not in visited:
      need_visited.append((2 * pos, cnt))
      visited.add(2 * pos)
      
    new_pos = [pos - 1, pos + 1]  
    for i in range(2):
      if 0 <= new_pos[i] <= 100000 and new_pos[i] not in visited:
        need_visited.append((new_pos[i], cnt + 1))
        visited.add(new_pos[i])

print(bfs(N, K))
N = int(input())
tower = list(map(int, input().split()))
result = [0 for _ in range(N)]
stack = []

for i in range(N):
  while stack:
    top = stack.pop()

    if top[1] > tower[i]:
      result[i] = top[0]
      stack.append(top)
      break
    
  stack.append([i+1, tower[i]])

print(*result)
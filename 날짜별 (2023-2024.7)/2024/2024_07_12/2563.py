paper = [[0 for _ in range(100)] for _ in range(100)]
N = int(input())
sum = 0

for i in range(N):
  x, y = map(int, input().split())
  
  for a in range(x-1, x+9):
    for b in range(y-1, y+9):
      paper[a][b] = 1

for i in range(100):
  sum += paper[i].count(1)

print(sum)
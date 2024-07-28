import sys

n, m = map(int, sys.stdin.readline().split())
basket_list = list(0 for _ in range(n))

for _ in range(m):
  i, j, k = map(int, sys.stdin.readline().split())
  
  for b in range(i-1, j):
    basket_list[b] = k

print(*basket_list)
n, m = map(int, input().split())
arr = list(range(1, n+1))

for _ in range(m):
  a, b = map(int, input().split())
  sub_arr = arr[a-1:b]
  arr[a-1:b] = reversed(sub_arr)

print(*arr)
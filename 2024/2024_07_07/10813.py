n, m = map(int, input().split())
arr = list(range(1, n+1))

for _ in range(m):
  a, b = map(int, input().split())

  temp = arr[a-1]
  arr[a-1] = arr[b-1]
  arr[b-1] = temp

print(*arr)
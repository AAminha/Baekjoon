n = int(input())
arr = []
result = [1 for _ in range(n)]

for i in range(n):
  x, y = map(int, input().split())
  arr.append([x, y])

for i in range(n - 1):
  for j in range(i + 1, n):
    if arr[i][0] < arr[j][0] and arr[i][1] < arr[j][1]:
      result[i] += 1
    if arr[i][0] > arr[j][0] and arr[i][1] > arr[j][1]:
      result[j] += 1

print(*result, sep=" ")
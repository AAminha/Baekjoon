essential = [1, 1, 2, 2, 2, 8]
arr = list(map(int, input().split()))
res = []

for i in range(len(essential)):
  res.append(essential[i] - arr[i])

print(*res)
N = int(input())
arr = []
max_weight = 0
weight = 0

for _ in range(N):
  arr.append(int(input()))

arr.sort()

for i in range(N):
  if weight != arr[i]:
    weight_sum = arr[i] * (N - i)
    if max_weight < weight_sum:
      max_weight = weight_sum

print(max_weight)
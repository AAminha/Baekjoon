num = int(input())

for _ in range(num):
  arr = list(map(int, input().split()))
  average = sum(arr[i] for i in range(1, len(arr))) / arr[0]
  count = 0

  for i in range(1, arr[0] + 1):
    if arr[i] > average:
      count += 1

  print("{:.3f}%".format(count / arr[0] * 100))
arr = [0 for _ in range(10000)]

for i in range(len(arr)):
  count = i + 1
  for j in str(count):
    count += int(j)
  if count <= 10000: arr[count - 1] += 1

for i in range(len(arr)):
  if arr[i] == 0:
    print(i + 1)
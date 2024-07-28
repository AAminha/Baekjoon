a = int(input())
b = int(input())
c = int(input())
result = str(a * b * c)
arr = list([0 for _ in range(10)])

for i in range(len(result)):
  arr[int(result[i])] += 1

for i in range(len(arr)):
  print(arr[i])
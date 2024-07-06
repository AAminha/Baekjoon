arr = []

for i in range(10):
  num = int(input())
  rest = num % 42

  for j in range(len(arr)):
    if rest == arr[j]:
      break
    if j == len(arr) - 1:
      arr.append(rest)
  
  if i == 0:
    arr.append(rest)

print(len(arr))
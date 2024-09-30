arr = input().split('-')

for i in range(len(arr)):
  data = arr[i].split('+')
  sum = 0

  for j in range(len(data)):
    sum += int(data[j])
  
  arr[i] = sum

result = arr[0]

for i in range(1, len(arr)):
  result -= arr[i]

print(result)
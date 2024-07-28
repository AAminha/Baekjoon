arr = list(map(str, input().split('-')))
result = ""

for i in range(len(arr)):
  result += arr[i][0]

print(result)
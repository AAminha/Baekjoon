from collections import deque

N = int(input())
arr = list(map(int, input().split()))
K = int(input())

result = deque([])
for item in arr:
  result.append([item])

def compare(arr1, arr2):
  i = 0
  j = 0
  result = []

  while i < len(arr1) and j < len(arr2):
    if arr1[i] < arr2[j]:
      result.append(arr1[i])
      i += 1
    else:
      result.append(arr2[j])
      j += 1
  
  while i < len(arr1):
    result.append(arr1[i])
    i += 1
  
  while j < len(arr2):
    result.append(arr2[j])
    j += 1
  
  return result

while len(result) > K:
  length = len(result)

  for _ in range(length // 2):
    arr1 = result.popleft()
    arr2 = result.popleft()
    result.append(compare(arr1, arr2))

for i in range(len(result)):
  print(*result[i], end=" ")
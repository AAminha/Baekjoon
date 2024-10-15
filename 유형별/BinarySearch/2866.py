R, C = map(int, input().split())
array = []
result = 0

for _ in range(R):
  array.append(list(input()))

def binary_search(left, right, row, col):
  global result

  if left > right: return

  mid = (left + right) // 2
  dict = {}
  isSuccess = True

  for i in range(col):
    string = ''
    for j in range(mid, row):
      string += array[j][i]
    
    if string in dict:
      isSuccess = False
      break
    else:
      dict[string] = 1
  
  if isSuccess:
    result = max(result, mid)
    binary_search(mid+1, right, row, col)
  else:
    binary_search(left, mid-1, row, col)

binary_search(0, R-1, R, C)

print(result)
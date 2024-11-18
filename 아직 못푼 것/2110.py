N, C = map(int, input().split())
array = []

for _ in range(N):
  array.append(int(input()))

array.sort()

def binary_search(left, right, home):
  



  global C
  mid = (left + right) // 2
  result = array[N-1] - array[0]
  C -= 1

  if C == 0:
    result = min(result, array[mid] - array[left])
    result = min(result, array[right] - array[mid])
    return result
  
  binary_search(left, mid - 1)
  binary_search(mid + 1, right)

print(binary_search(0, len(array)-1), 0)
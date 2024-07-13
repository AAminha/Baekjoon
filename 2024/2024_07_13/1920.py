import sys

N = int(input())
n_arr = list(map(int, sys.stdin.readline().split()))
n_arr.sort()

M = int(input())
m_arr = list(map(int, sys.stdin.readline().split()))

for m in m_arr:
  low = 0
  high = N-1

  while (low <= high):
    mid = (low + high) // 2

    if m == n_arr[mid]:
      print(1)
      break
    elif m < n_arr[mid]:
      high = mid - 1
    else:
      low = mid + 1
  
  if low > high:
    print(0)
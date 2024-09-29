from collections import deque

def lotto(arr, recent_index):
  if len(arr) == 6:
    result.append(arr.copy())
    return
  
  for i in range(recent_index + 1, len(nums)):
    arr.append(nums[i])
    lotto(arr, i)
    arr.pop()

while True:
  nums = deque(list(map(int, input().split())))
  k = nums.popleft()
  result = []
  
  if k == 0:
    break

  lotto([], -1)

  result.sort()
  for i in range(len(result)):
    print(*result[i])
  
  print("")
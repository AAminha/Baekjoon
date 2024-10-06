N, M = map(int, input().split())
trees = list(map(int, input().split()))

def binary_search(target, left, right):
  result = 0

  while left <= right:
    mid = (left + right) // 2
    sum = 0

    for tree in trees:
      if tree > mid:
        sum += tree - mid
    
    if sum == target:
      return mid
    elif sum < target:
      right = mid - 1
    elif sum > target:
      result = mid
      left = mid + 1
    
  return result


print(binary_search(M, 0, max(trees)))
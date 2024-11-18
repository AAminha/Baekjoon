def BinarySearch(array, target, left, right):
  mid = (left + right) // 2

  if array[mid] == target:
    return mid
  
  if array[mid] < target:
    BinarySearch(array, target, left, mid-1)
  elif array[mid] > target:
    BinarySearch(array, target, mid + 1, right)
  else:
    return False # 못찾은거임
N = int(input())
waters = list(map(int, input().split()))
waters.sort()

left = 0
right = N-1

result = [abs(waters[left] + waters[right]), waters[left], waters[right]]

while left < right:
  sum_result = waters[left] + waters[right]

  if abs(sum_result) < result[0]:
    result[0] = abs(sum_result)
    result[1] = waters[left]
    result[2] = waters[right]
  
  if sum_result < 0:
    left += 1
  elif sum_result == 0:
    break
  else:
    right -= 1

print(result[1], result[2])
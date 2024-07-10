height = []
sum  = 0
result_1 = 0
result_2 = 0

for _ in range(9):
  num = int(input())
  height.append(num)
  sum += num

height.sort()

for i in range(8):
  for j in range(i + 1, 9):
    if sum - height[i] - height[j] == 100:
      result_1 = i
      result_2 = j
      break
  
  if result_1 + result_2 != 0:
    break

for i in range(9):
  if i != result_1 and i != result_2:
    print(height[i])
a = 0
b = 0
max = -1


for i in range(1, 10):
  nums = list(map(int, input().split()))

  for j in range(len(nums)):
    if nums[j] > max:
      max = nums[j]
      a = i
      b = j + 1

print(max)
print(a, b)
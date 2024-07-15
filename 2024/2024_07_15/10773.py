K = int(input())
sum = 0
nums = []

for i in range(K):
  num = int(input())

  if num == 0:
    sum -= nums.pop()
  else:
    sum += num
    nums.append(num)

print(sum)
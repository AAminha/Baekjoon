import math

n = input()
count = [0 for _ in range(10)]
max = 0

for i in range(len(n)):
  num = int(n[i])
  count[num] += 1

  if num != 6 and num != 9 and max < count[num]:
    max = count[num]

sum_6_9 = count[6] + count[9]
if max < math.ceil(sum_6_9 / 2):
  max = math.ceil(sum_6_9 / 2)

print(max)
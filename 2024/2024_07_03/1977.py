import math

m = int(input())
n = int(input())

sum = 0
num = math.ceil(m ** (1/2))
min = num ** 2

while(1):
  result = num ** 2

  if m > result:
    num += 1
  elif m <= result and result <= n:
    sum += result
    num += 1
  else:
    break

if sum == 0:
  print(-1)
else:
  print(sum)
  print(min)
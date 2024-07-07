import math

num = int(input())
factorial = str(math.factorial(num))

count = 0
for i in range(len(factorial)-1, -1, -1):
  if factorial[i] == '0':
    count += 1
  else:
    break

print(count)
import math

num = bin(int(input()))
num = num.replace("0b", "")
result = 0

for i in range(len(num)):
  result += int(num[i]) * (3 ** (len(num) - 1 - i))

print(result)
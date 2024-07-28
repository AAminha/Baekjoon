import math

def is_prime_number(n):
  if n == 1:
    return False
  elif n < 3:
    return True
  
  num = math.ceil(n / 2)

  for i in range(2, num + 1):
    if n % i == 0:
      return False

  return True

m = int(input())
n = int(input())
sum = 0
min = -1

for i in range(m, n + 1):
  if is_prime_number(i):
    sum += i
    if min == -1:
      min = i

if sum == 0:
  print(-1)
else:
  print(sum)
  print(min)
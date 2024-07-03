n = int(input())

def is_prime_number(num):
  if num == 1:
    return False
  elif num < 3:
    return True
  
  for i in range(2, num):
    if num % i == 0:
      return False
  
  return True

count = 0
num_list = list(map(int, input().split()))

for i in range(n):
  if is_prime_number(num_list[i]):
    count += 1

print(count)
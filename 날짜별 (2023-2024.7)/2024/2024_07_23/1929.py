M, N = map(int, input().split())
count = 0

def is_prime(num):
  if num == 1: return
  elif num == 2:
    print(num)
    return

  for i in range(2, int(num ** 0.5) + 1):
    if num % i == 0: return
  
  print(num)
  return

for i in range(M, N+1):
  is_prime(i)
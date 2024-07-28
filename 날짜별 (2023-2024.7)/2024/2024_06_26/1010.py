t = int(input())

def factorial(a):
  if a > 1:
    return a * factorial(a-1)
  else:
    return 1

for _ in range(t):
  n, m = map(int, input().split())
  result = factorial(m) // (factorial(n) * factorial(m-n))
  print(result)
import sys

a, b, c = map(int, sys.stdin.readline().split())

max_length = max(a, b, c)

if max_length < a + b + c - max_length:
  print(a + b + c)
else:
  new_max_length = a + b + c - max_length - 1
  print(a + b + c + new_max_length - max_length)
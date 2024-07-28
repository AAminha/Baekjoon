import sys

n = int(input())

for _ in range(n):
  h, w, visitor = map(int, sys.stdin.readline().split())

  result_h = visitor % h
  result_w = visitor // h + 1

  if result_h == 0:
    result_h = h
    result_w -= 1

  print(result_h * 100 + result_w)

count = int(input())

for i in range(count):
  print(" " * (count - 1 - i) + "*" * (i * 2 + 1))

for i in range(count-1):
  print(" " * (i + 1) + "*" * (2 * count - 3 - i * 2))
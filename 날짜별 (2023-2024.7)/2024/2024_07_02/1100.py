import sys

count = 0

for i in range(8):
  line = sys.stdin.readline().strip()

  a = i % 2
  for j in range(len(line)):
    if line[j] == 'F' and j % 2 == a:
      count += 1

print(count)
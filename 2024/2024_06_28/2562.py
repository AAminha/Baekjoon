index = 0
max = 0

for i in range(1, 10):
  num = int(input())

  if (num > max):
    max = num
    index = i

print(max)
print(index)
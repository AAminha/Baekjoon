import sys

N = int(input())
array = []

for _ in range(N):
  array.append(int(sys.stdin.readline()))

# 버블
for i in range(N - 1):
  for j in range(N - 1 - i):
    if array[j] > array[j+1]:
      array[j], array[j+1] = array[j+1], array[j]

print(*array, sep="\n")
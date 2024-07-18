import sys

N = int(input())
arr = list(map(int, sys.stdin.readline().split()))
arr.sort()
sum = 0
time = 0

for i in range(len(arr)):
  time += arr[i]
  sum += time

print(sum)
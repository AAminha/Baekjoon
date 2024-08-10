import sys

N = int(sys.stdin.readline().rstrip())
M = int(sys.stdin.readline().rstrip())
arr = list(map(int, sys.stdin.readline().rstrip().split()))

arr.sort()

start = 0
end = N - 1
count = 0

while start < end:
  if arr[start] + arr[end] < M:
    start += 1
  elif arr[start] + arr[end] > M:
    end -= 1
  elif arr[start] + arr[end] == M:
    count += 1
    start += 1
    end -= 1

print(count)
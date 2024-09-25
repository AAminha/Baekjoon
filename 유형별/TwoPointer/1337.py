import sys

N = int(input())
arr = []
for _ in range(N):
  arr.append(int(sys.stdin.readline()))

start = 0
end = 0
min_count = 5
arr.sort()

while end < N:
  print(start, end, end = " ")
  if arr[end] < arr[start] + 4:
    min_count = min(min_count, 5 - (end - start + 1))
    end += 1
    print("* ", end="")
  elif arr[end] == arr[start] + 4:
    min_count = min(min_count, 5 - (end - start + 1))
    start += 1
    end += 1
    print("# ", end="")
  else:
    start += 1
  print(min_count)

print(min_count)
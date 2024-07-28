n = int(input())
arr = []

for _ in range(n):
  arr.append(int(input()))

arr = list(set(arr))
print(sorted(arr))
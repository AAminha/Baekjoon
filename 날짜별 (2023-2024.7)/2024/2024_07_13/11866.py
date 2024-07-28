N, K = map(int, input().split())
arr = [i for i in range(1, N+1)]
result = []

current_index = -1
while(len(arr) > 0):
  current_index += K
  if current_index >= len(arr):
    current_index %= len(arr)

  result.append(arr.pop(current_index))
  current_index -= 1

print("<", end="")
print(*result, sep=", ", end="")
print(">")
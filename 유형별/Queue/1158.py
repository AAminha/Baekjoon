N, K = map(int, input().split())
circle = [i for i in range(1, N+1)]
result = []
current_index = 0

while circle:
  current_index = current_index + K - 1

  if current_index >= len(circle):
    current_index = current_index % len(circle)

  result.append(circle.pop(current_index))

print("<", end="")
print(*result, sep=", ", end="")
print(">")


# 9월 4일
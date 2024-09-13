N = int(input())
result = []

for i in range(N + 1):
  for j in range(N + 1):
    for k in range(N + 1):
      for h in range(N + 1):
        if i + j + k + h == N and (i * 1 + j * 5 + k * 10 + h * 50) not in result:
          result.append(i * 1 + j * 5 + k * 10 + h * 50)

print(len(result))
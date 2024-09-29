N, M = map(int, input().split())
arr = [i + 1 for i in range(N)]
result = []

def create_sequence(depth, sequence):
  if depth == M:
    result.append(sequence.copy())
    return
  
  num = 0
  if len(sequence) > 0 : num = sequence[len(sequence) - 1]

  for i in range(num + 1, N + 1):
    sequence.append(i)
    create_sequence(depth + 1, sequence)
    sequence.pop()

create_sequence(0, [])

result.sort()

for i in range(len(result)):
  print(*result[i])
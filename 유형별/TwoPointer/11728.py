N, M = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))
result = []

A_index = 0
B_index = 0

while A_index < N or B_index < M:
  if A_index == N:
    result.append(B[B_index])
    B_index += 1
    continue
  elif B_index == M:
    result.append(A[A_index])
    A_index += 1
    continue

  if A[A_index] > B[B_index]:
    result.append(B[B_index])
    B_index += 1
  elif A[A_index] < B[B_index]:
    result.append(A[A_index])
    A_index += 1
  else:
    result.extend([A[A_index], B[B_index]])
    A_index += 1
    B_index += 1

print(*result)
T = int(input())
P = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9]

for _ in range(T):
  N = int(input())

  if len(P) < N:
    while(len(P) < N):
      current_index = len(P) - 1
      P.append(P[current_index] + P[current_index-4])
  
  print(P[N-1])
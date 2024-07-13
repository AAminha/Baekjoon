N, M = map(int, input().split())
board = []
min_count = 100

for i in range(N):
  board.append(input())

for i in range(N - 7):
  for j in range(M - 7):
    count1 = 0
    count2 = 0
    for a in range(i, i+8):
      for b in range(j, j+8):
        if a % 2 == 0 and b % 2 == 0:
          if board[a][b] == 'B': count1 += 1
          else: count2 += 1
        elif a % 2 == 0 and b % 2 != 0:
          if board[a][b] == 'W': count1 += 1
          else: count2 += 1
        elif a % 2 != 0 and b % 2 == 0:
          if board[a][b] == 'W': count1 += 1
          else: count2 += 1
        else:
          if board[a][b] == 'B': count1 += 1
          else: count2 += 1
    
    min_count = min(min_count, count1, count2)

print(min_count)
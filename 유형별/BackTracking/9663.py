N = int(input())

def bt(row):
  global count

  for col in range(N):
      if row == N:
          count += 1
          return
      
      if visited[col] or diag_up[row + col] or diag_down[row - col + N - 1]:
          continue
      else:
          visited[col] = True
          diag_up[row + col] = True
          diag_down[row - col + N - 1] = True

          bt(row + 1)

          visited[col] = False
          diag_up[row + col] = False
          diag_down[row - col + N - 1] = False

visited = [False] * N
diag_up = [False] * (2 * N - 1)
diag_down = [False] * (2 * N - 1)
count = 0

bt(0)

print(count)
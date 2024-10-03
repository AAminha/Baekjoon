from itertools import combinations

N = int(input())

limit = 2 ** (N-1)

arr = []
result = 1e9

for _ in range(N):
  arr.append(list(map(int, input().split())))

for num in range(1, limit):
  team = list(format(num, f'0{N}b'))
  start = 0
  link = 0

  for i in range(0, N-1):
    for j in range(i+1, N):
      if team[i] == team[j]:
        if team[i] == '0': start += arr[i][j] + arr[j][i]
        else: link += arr[i][j] + arr[j][i]
  
  result = min(result, abs(start-link))

print(result)
from itertools import combinations

N, M = map(int, input().split())
city_map = []
home_co = []
chicken_co = []
result = 1e9

for i in range(N):
  row = list(map(int, input().split()))
  city_map.append(row)

  for j in range(N):
    if row[j] == 1:
      home_co.append((i, j))
    elif row[j] == 2:
      chicken_co.append((i, j))

chicken_co_comb = list(combinations(chicken_co, M))

for i in range(len(chicken_co_comb)):
  len_sum = 0

  for j in range(len(home_co)):
    home_len_sum = 1e9
    x, y = home_co[j]

    for k in range(M):
      a, b = chicken_co_comb[i][k]
      length = abs(x-a) + abs(y-b)
      home_len_sum = min(home_len_sum, length)
    
    len_sum += home_len_sum
  result = min(result, len_sum)

print(result)
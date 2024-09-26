N = int(input())
graph = []
result = [["N" for _ in range(N)] for _ in range(N)]

for _ in range(N):
  data = list(input())
  graph.append(data)

for i in range(N):
  for j in range(i):
    if graph[i][j] == "Y":
        result[i][j] = "Y"
        result[j][i] = "Y"

    for k in range(N):
      if i == k or j == k:
        continue
      if graph[i][j] == "N" and graph[i][k] == "Y" and graph[k][j] == "Y":
        result[i][j] = "Y"
        result[j][i] = "Y"


max = 0
for i in range(N):
  sum = result[i].count("Y")
  if max < sum:
    max = sum

print(max)
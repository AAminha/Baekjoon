from itertools import combinations

N = int(input())
player = [i for i in range(N)]
stats = []
result = 1e9

for _ in range(N):
  stats.append(list(map(int, input().split())))

comb = list(combinations(player, N//2))
for i in range(len(comb)):
  start_team = comb[i]
  link_team = list(set(player) - set(start_team))

  team_len = len(start_team)

  start_stat = 0
  link_stat = 0

  for j in range(team_len-1):
    for k in range(j+1, team_len):
      start_stat += stats[start_team[k]][start_team[j]] + stats[start_team[j]][start_team[k]]
      link_stat += stats[link_team[k]][link_team[j]] + stats[link_team[j]][link_team[k]]
  
  result = min(result, abs(start_stat - link_stat))

print(result)
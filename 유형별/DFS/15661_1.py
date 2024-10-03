# 플레이어 수 입력받기
N = int(input())

# 능력치 표 입력받기
arr = [list(map(int, input().split())) for _ in range(N)]

# 방문 기록
visited = [False for _ in range(N)]
visited[0] = True

# 결과
result = 1e9
def calculate():
  global result
  start = 0
  link = 0
  for i in range(N-1):
    for j in range(i+1, N):
      if visited[i] and visited[j]:
        start += arr[i][j] + arr[j][i]
      elif not visited[i] and not visited[j]:
        link += arr[i][j] + arr[j][i]
  
  result = min(result, abs(start-link))
  return

def is_start_team(num):
  if num == N:
    calculate()
    return
  
  visited[num] = True
  is_start_team(num+1)

  visited[num] = False
  is_start_team(num+1)

is_start_team(1)
print(result)
N, M = map(int, input().split())
arr = list(map(int, input().split()))
count = 0

start = 0
end = 0
sum = arr[0]
while end < N:
  if sum < M:
    end += 1
    if end < N: sum += arr[end]
  elif sum > M:
    sum -= arr[start]
    start += 1
  else:
    count += 1
    sum -= arr[start]
    start += 1
    end += 1
    
    if end < N: sum += arr[end]

print(count)
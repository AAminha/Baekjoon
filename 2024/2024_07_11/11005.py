n, b = map(int, input().split())
result = []
arr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

while(1):
  result.append(arr[n % b])

  n = n // b

  if n == 0:
    break

result.reverse()

print(*result, sep="")
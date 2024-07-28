import sys

N = int(input())
arr = []

for i in range(N):
  str = sys.stdin.readline().split()

  if str[0] == 'push':
    arr.append(str[1])
  elif str[0] == 'pop':
    if len(arr) > 0:
      print(arr.pop())
    else:
      print(-1)
  elif str[0] == 'size':
    print(len(arr))
  elif str[0] == 'empty':
    if len(arr) > 0:
      print(0)
    else:
      print(1)
  elif str[0] == 'top':
    if len(arr) > 0:
      num = arr.pop()
      print(num)
      arr.append(num)
    else:
      print(-1)
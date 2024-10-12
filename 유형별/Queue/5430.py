from collections import deque

T = int(input())

for _ in range(T):
  P = list(input())
  N = int(input())
  numbers = []
  isError = False
  isLeftStart = True

  array = input().replace('[', '').replace(']', '')
  if array == '':
    numbers = deque([])
  else:
    numbers = deque(list(map(int, array.split(','))))

  for fun in P:
    if fun == 'R':
      if isLeftStart:
        isLeftStart = False
      else:
        isLeftStart = True
    elif len(numbers) == 0:
      isError = True
      break
    else:
      if isLeftStart:
        numbers.popleft()
      else:
        numbers.pop()
  
  if not isLeftStart:
    numbers.reverse()
    
  if isError:
    print('error')
  else:
    print('[', end='')
    print(*numbers, sep=',', end='')
    print(']')
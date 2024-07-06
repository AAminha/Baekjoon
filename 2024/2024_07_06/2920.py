arr = list(map(int, input().split()))
ascending = True
descending = True

for i in range(8):
  if ascending and arr[i] != i + 1:
    ascending = False

  if descending and arr[i] != 8 - i:
    descending = False

if ascending:
  print('ascending')
elif descending:
  print('descending')
else:
  print('mixed')
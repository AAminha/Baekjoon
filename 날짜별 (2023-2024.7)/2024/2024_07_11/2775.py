num = int(input())

for _ in range(num):
  floor = int(input())
  room = int(input())

  arr = [i for i in range(room + 1)]

  for i in range(floor):
    for j in range(1, room + 1):
      arr[j] = arr[j] + arr[j-1]
  
  print(arr[room])
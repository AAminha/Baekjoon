x1 = [0,0]
x2 = [0,0]
y1 = [0,0]
y2 = [0,0]

result_x = 0
result_y = 0

for i in range(3):
  x, y = map(int, input().split())
  
  if x1[0] == 0:
    x1[0] = x
    x1[1] += 1
  elif x1[0] == x:
    x1[1] += 1
  elif x2[0] == 0:
    x2[0] = x
    x2[1] += 1
  elif x2[0] == x:
    x2[1] += 1

  if y1[0] == 0:
    y1[0] = y
    y1[1] += 1
  elif y1[0] == y:
    y1[1] += 1
  elif y2[0] == 0:
    y2[0] = y
    y2[1] += 1
  elif y2[0] == y:
    y2[1] += 1

if x1[1] == 2:
  result_x = x2[0]
else:
  result_x = x1[0]

if y1[1] == 2:
  result_y = y2[0]
else:
  result_y = y1[0]

print(result_x, result_y)
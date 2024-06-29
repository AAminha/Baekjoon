while(1):
  a, b = map(int, input().split())
  c = 0

  if a == b == 0:
    break

  # a가 중간값일 때
  c1 = 2 * a - b

  # b가 중간값일 때
  c2 = 2 * b - a

  # c가 중간값일 때
  c3 = (a + b) / 2

  if c3 == int(c3):
    c = min(c1, c2, c3)
  else:
    c = min(c1, c2)
    
  print(c)
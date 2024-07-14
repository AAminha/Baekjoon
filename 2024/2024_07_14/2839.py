N = int(input())
count5 = N // 5
count3 = (N % 5) // 3

while(1):
  if count5 * 5 + count3 * 3 == N:
      print(count3 + count5)
      break
  elif count5 > 0:
    count5 -= 1
    count3 = (N - count5 * 5) // 3
  elif count5 == 0:
    print(-1)
    break
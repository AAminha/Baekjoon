e, s, m = map(int, input().split())
count = 1

while(1):
  check_e = count % 15 if count % 15 > 0 else 15
  check_s = count % 28 if count % 28 > 0 else 28
  check_m = count % 19 if count % 19 > 0 else 19

  if check_e == e and check_s == s and check_m == m:
    print(count)
    break
  else:
    count += 1
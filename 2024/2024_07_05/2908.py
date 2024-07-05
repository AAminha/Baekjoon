a, b = map(str,input().split())
result_a = ""
result_b = ""

for i in range(3):
  result_a += a[2-i]
  result_b += b[2-i]

print(max(int(result_a), int(result_b)))
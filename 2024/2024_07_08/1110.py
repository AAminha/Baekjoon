num = int(input())
current_num = num
count = 0

while(1):
  current_num = current_num % 10 * 10 + (current_num // 10 + current_num % 10) % 10
  count += 1

  if current_num == num:
    break

print(count)
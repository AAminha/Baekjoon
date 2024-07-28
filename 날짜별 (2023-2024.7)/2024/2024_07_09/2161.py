n = int(input())
card = [i for i in range(1, n + 1)]
delete = []

count = 1
while(1):
  if len(delete) == n - 1:
    break

  if count % 2 == 1:
    delete.append(card[0])
    card.remove(card[0])
    count += 1
  else:
    selected = card.pop(0)
    card.append(selected)
    count += 1

print(*delete, *card)
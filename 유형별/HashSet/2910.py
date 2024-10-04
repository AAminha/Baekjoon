N, C = map(int, input().split())
sequence = list(map(int, input().split()))
dictionary = dict({})

for num in sequence:
  if num not in dictionary:
    dictionary[num] = 1
  else:
    dictionary[num] += 1

sorted_dictionary = sorted(dictionary.items(), key = lambda x: (-x[1], list(dictionary.keys()).index(x[0])))

for key, value in sorted_dictionary:
  for _ in range(value):
    print(key, end=" ")
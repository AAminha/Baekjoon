N = int(input())
ingredients = []
min_result = 1e9

for _ in range(N):
  ingredients.append(list(map(int, input().split())))

def calculate(arr, recent_index):
  global min_result
  
  if len(arr) > 0:
    sour = 1
    bitter = 0

    for i in range(len(arr)):
      sour *= arr[i][0]
      bitter += arr[i][1]
    
    min_result = min(min_result, abs(sour-bitter))
  
  for i in range(recent_index+1, len(ingredients)):
    arr.append(ingredients[i])
    calculate(arr, i)
    arr.pop()

calculate([], -1)
print(min_result)
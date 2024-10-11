N = int(input())
nums = list(map(int, input().split()))
operator = ["+", "-", "*", "%"]
operator_count = list(map(int, input().split()))

max_result = -1e10
min_result = 1e10

def dfs(current_depth, result):
  global max_result
  global min_result

  if current_depth == N-1:
    max_result = max(max_result, result)
    min_result = min(min_result, result)
    return
  
  for i in range(len(operator_count)):
    if operator_count[i] > 0:
      operator_count[i] -= 1
      new_result = calculate(result, nums[current_depth+1], operator[i])
      dfs(current_depth + 1, new_result)
      operator_count[i] += 1

def calculate(num1, num2, op):
  if op == "+":
    return num1 + num2
  elif op == "-":
    return num1 - num2
  elif op == "*":
    return num1 * num2
  else:
    return int(num1 / num2)

dfs(0, nums[0])

print(max_result)
print(min_result)
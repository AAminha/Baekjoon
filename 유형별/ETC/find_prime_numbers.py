# 소수 구하기
## 에라토스테네스의 체 원리 이용 => 시간 복잡도 O(N^1/2)
### 소수 파악을 위해 루프를 돌 때 전체를 다 돌지 않고 루트 N + 1까지만

def is_prime_number(num):
  if num == 1: return False
  elif num == 2: return True

  for i in range(2, int(num ** 0.5) + 1):
    if num % i == 0: return False
  
  return True
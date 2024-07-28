import math
import sys

while(1):
  num = sys.stdin.readline().strip()
  sum = 0

  if int(num) == 0:
    break

  for i in range(len(num)):
    sum += int(num[i]) * math.factorial(len(num) - i)
  
  print(sum)

# 파이썬의 input()은 실행시간이 느려서 자주 시간초과가 발생 => sys 모듈의 stdin 사용하면 빠름
# input() : 파이썬의 내장 함수 = 개행문자를 벗겨내기 -> 문자열로 변환 -> return
# sys.stdin : file object. 사용자의 입력을 받는 buffer를 만들어 buffer에서 읽어들임

# sys.stdin 사용법
## 여러 줄 입력 받기 => for line in sys.stdin 혹은 sys.stdin.readline() for _ in range(입력 개수)
## 한 줄 입력 받기 => x, y = sys.stdin.readline().split()
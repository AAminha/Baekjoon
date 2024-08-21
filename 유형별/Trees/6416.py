def input_data():
  while True:
    str = input().rstrip().split("  ")
    if not str[0]: continue

    for i in range(len(str)):
      num = list(map(int, str[i].split()))

      if num[0] == 0 and num[1] == 0:
        return False
      
      if num[0] < 0 and num[1] < 0:
        return True
      
      array.append(num)

count = 0
while True:
  # 변수 설정
  count += 1
  array = []
  dict = {}

  # 입력 받기
  if input_data(): break

  # dict에 정보 업데이트
  for i in range(len(array)):
    child = array[i][1]
    if child in dict:
      dict[child] += 1
    else:
      dict[child] = 1
  
  # 부모 노드 개수로 문제 없는지 판단
  zeroCount = 0
  twoParentCount = 0
  for i in dict:
    if dict[i] == 0: zeroCount += 1
    if dict[i] > 1: twoParentCount += 1

  # 추가: 사이클인지 아닌지 판단해야함

  if len(dict) == 0:
    print(f"Case {count} is a tree")
  elif zeroCount == 0 or zeroCount > 1 or twoParentCount > 0:
    print(f"Case {count} is not a tree")
  else:
    print(f"Case {count} is a tree.")
from collections import deque

data = deque(input())
tag = deque([])
word = deque([])
num = 0

while data:
  if data[0] == "<":
    tag.append(data[0])
    data.popleft()

    while data[0] != ">":
      tag.append(data[0])
      data.popleft()
    
    tag.append(data[0])
    data.popleft()

    print(*tag, sep="", end="")
    tag.clear()
  elif data[0] == " ":
    print(data[0], end="")
    data.popleft()
  else:
    while data and data[0] != " " and data[0] != "<":
      word.append(data[0])
      data.popleft()
    
    word.reverse()
    print(*word, sep="", end="")
    word.clear()
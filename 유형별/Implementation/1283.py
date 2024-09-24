N = int(input())
options = []
shortcut = [False for _ in range(26)]

for _ in range(N):
  options.append(list(input()))

for i in range(N):
  success = False
  for j in range(len(options[i])):
    if j == 0 or options[i][j-1] == " ":
      # 단축키 지정하기
      index = ord(options[i][j].upper()) - 65
      if not shortcut[index]:
        # 단축키 지정 성공
        options[i][j] = "[" + options[i][j] + "]"
        shortcut[index] = True
        success = True
        break

  if not success:
    for j in range(len(options[i])):
      if options[i][j] != " ":
        index = ord(options[i][j].upper()) - 65
        if not shortcut[index]:
          options[i][j] = "[" + options[i][j] + "]"
          shortcut[index] = True
          break

for i in range(N):
  print(*options[i], sep="")
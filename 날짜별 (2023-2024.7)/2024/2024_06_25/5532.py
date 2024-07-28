l = int(input())
a = int(input())
b = int(input())
c = int(input())
d = int(input())

math = a // c
kor = b // d

if a % c > 0:
  math += 1

if b % d > 0:
  kor += 1

print(l - max(math, kor))
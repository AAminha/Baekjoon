print(bin(int(input(), 8))[2:])

# 10진수에서 2진수, 8진수, 16진수 변환
## 방법 1) bin(), oct(), hex()
## 방법 2) format(value, 'b'), format(value, 'o'), format(value, 'x')

# 다른 진수에서 10진수로 변환
## 방법 1) int('0b111100', 2), int('0o74', 8), int('0x3c', 16)

# 다른 진수에서 다른 진수로 변환
## 방법 1) oct(0b111100), hex(0b111100), str(0b111100)
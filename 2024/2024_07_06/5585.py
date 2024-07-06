num = 1000 - int(input())
n_500 = num // 500
num -= 500 * n_500

n_100 = num // 100
num -= 100 * n_100

n_50 = num // 50
num -= 50 * n_50

n_10 = num // 10
num -= 10 * n_10

n_5 = num // 5
num -= 5 * n_5

print(n_500 + n_100 + n_50 + n_10 + n_5 + num)
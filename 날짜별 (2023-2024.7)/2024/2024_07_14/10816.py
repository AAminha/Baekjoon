import sys

N = int(input())
cards = list(map(int, sys.stdin.readline().split()))
cards.sort()

M = int(input())
checks = list(map(int, sys.stdin.readline().split()))
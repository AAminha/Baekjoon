function solution(n, s) {
    if (s < n) return [-1]
    
    const number = Math.floor(s / n)
    const remainder = s % n
    
    const minNumArr = new Array(n - remainder).fill(number)
    const maxNumArr = new Array(remainder).fill(number+1)
    
    return [...minNumArr, ...maxNumArr]
}
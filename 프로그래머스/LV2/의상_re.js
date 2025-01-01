function solution(clothes) {
    const closet = {}
    let sum = 1
    clothes.forEach(([name, type]) => {
        closet[type] = (closet[type] || 0) + 1
    })
    
    for(const type in closet) {
        sum *= closet[type] + 1
    }
    
    return sum - 1
}
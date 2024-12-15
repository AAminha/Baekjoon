function solution(brown, yellow) {
    let height = 2
    let width = (brown + 4) / 2 - height
    
    while(width >= height) {
        const result = (height - 2) * (width - 2)
        if(result === yellow) return [width, height]
        height++
        width--
    }
}
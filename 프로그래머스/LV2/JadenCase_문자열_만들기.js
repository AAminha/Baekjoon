function solution(s) {
    const words = s.split(' ')
    
    for(let i = 0; i < words.length; i++) {
        const newWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
        words[i] = newWord
    }
    
    return words.join(' ')
}
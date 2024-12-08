function solution(s, skip, index) {
    let result = ""
    skip = skip.split("").map(char => char.charCodeAt())
    
    for(let i = 0; i < s.length; i++) {
        let count = index
        let newChar = s[i].charCodeAt()
        
        while(count > 0) {
            newChar++
            if(newChar > 122) newChar -= 26
            if(!skip.includes(newChar)) count--
        }
        
        result += String.fromCharCode(newChar)
    }
    
    return result
}